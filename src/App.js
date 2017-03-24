import React, {Component} from 'react';
import Authorization from './components/Authorization';
import auth from './actions/auth';
import reduxConnect from './utils/reduxConnect';

class App extends Component {

  componentDidMount() {
    auth(this.context.store.dispatch);
  }

  render() {
    return (
      <Authorization />
    );
  }

}

export default reduxConnect(App);
