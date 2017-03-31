import React from 'react';
import ChatMessage from './ChatMessageWeb';

import '../../static/css/chat.css';

class ChatWeb extends React.Component {

  textChanged(event) {
    this.props.textChanged(event.target.value);
  }

  send() {
    event.preventDefault();
    this.props.send();
  }

  renderMessages() {
    const rows = [];
    for (let message of this.props.messages) {
      rows.push(<ChatMessage
        key={message._id}
        {...message}
      />);
    }
    return rows;
  }

  render() {
    return <div className="chat cols">
      <div className="col">
      <h1>{this.props.line ?
        this.props.line.description :
        '&nbsp;'
      }</h1>
      <div className="form">
        <textarea
          onChange={this.textChanged.bind(this)}
          placeholder="Введите текст сообщения..."
          value={this.props.state.text}
        ></textarea>
        <p><a href="#" onClick={this.send.bind(this)} className="button">Отправить</a></p>
      </div>
      </div>
      <div className="col">
        <ul className="chatMessages list">
          {this.renderMessages()}
        </ul>
      </div>
    </div>
  }
}

export default ChatWeb;