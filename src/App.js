import React, {Component} from 'react';
import Authorization from './components/Authorization';
import Chat from './components/Chat';
import Lines from './components/Lines';
import auth from './actions/auth';
import reduxConnect from './utils/reduxConnect';

class App extends Component {

  componentDidMount() {
    auth(this.context.store.dispatch);
  }

  render() {
    return (
      <div>
        <Authorization />
        {/*{ this.props.auth.token ? <Chat /> : '' }*/}
        { this.props.auth.token ? <Lines /> : '' }
      </div>
    );
  }

}

export default reduxConnect(App);
