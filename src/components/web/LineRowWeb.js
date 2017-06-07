import React from 'react';
import {
    Link
} from 'react-router-dom';
import formatDate from '../../utils/date';

class LineRowWeb extends React.Component {

    enter(id) {
        window.location = '/client/chat/' + id;
    }

    pick(id) {
        this.props.pick(id);
    }

    drop(id) {
        this.props.drop(id);
    }

    onOperatorsPopupOpening(id) {
        this.props.onOperatorsPopupOpening(id);
    }

    renderLastMessage() {
        if (!this.props.lastMessage) return '';
        return <div className="lastMessage">
            <div className="text">
                {this.props.lastMessage.text}
            </div>
            <div className="date">
                {formatDate(this.props.lastMessage.dt)}
            </div>
        </div>
    }

    render() {
        return <li className={this.props.isCurrent ? 'current' : ''}>
            <Link to={"/client/chat/" + this.props._id}>
                <div className="name">{this.props.description}</div>
                {this.renderLastMessage()}
            </Link>
        </li>;
    }
}

export default LineRowWeb;