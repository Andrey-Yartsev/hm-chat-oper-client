import React from 'react';

class AuthorizationWeb extends React.Component {
  login(event) {
    event.preventDefault();
    this.props.login();
  }
  render() {
    return <div>
      <a href="#" onClick={this.login.bind(this)}>Login</a>
      {this.props.data.asd}
    </div>;
  }
}
export default AuthorizationWeb;