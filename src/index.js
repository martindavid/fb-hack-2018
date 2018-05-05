import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'grommet/grommet.min.css';
import './styles/index.css';
import Root from './containers/Root';
import store from './utils/store';
import registerServiceWorker from './registerServiceWorker';

const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <Root />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    render();
  });
}
registerServiceWorker();
