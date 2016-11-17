import Routr from 'routr';

import Join from './components/pages/join/Join';
import Login from './components/pages/login/Login';
import SurveyFeed from './components/pages/surveyFeed/SurveyFeed';
import Shop from './components/pages/shop/Shop';
import Profile from './components/pages/profile/Profile';

const router = new Routr({

  join: {
    path: '/join',
    method: 'get',
    title: 'HomeAway - Join the Community',
    component: Join,
  },
  login: {
    path: '/login',
    method: 'get',
    title: 'HomeAway - Login',
    component: Login,
  },
  surveys: {
    path: '/',
    method: 'get',
    title: 'HomeAway - Surveys',
    component: SurveyFeed,
    action: 'SurveyFeedActions',
    requireAuth: true
  },
  // surveyDetails: {
  //   path: '/survey/:id',
  //   method: 'get',
  //   title: 'HomeAway - Survey',
  //   component: SurveyDetails,
  //   action: 'SurveyDetailsActions',
  // },
  shop: {
    path: '/shop',
    method: 'get',
    title: 'HomeAway - Shop',
    component: Shop,
    // action: 'ShopActions',
    requireAuth: true
  },
  // rewardDetails: {
  //   path: '/shop/:id',
  //   method: 'get',
  //   title: 'HomeAway - Reward Details',
  //   component: RewardDetails,
  //   action: 'RewardDetailsActions',
  // },
  profile: {
    path: '/profile',
    method: 'get',
    title: 'HomeAway - Profile',
    component: Profile,
    // action: 'ProfileActions'
    requireAuth: true
  }
});

export default router;
