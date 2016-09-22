/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import ChatBox from './ChatBox/ChatBox';

class react_native_navigation_bootstrap extends Component {
  render() {
    return (
        <ChatBox />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default setup = () => {
  Navigation.registerComponent('react-native-navigation-bootstrap', () => react_native_navigation_bootstrap);
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'react-native-navigation-bootstrap',
      title: 'Chalk'
    }
  });
}
