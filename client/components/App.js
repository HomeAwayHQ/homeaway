import React from 'react';

import TabBar from './partials/tabBar/TabBar';
import contextTypes from '../util/contextTypes';

class App extends React.Component {

  static childContextTypes = contextTypes;

  getChildContext() {
    const {app} = this.props;
    return {
      // Flux core
      getActions: app.getActions.bind(app),
      getStore: app.getStore.bind(app),
      router: app.router,

      // Flux options
      baseURL: app.baseURL,
      cookies: app.cookies
    };
  }

  constructor(props, context) {
    super(props, context);
    const navState = props.app.getStore('NavStore').getState();
    this.state = {
      navigationError: navState.navigationError,
      url: navState.url,
      params: navState.params,
      component: navState.component || props.component
    }
  }

  componentDidMount() {
    window.onpopstate = (event) => {
      this.props.app
      .getActions('NavActions')
      .navigate(document.location.pathname);
    };
    this.props.app.getStore('NavStore').listen(this.handleNavigate);
  }

  componentWillUnmount() {
    this.props.app.getStore('NavStore').unlisten(this.handleNavigate);
  }

  handleNavigate = (state) => {
    if (state.navigationError) {
      this.setState({
        navigationError: state.navigationError
      });
    } else {
      this.setState({
        navigationError: null,
        url: state.url,
        params: state.params,
        component: state.component
      });
      document.title = state.title;
    }
  }

  render() {
    const Page = this.state.component;
    let lowerURL = this.state.url.toLowerCase(),
        toOuterRoute = lowerURL === '/login' || lowerURL === '/join',
        authenticated = this.props.app.getStore('AuthStore').getState().authenticated;
        return (
          <div>
            {this.state.navigationError ?
            <div>
              <p>Encountered an error:</p>
              <p>{this.state.navigationError}</p>
              <br></br>
              <p>Our bad! If the problem persists, please send us the error message above.</p>
            </div> :
            toOuterRoute || !authenticated ?
            <Page params={this.state.params} /> :
            <div>
              <TabBar />
              <Page params={this.state.params} />
            </div>}
          </div>
        );
  }
}

export default App;
