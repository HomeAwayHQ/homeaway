class UserStore {

  constructor() {
    this.state = {};
    const {updateSelfUser} = this.alt.getActions('UserActions');
    this.bindListeners({
      handleUpdateSelf: updateSelfUser
    });
  }

  handleUpdateSelf(self) {
    this.setState({
      self: self
    });
  }
}

export default UserStore;
