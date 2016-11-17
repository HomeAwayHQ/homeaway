import React from 'react';

import contextTypes from '../../../util/contextTypes';

import Link from '../link/Link';

class TabBar extends React.Component {

  static contextTypes = contextTypes;

  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedTab: 'survey'
    }
  }

  handleTabSelect = (tab) => {
    if (this.state.selectedTab !== tab) {
      this.setState({
        selectedTab: tab
      });
      this.props.onTabSelect(tab);
    }
  }

  render() {
    return(
      <div className="tabBar">
        <div className="surveyTab" style={this.state.selectedTab !== 'survey' ? null : {
          backgroundColor: 'lightblue',
          color: 'white'
        }} onClick={(e) => {
          e.preventDefault();
          this.handleTabSelect('survey');
          this.context
          .getActions('NavActions')
          .navigate('/');
          if (process.env.BROWSER) {
            history.pushState(null, '', '/');
          }
        }}>
          Surveys
        </div>
        <div className="shopTab" style={this.state.selectedTab !== 'shop' ? null : {
          backgroundColor: 'lightblue',
          color: 'white'
        }} onClick={(e) => {
          e.preventDefault();
          this.handleTabSelect('shop');
          this.context
          .getActions('NavActions')
          .navigate('/shop');
          if (process.env.BROWSER) {
            history.pushState(null, '', '/shop');
          }
        }}>
          Rewards
        </div>
        <div className="profileTab" style={this.state.selectedTab !== 'profile' ? null : {
          backgroundColor: 'lightblue',
          color: 'white'
        }} onClick={(e) => {
          e.preventDefault();
          this.handleTabSelect('profile');
          this.context
          .getActions('NavActions')
          .navigate('/profile');
          if (process.env.BROWSER) {
            history.pushState(null, '', '/profile');
          }
        }}>
          Profile
        </div>
      </div>
    );
  }
}

export default TabBar;
