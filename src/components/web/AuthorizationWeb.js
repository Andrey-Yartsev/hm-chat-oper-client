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

  render() {
    if (this.props.auth.token) {
      return <div>
        <p>Вы авторизованы</p>
      </div>;
    }
    return <div>
      {
        this.props.data.error ?
          this.props.data.error : ''
      }
      <p>
        <input type="text" name="login"
               onChange={this.loginChanged.bind(this)}
               value={this.props.login.login}
        />
      </p>
      <p><input type="password" name="password"
                onChange={this.passwordChanged.bind(this)}
                value={this.props.login.password}
      /></p>
      <a href="#" onClick={this.login.bind(this)}>Login</a>
      {this.props.data.asd}
    </div>;
  }
}
export default AuthorizationWeb;