class SurveyStore {

  constructor() {
    this.state = {};
    const {updateAllSurveys} = this.alt.getActions('SurveyActions');
    this.bindListeners({
      handleUpdateAll: updateAllSurveys
    });
  }

  handleUpdateAll(surveys) {
    this.setState({
      surveys: surveys
    });
  }
}

export default SurveyStore;
