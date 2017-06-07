import React from 'react';


import formatDate from '../../utils/date';


class ChatMessageWeb extends React.Component {

    render() {
        return <li className={this.props.mine ? 'mine' : ''}>
            <div className="triangle"></div>
            {this.props.viewed ? '' : <div className="unread"></div>}
            <div className="login">{this.props.author.name}:</div>
            <div className="message">{this.props.text}</div>
            <div className="date">{formatDate(this.props.dt)}</div>
        </li>
    }
}

export default ChatMessageWeb;