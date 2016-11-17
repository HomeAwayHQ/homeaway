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
    }
  }

  render() {
    return(
      <div className="tabBar">
        <div className="surveyTab" style={this.state.selectedTab !== 'survey' ? null : {
          backgroundColor: 'lightblue',
          color: 'white'
        }}>
          <Link href="/" onClick={(e) => {
            e.preventDefault();
            this.handleTabSelect('survey');
          }}>
            Surveys
          </Link>
        </div>
        <div className="shopTab" style={this.state.selectedTab !== 'shop' ? null : {
          backgroundColor: 'lightblue',
          color: 'white'
        }}>
          <Link href="/shop" onClick={(e) => {
            e.preventDefault();
            this.handleTabSelect('shop');
          }}>
            Rewards
          </Link>
        </div>
        <div className="profileTab" style={this.state.selectedTab !== 'profile' ? null : {
          backgroundColor: 'lightblue',
          color: 'white'
        }}>
          <Link href="/profile" onClick={(e) => {
            e.preventDefault();
            this.handleTabSelect('profile');
          }}>
            Profile
          </Link>
        </div>
      </div>
    );
  }
}

export default TabBar;
