import React from 'react';
import send from '../../actions/message/send';
import fetchMessages from '../../actions/message/fetch';
import initPickedLines from '../../actions/lines/initPicked';

export default ChatView =>
  class extends React.Component {
    state = {
      text: ''
    };

    componentDidMount() {
      this.fetchMessages();
      initPickedLines(
        this.context.store.getState(),
        this.context.store.dispatch
      );
    }

    getCurrentLine() {
      if (this.props.lines.lines.length === 0) return false;
      for (let line of this.props.lines.lines) {
        if (line._id === this.lineId()) {
          return line;
        }
      }
    }

    fetchMessages() {
      fetchMessages((messages) => {
        // ...
      }, (error) => {
        alert(error);
      })(
        this.context.store.dispatch,
        this.context.store.getState(),
        this.props.match.params.id
      );
    }

    lineId() {
      return this.props.match.params.id;
    }

    send() {
      send((r) => {
        this.setState({
          text: ''
        });
        // event exists in socket
        // this.context.store.dispatch({
        //   type: 'NEW_MESSAGE',
        //   message: r.data.message
        // });
      }, (error) => {})(
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

    render() {
      return <ChatView
        {...this.props}
        state={this.state}
        send={this.send.bind(this)}
        line={this.getCurrentLine()}
        messages={this.getMessages()}
        textChanged={this.textChanged.bind(this)}
      />
    }
  }