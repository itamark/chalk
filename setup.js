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
    TouchableOpacity,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import ChatList from './app/ChatList'
import ChatBox from './ChatBox/ChatBox'
import {Firestack} from 'react-native-firestack';

const configurationOptions = {
  debug: true
};
const firestack = new Firestack(configurationOptions);
firestack.on('debug', msg => console.log('Received debug message', msg))

class react_native_navigation_bootstrap extends Component {
  showChats(){
    this.props.navigator.push({
      screen: 'ChatList',
      title: 'Pushed Screen'
    });
  }
  render() {
    return (
        <View style={styles.container}>
          <Text> firestack.ServerValue.TIMESTAMP</Text>
          <TouchableOpacity onPress={this.showChats.bind(this)}>
            <Text style={{color: 'blue'}}>Discover chats</Text>
          </TouchableOpacity>
        </View>
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
<<<<<<< 6d9a99355a5d22c7ece127931afaac0d7ca563e2
  Navigation.registerComponent('ChatBox', () => ChatBox);
  Navigation.registerComponent('ChatList', () => ChatList);
  Navigation.registerComponent('react-native-navigation-bootstrap', () => react_native_navigation_bootstrap);
=======
  Navigation.registerComponent('react-native-navigation-bootstrap', () => react_native_navigation_bootstrap);
>>>>>>> local
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'react-native-navigation-bootstrap',
      title: 'Chalk'
    }
  });
}
