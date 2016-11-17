import React from 'react';

import Link from '../link/Link.js';
import contextTypes from '../../../util/contextTypes';

class SurveyPreview extends React.Component {

  static contextTypes = contextTypes;

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let survey = this.props.survey;
    return (
      <div className="surveyPreview">
        <div className="spBanner">
          <div className="spTitle">{survey.title}</div>
          <div className="spCredits">{survey.credits} credits</div>
        </div>
        <div className="spDetails">
          <p>• {survey.questionCount} questions</p>
          <p>• {survey.estimatedMinutes} minutes</p>
          <div className="spStart">Click to start</div>
        </div>
      </div>
    );
  }
}

export default SurveyPreview;
