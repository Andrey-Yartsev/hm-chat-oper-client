import React from 'react';
import send from '../../actions/message/send';
import getMessages from '../../actions/message/get';

export default ChatView =>
  class extends React.Component {
    state = {
      text: '',
      messages: []
    };

    componentDidMount() {
      this.getMessages();
    }

    getMessages() {
      getMessages((messages) => {
        this.setState({messages});
      }, (error) => {
        alert(error);
      })(
        this.context.store.getState(),
        this.props.match.params.id
      );
    }

    send() {
      send(() => {
        this.getMessages();
        this.setState({
          text: ''
        });
      }, (error) => {})(
        this.context.store.getState(),
        this.props.match.params.id,
        this.state.text
      );
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