import React from 'react';
import initPickedLines from '../../actions/lines/initPicked';
import initLines from '../../actions/lines/init';
import pickLine from '../../actions/lines/pick';

export default (WrapperView, LinesView) =>
    class extends React.Component {
        componentDidMount() {
            this.initLines();
        }

        pick(id) {
            pickLine(() => {
                this.initLines();
            })(this.context.store.getState(), id);
        }

        initLines() {
            initLines(
                this.context.store.getState().auth.token,
                this.context.store.dispatch
            );
            initPickedLines(
                this.context.store.getState(),
                this.context.store.dispatch
            );
        }

        render() {
            let currentLine = false;
            if (this.props.chat) {
                currentLine = this.props.chat.lineId;
            }

            return <WrapperView className="col list lines">
                <LinesView
                    currentLine={currentLine}
                    title="Схваченые линии"
                    isNew={false}
                    lines={this.props.lines.lines}
                    state={this.state}
                />
                <LinesView
                    currentLine={currentLine}
                    title="Не схваченые линии"
                    isNew={true}
                    lines={this.props.lines.newLines}
                    state={this.state}
                    pick={this.pick.bind(this)}
                />
            </WrapperView>;
        }
    }

