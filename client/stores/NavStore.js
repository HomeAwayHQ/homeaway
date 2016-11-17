class NavStore {

  constructor() {
    this.state = {};
    const {navigateSuccess, navigateFailure} = this.alt.getActions('NavActions');
    this.bindListeners({
      handleSuccess: navigateSuccess,
      handleFailure: navigateFailure
    });
  }

  handleSuccess({url, params, title, component}) {
    this.setState({
      navigationError: null,
      url: url,
      params: params,
      title: title,
      component: component
    });
  }

  handleFailure(error) {
    this.setState({
      navigationError: error,
    });
  }
}

export default NavStore;
