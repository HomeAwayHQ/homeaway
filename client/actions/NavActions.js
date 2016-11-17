class NavActions {

  constructor() {
    this.generateActions('navigateSuccess',
                         'navigateFailure');
  }

  navigate(url) {
    this.dispatch(url);
    var _this = this;
    var navigateToRoute = (route, resolve, reject) => {
      const config = route.config;
      let navSuccessPayload = {
        url: route.url,
        params: route.params,
        title: config.title,
        component: config.component
      };
      if (config.action) {
        return _this.alt
        .getActions(config.action)
        .load(route.params)
        .then(() => {
          _this.actions.navigateSuccess(navSuccessPayload);
          return resolve();
        })
        .catch((err) => {
          _this.actions.navigateFailure(err);
          return resolve();
        });
      } else {
        _this.actions.navigateSuccess(navSuccessPayload);
        return resolve();
      }
    };
    return new Promise((resolve, reject) => {
      var route = _this.alt.router.getRoute(url);
      if(!route) {
        return reject('404');
      }
      var toLogin = url == '/login';
      return _this.alt
      .getActions('AuthActions')
      .checkAuthStatus()
      .then(() => {
        _this.alt
        .getActions('UserActions')
        .updateSelf()
        .then(() => {
          _this.alt
          .getActions('AccountActions')
          .update()
          .then(() => {
            if (toLogin) {
              route = _this.alt.router.getRoute('/');
            }
            return navigateToRoute(route, resolve, reject);
          });
        });
      })
      .catch(() => {
        if (route.config.requireAuth) {
          route = _this.alt.router.getRoute('/login');
          return navigateToRoute(route, resolve, reject);
        }
        return navigateToRoute(route, resolve, reject);
      });
    });
  }
}

export default NavActions;
