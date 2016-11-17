import request from 'superagent';

class AccountActions {

  constructor() {
    this.generateActions('updateAccount');
  }

  edit(info) {
    this.dispatch();
    var _this = this;
    return new Promise((resolve, reject) => {
      var self = this.alt.getStore('UserStore').getState().self;
      if (!self) {
        return resolve(false);
      }
      var url = this.alt.baseURL + '/api/account/' + self.accountId;
      var cookies = this.alt.cookies;
      var cookieVal = cookies ? `connect.sid=${cookies['connect.sid']}` : null;
      if (cookies) {
        request
        .put(url)
        .set('Coookie', cookieVal)
        .send(info)
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          return resolve(res);
        });
      } else {
        request
        .put(url)
        .send(info)
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          return resolve(res);
        });
      }
    });
  }

  update() {
    this.dispatch();
    var _this = this;
    return new Promise((resolve, reject) => {
      var self = this.alt.getStore('UserStore').getState().self;
      if (!self) {
        return resolve(false);
      }
      var url = this.alt.baseURL + '/api/account/' + self.accountId;
      var cookies = this.alt.cookies;
      var cookieVal = cookies ? `connect.sid=${cookies['connect.sid']}` : null;
      if (cookies) {
        request
        .get(url)
        .set('Cookie', cookieVal)
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          _this.actions.updateAccount(res.body);
          return resolve(res);
        });
      } else {
        request
        .get(url)
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          _this.actions.updateAccount(res.body);
          return resolve(res);
        });
      }
    });
  }
}

export default AccountActions;
