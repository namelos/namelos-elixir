import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './config/Root';

const rootEl = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./config/Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextRoot = require('./config/Root').default;
    ReactDOM.render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      rootEl
    );
  });
}
