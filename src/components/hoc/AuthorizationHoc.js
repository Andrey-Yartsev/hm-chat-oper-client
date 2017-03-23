import React from 'react';

export default AuthorizationView =>
  class extends React.Component {
    state = {
      data: []
    };
    login() {
      this.context.store.dispatch({
        type: 'SET_AUTH',
        profile: {
          login: 'masted'
        }
      });
    }
    componentDidMount() {
      this.setState({
        data: {
          asd: 123
        }
      });
    }
    render() {
      return <AuthorizationView data={this.state.data} login={this.login.bind(this)}/>
    }
  };





