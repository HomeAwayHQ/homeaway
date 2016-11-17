import React from 'react';

import Link from '../../partials/link/Link';
import contextTypes from '../../../util/contextTypes';

class Login extends React.Component {

  static contextTypes = contextTypes;

  constructor(props, context) {
    super(props, context);
    this.state = {

    }
  }

  componentDidMount() {
    this.refs.phoneInput.focus();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let phoneInput = this.refs.phoneInput,
        phone = phoneInput.value.trim(),
        passwordInput = this.refs.passwordInput,
        password = passwordInput.value;
    if (!phone) {
      return phoneInput.focus();
    }
    if (!password) {
      return passwordInput.focus();
    }
    this.context
    .getActions('AuthActions')
    .login(phone, password)
    .then(() => {
      let url = this.context.getStore('NavStore').getState().urlAfterAuth || '/';
      this.context
      .getActions('NavActions')
      .navigate(url);
      if (process.env.BROWSER) {
        history.pushState(null, '', url);
      }
    })
    .catch((err) => {
      alert('Incorrect phone number or password.');
      passwordInput.value = '';
      passwordInput.focus();
    });
  }

  render() {
    return (
      <div className="login">
        <div className="banner">
          <div className="bannerSpacer"></div>
          <div className="bannerText">
            Hello again!
          </div>
          <div className="bannerSpacer"></div>
        </div>
        <div className="largeSpacer"></div>
        <div className="smallText">
          Welcome back to the community that cares
        </div>
        <div className="smallSpacer"></div>
        <form className="loginForm">
          <div className="loginFormField">
            <input className="loginFormInput"
              ref="phoneInput"
              name="phone"
              type="text"
              placeholder="Phone number"
            />
          </div>
          <div className="loginFormField">
            <input className="loginFormInput"
              ref="passwordInput"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="loginFormField">
            <input className="loginFormSubmit"
              type="submit"
              value="Log in"
              onClick={this.handleSubmit}
            />
            <div className="forgot">
              <Link className="forgotLink" href="/forgot">Forgot my password</Link>
            </div>
          </div>
        </form>
        <div className="largeSpacer"></div>
        <div className="smallSpacer"></div>
        <div className="smallText">
          <span>New to HomeAway? <Link className="toJoin" href="/join">Join</Link></span>
        </div>
      </div>
    );
  }
}

export default Login;
