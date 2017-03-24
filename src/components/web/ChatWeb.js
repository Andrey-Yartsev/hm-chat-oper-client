import React from 'react';
import ChatMessage from './ChatMessageWeb';

class ChatWeb extends React.Component {

  messageChanged(event) {
    this.props.messageChanged(event.target.value);
  }

  send() {
    event.preventDefault();
    this.props.send();
  }

  renderMessages() {
    const rows = [];
    for (let message of this.props.state.messages) {
      rows.push(<ChatMessage
        key={message._id}
        {...message}
      />);
    }
    return rows;
  }

  render() {
    return <div>
      <textarea
        onChange={this.messageChanged.bind(this)}
        placeholder="Введите текст сообщения..."
        value={this.props.state.text}
      ></textarea>
      <p><a href="#" onClick={this.send.bind(this)}>Отправить</a></p>
      <hr />
      <ul>{this.renderMessages()}</ul>
    </div>
  }
}

export default ChatWeb;