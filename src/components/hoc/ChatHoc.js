import React from 'react';
import fetchMessages from '../../actions/message/fetch';
import send from '../../actions/message/send';
import markViewed from '../../actions/message/markViewed';
import pickLine from '../../actions/lines/pick';
import initLines from '../../actions/lines/init';
import dropLine from '../../actions/lines/drop';
import fetchOperators from '../../actions/operators';
import invite from '../../actions/lines/invite';

export default (WrapperView, ChatView, OperatorsPopupView) =>
    class extends React.Component {
        state = {
            loading: true,
            text: ''
        };

        componentDidMount() {
            this.setState({
                lineId: this.lineId()
            });
            this.updateChat();
        }

        componentDidUpdate() {
            if (!this.props.chat.lineId) return;
            if (this.lineId() === this.props.chat.lineId) return;
            this.updateChat();
        }

        componentWillMount() {
            this.fetchOperators();
        }

        updateChat() {
            this.fetchMessages();
        }

        fetchMessages() {
            fetchMessages(() => {
            }, (error) => {
                alert(error);
            })(
                this.context.store.dispatch,
                this.context.store.getState(),
                this.lineId()
            );
        }

        lineId() {
            return this.props.match.params.id;
        }

        pick() {
            pickLine(() => {
                this.initLines();
            })(this.context.store.getState(), this.lineId());
        }

        drop() {
            dropLine(() => {
                this.initLines();
            })(this.context.store.getState(), this.lineId());
        }

        invite(operatorId) {
            invite(
                this.context.store.getState(),
                this.context.store.dispatch,
                this.state.lineId,
                operatorId
            );
        }

        initLines() {
            initLines(
                this.context.store.getState().auth.token,
                this.context.store.dispatch
            );
        }

        send() {
            send((r) => {
                this.setState({
                    text: ''
                });
                markViewed(
                    this.context.store.dispatch,
                    this.lineId()
                );
            }, (error) => {
            })(
                this.context.store.getState(),
                this.lineId(),
                this.state.text
            );
        }

        textChanged(text) {
            this.setState({text});
        }

        getMessages() {
            if (!this.props.messages.messages[this.lineId()]) {
                return [];
            }
            return this.props.messages.messages[this.props.match.params.id];
        }

        getCurrentLine() {
            if (
                this.props.lines.lines.length === 0 &&
                this.props.lines.newLines.length === 0
            ) {
                return false;
            }
            for (let line of this.props.lines.lines) {
                if (line._id === this.lineId()) {
                    line.picked = true;
                    return line;
                }
            }
            for (let line of this.props.lines.newLines) {
                if (line._id === this.lineId()) {
                    return line;
                }
            }
            return false;
        }

        renderLoader() {
            return <div className="cssload-thecube">
                <div className="cssload-cube cssload-c1"></div>
                <div className="cssload-cube cssload-c2"></div>
                <div className="cssload-cube cssload-c4"></div>
                <div className="cssload-cube cssload-c3"></div>
            </div>;
        }

        fetchOperators() {
            fetchOperators((operators) => {
                this.setState({operators});
            }, (error) => {
                alert(error);
            })(this.context.store.getState());
        }

        renderOperatorsPopup() {
            if (!this.state.operators) return '';
            return <OperatorsPopupView
                operators={this.state.operators}
                invite={this.invite.bind(this)}
            />
        }

        onOperatorsPopupOpening(lineId) {
            this.setState({
                lineId: lineId
            });
        }

        render() {
            if (this.props.chat.loading) {
                return <WrapperView className="col chat">
                    {this.renderLoader()}
                </WrapperView>
            }
            return <WrapperView className="col chat">
                {this.renderOperatorsPopup()}
                <ChatView
                    {...this.props}
                    state={this.state}
                    send={this.send.bind(this)}
                    pick={this.pick.bind(this)}
                    drop={this.drop.bind(this)}
                    invite={this.invite.bind(this)}
                    line={this.getCurrentLine()}
                    messages={this.getMessages()}
                    textChanged={this.textChanged.bind(this)}
                />
            </WrapperView>
        }
    }
