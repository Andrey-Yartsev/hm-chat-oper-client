import React from 'react';

class ChatWeb extends React.Component {

  messageChanged(event) {
    this.props.messageChanged(event.target.value);
  }

  send() {
    event.preventDefault();
    this.props.send();
  }

  render() {
    return <div>
      <textarea
        onChange={this.messageChanged.bind(this)}
        placeholder="Введите текст сообщения..."
        value={this.props.state.message}
      ></textarea>
      <a href="#" onClick={this.send.bind(this)}>Отправить</a>
    </div>
  }
}

export default ChatWeb;