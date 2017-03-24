import React, {Component} from 'react';
import Authorization from './components/Authorization';
import Chat from './components/Chat';
import Lines from './components/Lines';
import Home from './components/web/HomeWeb';
import auth from './actions/auth';
import reduxConnect from './utils/reduxConnect';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    auth(this.context.store.dispatch);
  }

  // render() {
  //   return (
  //     <div>
  //       <Authorization />
  //       { this.props.auth.token ? <Lines /> : '' }
  //     </div>
  //   );
  // }

  getRoutes() {
    return <div>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/lines">Линии</Link></li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/lines" component={Lines} />
      <Route path="/chat/:id" component={Chat} />
    </div>;
  }

  render() {
    return (
      <Router>
        <div>
          <Authorization />
          { this.props.auth.token ? this.getRoutes() : '' }
         </div>
       </Router>
     );
   }

}

export default reduxConnect(App);
