import {PropTypes} from 'react';

export default {
  // Flux core
  getActions: PropTypes.func,
  getStore: PropTypes.func,
  router: PropTypes.object,

  // Flux options
  baseURL: PropTypes.string,
  cookies: PropTypes.object
};
