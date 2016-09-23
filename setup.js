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
    TextInput,
    CameraRoll
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import ChatList from './app/ChatList'
import CameraPicker from './app/CameraPicker'
import ChatBox from './ChatBox/ChatBox'



class react_native_navigation_bootstrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  choosePicture(){
    this.props.navigator.push({
      screen: 'CameraPicker',
      title: 'Choos avatar',
      passProps: {onAvatarSelected: (avatar) => this.setState({avatar})}
    });

   
  }
  showChats(){
    if (this.state.name =='')
      return;
    this.props.navigator.push({

        screen: 'ChatList',
        title: 'Nearby chalks',
        passProps: {uid: Date.now(), name: this.state.name, avatar: this.state.avatar}

    });
  }
  render() {
    return (
        <View style={styles.container}>
          <Image source={require('./source/assets/logo.png')}></Image>
          <TouchableOpacity onPress={this.choosePicture.bind(this)}>
            <Text style={{color: 'blue', fontSize:20}}>Choose avatar</Text>
          </TouchableOpacity>

          <TextInput placeholder='Enter your nick' style={{width:200, fontSize:20}} onChangeText={(name) => this.setState({name})} />
          <TouchableOpacity activeOpacity={this.state.name =='' ? 1 : 0.7} onPress={this.showChats.bind(this)}>
            <Text style={{color: 'blue', fontSize:20}}>Lets Chalk!</Text>
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
  Navigation.registerComponent('CameraPicker', () => CameraPicker);
  Navigation.registerComponent('react-native-navigation-bootstrap', () => react_native_navigation_bootstrap);
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'react-native-navigation-bootstrap',
      title: 'Chalk'
    }
  });
}
