@@ -1,65 +0,0 @@
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
  Navigation.registerComponent('ChatList', () => ChatList);  
  Navigation.registerComponent('react-native-navigation-bootstrap', () => react_native_navigation_bootstrap);  
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'react-native-navigation-bootstrap',
      title: 'Chalk'
    }
  });
}
