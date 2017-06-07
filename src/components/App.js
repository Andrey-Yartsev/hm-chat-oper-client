import React, {Component} from 'react';
import Authorization from './Authorization';
import Chat from './Chat';
import Default from './Default';
// import Lines from './Lines';
import InvitesPopupWeb from './web/InvitesPopupWeb';

import reduxConnect from '../utils/reduxConnect';

import auth from '../actions/auth';

import '../static/css/main.css';
import '../static/css/layout.css';
import '../static/css/button.css';
import '../static/css/header.css';
import '../static/css/menu.css';
import '../static/css/auth.css';
import '../static/css/login.css';
import '../static/css/list.css';
import '../static/css/operators.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class App extends Component {

    componentDidMount() {
        auth(this.context.store);
        this.context.store.dispatch({type: 'INIT_MESSAGES'});
        this.context.store.dispatch({type: 'INIT_LINES'});

        document.addEventListener('DOMContentLoaded', function () {
            if (!Notification) {
                alert('Desktop notifications not available in your browser. Try Chromium.');
                return;
            }
            if (Notification.permission !== 'granted')
                Notification.requestPermission();
        });

    }

    renderInvitesPopup() {
        const invitesState = this.context.store.getState().invites;
        if (invitesState.invites && invitesState.invites.length) {
            return <InvitesPopupWeb
                invites={invitesState.invites}
                pick={this.pick.bind(this)}
            />;
        } else {
            return '';
        }
    }

    renderRoutes() {
        return <div>
            <Route path="/client/chat/:id" component={Chat}/>
            <Route exact={true} path="/" component={Default}/>
        </div>;
    }

    render() {
        if (!this.props.auth.token) {
            return <div className="pageWrapper loginPage">
                <div className="block">
                    &nbsp;
                    <Authorization />
                </div>
            </div>;
        }

        let invitesLink;
        const invitesState = this.context.store.getState().invites;
        if (invitesState.invites && invitesState.invites.length) {
            invitesLink = <li><a href="#invitesPopup">
                Приглашения ({invitesState.invites.length})
            </a></li>;
        } else {
            invitesLink = '';
        }
        return (
            <Router>
                <div className="pageWrapper">
                    <div className="header">
                        <div className="block">
                            <span className="logo">&nbsp;</span>
                            <Authorization />
                            <ul className="menu">
                                {invitesLink}
                            </ul>
                        </div>
                    </div>
                    <div className="content block">
                        { this.props.auth.token ? this.renderRoutes() : '' }
                    </div>
                    {this.renderInvitesPopup()}
                </div>
            </Router>
        );
    }

}

export default reduxConnect(App);
