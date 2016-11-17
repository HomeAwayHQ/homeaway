import React from 'react';

import Link from '../../partials/link/Link';
import contextTypes from '../../../util/contextTypes';

class Join extends React.Component {

  static contextTypes = contextTypes;

  constructor(props, context) {
    super(props, context);
    this.state = {

    }
  }

  componentDidMount() {
    this.refs.firstNameInput.focus();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let firstNameInput = this.refs.firstNameInput,
        firstName = firstNameInput.value.trim();
    if (!firstName) {
      return firstNameInput.focus();
    }
    let lastNameInput = this.refs.lastNameInput,
        lastName = lastNameInput.value.trim();
    if (!lastName) {
      return lastNameInput.focus();
    }
    let phoneInput = this.refs.phoneInput,
        phone = phoneInput.value.trim();
    if (!phone) {
      return phoneInput.focus();
    }
    let passwordInput = this.refs.passwordInput,
        password = passwordInput.value;
    if (!password) {
      return passwordInput.focus();
    }
    this.context
    .getActions('AuthActions')
    .signup(firstName, lastName, phone, password)
    .then(() => {
      this.context
      .getActions('AuthActions')
      .login(phone, password)
      .then(() => {
        let url = '/';
        this.context
        .getActions('NavActions')
        .navigate(url);
        if (process.env.BROWSER) {
          history.pushState(null, '', url);
        }
      });
    })
    .catch((err) => {
      if (err) {
        alert('Something went wrong. Please try again. If the problem persists, let us know.');
        firstNameInput.value = '';
        lastNameInput.value = '';
        phoneInput.value = '';
        passwordInput.value = '';
        firstNameInput.focus();
      } else {
        alert('Someone has already signed up with that phone address.');
        phoneInput.value = '';
        phoneInput.focus();
      }
    });
  }

  render() {
    return (
      <div className="join">
        <div className="banner">
          <div className="bannerSpacer"></div>
          <div className="bannerText">
            Welcome to HomeAway
          </div>
          <div className="bannerSpacer"></div>
        </div>
        <div className="largeSpacer"></div>
        <div className="smallText">
          Create an account to get started
        </div>
        <div className="smallSpacer"></div>
        <form className="joinForm">
          <div className="joinFormField">
            <div className="firstName">
              <input className="joinFormInput"
                ref="firstNameInput"
                type="text"
                placeholder="First"
              />
            </div>
            <div className="lastName">
              <input className="joinFormInput"
                ref="lastNameInput"
                type="text"
                placeholder="Last"
              />
            </div>
          </div>
          <div className="joinFormField">
            <input className="joinFormInput"
              ref="phoneInput"
              type="text"
              placeholder="Phone"
            />
          </div>
          <div className="joinFormField">
            <input className="joinFormInput"
              ref="passwordInput"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="joinFormField">
            <input className="joinFormSubmit"
              type="submit"
              value="Join"
              onClick={this.handleSubmit}
            />
          </div>
        </form>
        <div className="largeSpacer"></div>
        <div className="smallSpacer"></div>
        {!this.context.getStore('AuthStore').getState().authenticated ?
        <div className="smallText">
          <span>Already on HomeAway? <Link className="toLogin" href="/login">Log in</Link></span>
        </div> :
        <div className="smallText">
          <span>{'You\'re logged in.'} <Link className="toLogin" href="/">Go to Map</Link></span>
        </div>}
      </div>
    );
  }
}

export default Join;
