import React from 'react';

import SurveyPreview from '../../partials/surveyPreview/SurveyPreview';

import contextTypes from '../../../util/contextTypes';

class SurveyFeed extends React.Component {

  static contextTypes = contextTypes;

  constructor(props, context) {
    super(props, context);
    this.state = {
      surveys: this.context.getStore('SurveyStore').getState().surveys
    }
  }

  componentDidMount() {
    this.context.getStore('SurveyStore').listen(this.handleUpdateAllSurveys);
  }

  componentWillUnmount() {
    this.context.getStore('SurveyStore').unlisten(this.handleUpdateAllSurveys);
  }

  handleUpdateAllSurveys = (state) => {
    this.setState({
      surveys: state.surveys
    });
  }

  render() {
    let surveys = this.state.surveys.map((survey) => {
      return (
        <SurveyPreview survey={survey} />
      );
    });
    return (
      <div className="surveyFeed">
        {surveys}
      </div>
    );
  }
}

export default SurveyFeed;
