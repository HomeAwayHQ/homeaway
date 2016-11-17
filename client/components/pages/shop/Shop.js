import React from 'react';

import Link from '../../partials/link/Link';
import contextTypes from '../../../util/contextTypes';

class Shop extends React.Component {

  static contextTypes = contextTypes;

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="surveyFeed">
        Rewards Shop coming soon! <Link href="/logout">Logout</Link>
      </div>
    );
  }
}

export default Shop;
