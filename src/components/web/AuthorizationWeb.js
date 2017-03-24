import React from 'react';

class AuthorizationWeb extends React.Component {

  loginChanged(event) {
    this.props.loginChanged(event.target.value);
  }

  passwordChanged(event) {
    this.props.passwordChanged(event.target.value);
  }

  login(event) {
    event.preventDefault();
    this.props.login();
  }

  logout(event) {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.auth.token) {
      return <div>
        <p>Вы авторизованы</p>
        <a href="#" onClick={this.logout.bind(this)}>Выйти</a>
      </div>;
    }
    return <div>
      {
        this.props.state.error ?
          this.props.state.error : ''
      }
      <p>
        <input type="text" name="login"
               onChange={this.loginChanged.bind(this)}
               value={this.props.state.login}
        />
      </p>
      <p><input type="password" name="password"
                onChange={this.passwordChanged.bind(this)}
                value={this.props.state.password}
      /></p>
      <a href="#" onClick={this.login.bind(this)}>Login</a>
    </div>;
  }
}
export default AuthorizationWeb;