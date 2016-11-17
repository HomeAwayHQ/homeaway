import request from 'superagent';

class SurveyActions {

  constructor() {
    this.generateActions('updateAllSurveys');
  }

  updateAll() {
    this.dispatch();
    var _this = this;
    var url = this.alt.baseURL + '/api/survey?sort=-createdAt';
    return new Promise((resolve, reject) => {
      if (_this.alt.cookies) {
        request
        .get(url)
        .set('Cookie', `connect.sid=${_this.alt.cookies['connect.sid']}`)
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          resolve(res);
          _this.actions.updateAllSurveys(res.body);
        });
      } else {
        request
        .get(url)
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          resolve(res);
          _this.actions.updateAllSurveys(res.body);
        });
      }
    });
  }
}

export default SurveyActions;
