import React from 'react';

import contextTypes from '../../../util/contextTypes';

class NavBar extends React.Component {

  static contextTypes = contextTypes;

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <div className="navBar">
        {this.props.title}
      </div>
    );
  }
}

export default NavBar;
