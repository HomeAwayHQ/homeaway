import Alt from 'alt';

import router from './router';

import AccountActions from './actions/AccountActions';
import AuthActions from './actions/AuthActions';
import NavActions from './actions/NavActions';
import UserActions from './actions/UserActions';

import SurveyActions from './actions/SurveyActions';
import SurveyFeedActions from './actions/SurveyFeedActions';

import AccountStore from './stores/AccountStore'
import AuthStore from './stores/AuthStore';
import NavStore from './stores/NavStore';
import UserStore from './stores/UserStore';

import SurveyStore from './stores/SurveyStore';

class Flux extends Alt {
  constructor(options) {
    super();

    this.addActions('AccountActions', AccountActions);
    this.addActions('AuthActions', AuthActions);
    this.addActions('NavActions', NavActions);
    this.addActions('UserActions', UserActions);

    this.addActions('SurveyActions', SurveyActions);
    this.addActions('SurveyFeedActions', SurveyFeedActions);

    this.addStore('AccountStore', AccountStore);
    this.addStore('AuthStore', AuthStore);
    this.addStore('NavStore', NavStore);
    this.addStore('UserStore', UserStore);

    this.addStore('SurveyStore', SurveyStore);

    this.baseURL = options.baseURL;
    this.cookies = options.cookies;
    this.router = router;
  }
}

export default Flux;
