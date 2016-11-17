import React from 'react';

import Link from '../../partials/link/Link';
import contextTypes from '../../../util/contextTypes';

class Profile extends React.Component {

  static contextTypes = contextTypes;

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="surveyFeed">
        Profile coming soon! <Link href="/logout">Logout</Link>
      </div>
    );
  }
}

export default Profile;
