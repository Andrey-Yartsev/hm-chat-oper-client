import React from 'react';

class ChatMessageWeb extends React.Component {

  render() {
    return <li>
      {
        this.props.author ?
          <b>{this.props.author.name}:</b> :
          <b>Аноним:</b>
      }
      &nbsp;
      {this.props.text}
    </li>
  }
}

export default ChatMessageWeb;