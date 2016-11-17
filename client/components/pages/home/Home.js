import React from 'react';

import Link from '../../partials/link/Link';
import contextTypes from '../../../util/contextTypes';

class Home extends React.Component {

  static contextTypes = contextTypes;

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        Welcome to HomeAway! Check back for new features as we build them. <Link href="/logout">Logout</Link>
      </div>
    );
  }
}

export default Home;
