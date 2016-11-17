class AuthStore {

  constructor() {
    this.state = {};
    const {authenticate, unauthenticate} = this.alt.getActions('AuthActions');
    this.bindListeners({
      handleAuthenticate: authenticate,
      handleUnauthenticate: unauthenticate
    });
  }

  handleAuthenticate() {
    this.setState({
      authenticated: true
    });
  }

  handleUnauthenticate() {
    this.setState({
      authenticated: false
    });
  }
}

export default AuthStore;
