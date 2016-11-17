import request from 'superagent';

class UserActions {

  constructor() {
    this.generateActions('updateSelfUser');
  }

  updateSelf() {
    this.dispatch();
    var _this = this;
    var url = this.alt.baseURL + '/api/self';
    var cookies = this.alt.cookies;
    var cookieVal = cookies ? `connect.sid=${cookies['connect.sid']}` : null;
    return new Promise((resolve, reject) => {
      if (cookies) {
        request
        .get(url)
        .set('Cookie', cookieVal)
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          _this.actions.updateSelfUser(res.body);
          return resolve(res);
        });
      } else {
        request
        .get(url)
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          _this.actions.updateSelfUser(res.body);
          return resolve(res);
        });
      }
    });
  }
}

export default UserActions;
