import React from 'react';

import contextTypes from '../../../util/contextTypes';

class Link extends React.Component {

  static contextTypes = contextTypes;

  constructor(props, context) {
    super(props, context);
    const router = this.context.router;
    let route, path;
    if (props.href) {
      path = props.href;
      route = router.getRoute(props.href);
    } else if (props.route) {
      path = router.makePath(props.route, props.params);
      route = router.getRoute(path);
    }
    this.state = {
      route: route,
      href: path
    };
  }

  handleClick = (event) => {
    if (this.state.route) {
      event.preventDefault();
      this.context
      .getActions('NavActions')
      .navigate(this.state.route.url);
      if (process.env.BROWSER) {
        history.pushState(null, '', this.state.route.url);
      }
    }
  }

  render() {
    return (
      <a className="link"
        onClick={this.handleClick}
        href={this.state.href}
        {...this.props}
      >
        {this.props.children}
      </a>
    );
  }
}

export default Link;
