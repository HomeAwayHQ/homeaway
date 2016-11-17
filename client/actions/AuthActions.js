import request from 'superagent';

class AuthActions {

  constructor() {
    this.generateActions('authenticate',
                         'unauthenticate');
  }

  checkAuthStatus() {
    this.dispatch();
    var _this = this,
        url = this.alt.baseURL + '/api/authenticate',
        cookies = this.alt.cookies,
        cookieVal = cookies ? `connect.sid=${cookies['connect.sid']}` : null;
    return new Promise((resolve, reject) => {
      if (cookies) {
        request
        .get(url)
        .set('Cookie', cookieVal)
        .end((err, res) => {
          if (err) {
            _this.actions.unauthenticate();
            return reject(err);
          } else {
            _this.actions.authenticate();
            return resolve(res);
          }
        });
      } else {
        request
        .get(url)
        .end((err, res) => {
          if (err) {
            _this.actions.unauthenticate();
            return reject(err);
          } else {
            _this.actions.authenticate();
            return resolve(res);
          }
        });
      }
    });
  }

  login(phone, password) {
    this.dispatch(phone, password);
    var _this = this,
        url = this.alt.baseURL + '/api/authenticate',
        cookies = this.alt.cookies,
        cookieVal = cookies ? `connect.sid=${cookies['connect.sid']}` : null;
    return new Promise((resolve, reject) => {
      if (cookies) {
        request
        .post(url)
        .set('Cookie', cookieVal)
        .send({
          phone: phone,
          password: password
        })
        .end((err, res) => {
          if (err) {
            _this.actions.unauthenticate();
            return reject(err);
          } else {
            _this.actions.authenticate();
            return resolve(res);
          }
        });
      } else {
        request
        .post(url)
        .send({
          phone: phone,
          password: password
        })
        .end((err, res) => {
          if (err) {
            _this.actions.unauthenticate();
            return reject(err);
          } else {
            _this.actions.authenticate();
            return resolve(res);
          }
        });
      }
    });
  }

  signup(firstName, lastName, phone, password) {
    this.dispatch(firstName, lastName, phone, password);
    var _this = this,
        url = this.alt.baseURL + '/api/signup',
        cookies = this.alt.cookies,
        cookieVal = cookies ? `connect.sid=${cookies['connect.sid']}` : null,
        payload = {
          phone: phone,
          name: {
            first: firstName,
            last: lastName
          },
          password: password
        };
    return new Promise((resolve, reject) => {
      if (cookies) {
        request
        .post(url)
        .set('Cookie', cookieVal)
        .send(payload)
        .end((err, res) => {
          if (err || !res.body) {
            _this.actions.unauthenticate();
            return reject(err || false);
          } else {
            _this.actions.authenticate();
            return resolve(res);
          }
        });
      } else {
        request
        .post(url)
        .send(payload)
        .end((err, res) => {
          if (err || !res.body) {
            _this.actions.unauthenticate();
            return reject(err || false);
          } else {
            _this.actions.authenticate();
            return resolve(res);
          }
        });
      }
    });
  }
}

export default AuthActions;
