import React, {Component} from 'react';
import Authorization from './components/Authorization';
import Chat from './components/Chat';
import Lines from './components/Lines';
import Home from './components/web/HomeWeb';
import auth from './actions/auth';
import reduxConnect from './utils/reduxConnect';

import './static/css/main.css';
import './static/css/header.css';
import './static/css/menu.css';
import './static/css/auth.css';
import './static/css/login.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    auth(this.context.store.dispatch);
  }

  renderRoutes() {
    return <div>
      <Route exact path="/" component={Home}/>
      <Route path="/lines" component={Lines}/>
      <Route path="/chat/:id" component={Chat}/>
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
    return (
      <Router>
        <div className="pageWrapper">
          <div className="header">
            <div className="block">
              <span className="logo">&nbsp;</span>
              <Authorization />
              <ul className="menu">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/lines">Линии</Link></li>
              </ul>
            </div>
          </div>
          <div className="content block">
            { this.props.auth.token ? this.renderRoutes() : '' }
          </div>
        </div>
      </Router>
    );
  }

}

export default reduxConnect(App);
