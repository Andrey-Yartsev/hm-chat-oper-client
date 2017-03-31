import React from 'react';

import javascriptTimeAgo from 'javascript-time-ago';
javascriptTimeAgo.locale(require('javascript-time-ago/locales/ru'));
const timeAgo = new javascriptTimeAgo('ru-RU');
import dtf from 'dtf';
dtf.locale('ru');

const formatDate = (date) => {
  const _date = new Date(date);
  if ((new Date() - _date) / 1000 < 86400) {
    // Выводим относительное время, если меньше одного дня
    return timeAgo.format(_date);
  } else {
    return dtf.format(_date, 'hh:mm, W, D MM Y');
  }
};

class ChatMessageWeb extends React.Component {



  render() {
    return <li>
      <div className="login">{this.props.author.name}:</div>
      <div className="message">{this.props.text}</div>
      <div className="date">{formatDate(this.props.dt)}</div>
    </li>
  }
}

export default ChatMessageWeb;