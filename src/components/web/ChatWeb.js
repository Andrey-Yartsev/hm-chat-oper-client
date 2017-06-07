import React from 'react';
import ChatMessage from './ChatMessageWeb';

import '../../static/css/chat.css';
import sendImage from '../../static/img/send.svg';


class ChatWeb extends React.Component {

    state = {
        eventsAdded: false
    };

    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keypress", this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keypress", this.handleKeyPress);
    }

    handleKeyPress(e) {
        if (e.key === 'Enter' && e.ctrlKey) this.send();
    }

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
                mine={this.props.auth.profileId === message.author._id}
                key={message._id}
                {...message}
            />);
        }
        return rows;
    }

    renderPickDropButton() {
        if (!this.props.line) return '';
        if (this.props.line.picked) {
            return <span
                onClick={this.props.drop}
                className="button">Завершить разговор</span>;
        } else {
            return <span
                onClick={this.props.pick}
                className="button">Взять</span>;
        }
    }

    renderInviteButton() {
        if (!this.props.line.picked) return '';
        return <a
            href="#operatorsPopup"
            className="button blue">Пригласить</a>;
    }

    renderTextarea() {
        if (!this.props.line.picked) {
            return '';
        }
        return <div className="form">
            {this.props.state.text ?
                <div className="send"
                     onClick={this.send.bind(this)}
                ></div> : ''}
            <textarea
                onChange={this.textChanged.bind(this)}
                placeholder="Введите текст сообщения..."
                value={this.props.state.text}
            ></textarea>
        </div>;
    }

    componentDidUpdate() {
        setTimeout(() => {
            const objDiv = document.getElementById('chatMessages');
            if (objDiv) objDiv.scrollTop = objDiv.scrollHeight;
        },100);
    }

    render() {
        return <div>
            <div className="chatHeader">
                <div className="title">
                    {this.props.line ?
                        this.props.line.description :
                        ''
                    }
                </div>
                <div className="chatMenu">
                    {this.renderInviteButton()}
                    {this.renderPickDropButton()}
                </div>
            </div>
            <ul id="chatMessages" className={'chatMessages list' +
            (this.props.line.picked ? ' picked' : '')}>
                {this.renderMessages()}
            </ul>
            {this.renderTextarea()}
        </div>
    }
}

export default ChatWeb;