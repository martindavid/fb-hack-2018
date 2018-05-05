import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV === 'development' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable no-underscore-dangle */

const middleWare = [thunk];

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middleWare))(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
