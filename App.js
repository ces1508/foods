/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Navigation from './src/routes'
import { Provider } from 'react-redux'
import store from './src/store'
import Theme from './src/Theme'
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store} style={{ backgroundColor: Theme.colors.maingBgColor }}>
        <Navigation />
      </Provider>
    );
  }
}
