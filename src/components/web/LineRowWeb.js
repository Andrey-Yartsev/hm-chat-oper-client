import React from 'react';

class LineRowWeb extends React.Component {

  pick(id) {
    this.props.pick(id);
  }

  drop(id) {
    this.props.drop(id);
  }

  onOperatorsPopupOpening(id) {
    this.props.onOperatorsPopupOpening(id);
  }

  render() {
    let unread = false;
    if (this.props.count) {
      unread = this.props.count;
    } else if (this.props.unread) {
      unread = '*';
    }
    return <li>
      {this.props.description ? <div className="name">{this.props.description}</div> : ''}
      {unread && this.props.lastMessage ? <div className="newMessagesCount">{unread}</div> : ''}
      {unread && this.props.lastMessage && this.props.lastMessage.text ? <p>{this.props.lastMessage.text}</p> : ''}
      {
        this.props.isNew ?
          <div className="buttons">
            <span
                onClick={this.pick.bind(this, this.props._id)}
                className="button"
          >Взять</span></div> :
          <div className="buttons">
            <a href={'/client/chat/' + this.props._id}
               className="button blue"
            >Войти</a>
            <a href="#operatorsPopup"
               onClick={this.onOperatorsPopupOpening.bind(this, this.props._id)}
               className="button blue"
            >Пригласить</a>
            <span
               onClick={this.drop.bind(this, this.props._id)}
               className="button"
            >Отдать</span>
          </div>
      }
    </li>
  }
}

export default LineRowWeb;