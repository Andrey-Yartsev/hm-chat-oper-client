import React from 'react';

class AuthorizationWeb extends React.Component {
  login(event) {
    event.preventDefault();
    this.props.login();
  }

  render() {
    if (this.props.auth.profile) {
      return <div>
        <p>Вы авторизованы как:</p>
        <b>{this.props.auth.profile.login}</b>
      </div>;
    }
    return <div>
      <a href="#" onClick={this.login.bind(this)}>Login</a>
      {this.props.data.asd}
    </div>;
  }
}
export default AuthorizationWeb;