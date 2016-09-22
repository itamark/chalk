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
    View,
Image,
    TouchableOpacity,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import ChatList from './app/ChatList'
import ChatBox from './ChatBox/ChatBox'

class react_native_navigation_bootstrap extends Component {
  showChats(){
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'ChatList',
        title: 'Chalk'
      }
    });
  }
  render() {
    return (
        <View style={styles.container}>
          <Image source={require('./source/assets/logo.png')}></Image>
          <Text style={styles.text}> firestack.ServerValue.TIMESTAMP</Text>
          <TouchableOpacity onPress={this.showChats.bind(this)}>
            <Text style={{color: 'blue'}}>Discover chats</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const images = '../assets/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#134124'
  },
  text: {
  color:'#ffffff'
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
  Navigation.registerComponent('ChatBox', () => ChatBox);
  Navigation.registerComponent('ChatList', () => ChatList);
  Navigation.registerComponent('WelcomeBox', () => WelcomeBox);
  Navigation.registerComponent('react-native-navigation-bootstrap', () => react_native_navigation_bootstrap);
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'react-native-navigation-bootstrap',
      title: 'Chalk'
    }
  });
}
