import React from 'react';
import request from '../../utils/request';

export default AuthorizationView =>
  class extends React.Component {
    state = {
      data: []
    };

    loginChanged(login) {
      this.context.store.dispatch({
        type: 'CHANGE_LOGIN',
        login: login
      });
    }

    passwordChanged(password) {
      this.context.store.dispatch({
        type: 'CHANGE_PASSWORD',
        password: password
      });
    }

    login() {
      request(this.context.store, {
        method: 'post',
        path: 'operator/authorize',
        data: {
          login: this.props.login.login,
          password: this.props.login.password
        }
      }).then((r) => {
        this.context.store.dispatch({
          type: 'SET_AUTH',
          token: r.data.token
        });
      }).catch((e) => {
        this.setState({
          data: {
            error: 'Неверный логин или пароль'
          }
        });
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
      return <AuthorizationView
        {...this.props}
        data={this.state.data}
        login={this.login.bind(this)}
        loginChanged={this.loginChanged.bind(this)}
        passwordChanged={this.passwordChanged.bind(this)}
      />
    }
  };
