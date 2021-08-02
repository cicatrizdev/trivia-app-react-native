import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import Routes from './src/routes';
import store from './src/store';

const TriviaApp = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

registerRootComponent(TriviaApp);
