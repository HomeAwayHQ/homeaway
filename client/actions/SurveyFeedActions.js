class SurveyFeedActions {

  load() {
    const {SurveyActions} = this.alt.actions;
    this.dispatch();
    return new Promise((resolve, reject) => {
      SurveyActions
      .updateAll()
      .then(() => {
        return resolve(false);
      })
      .catch(reject);
    });
  }
}

export default SurveyFeedActions;
