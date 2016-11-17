class AccountStore {

  constructor() {
    this.state = {};
    const {updateAccount} = this.alt.getActions('AccountActions');
    this.bindListeners({
      handleUpdate: updateAccount
    });
  }

  handleUpdate(account) {
    this.setState({
      account: account
    });
  }
}

export default AccountStore;
