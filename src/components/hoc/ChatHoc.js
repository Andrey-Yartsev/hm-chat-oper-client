import React from 'react';
import send from '../../actions/message/send';

export default ChatView =>
  class extends React.Component {
    state = {
      text: ''
    };

    send() {
      send()(this.context.store.getState(), this.state.text);
    }

    messageChanged(text) {
      this.setState({text});
    }

    render() {
      return <ChatView
        {...this.props}
        state={this.state}
        send={this.send.bind(this)}
        messageChanged={this.messageChanged.bind(this)}
      />
    }
  }