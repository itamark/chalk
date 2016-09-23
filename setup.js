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
    TextInput
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import ChatList from './app/ChatList'
import ChatBox from './ChatBox/ChatBox'
import ImagePicker from 'react-native-image-picker'


class react_native_navigation_bootstrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  choosePicture(){

    var options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info below in README)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

        //const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

    });

   
  }
  showChats(){
    if (this.state.name =='')
      return;
    this.props.navigator.push({

        screen: 'ChatList',
        title: 'Nearby chalks',
        passProps: {uid: Date.now(), name: this.state.name, avatar: 'https://freeiconshop.com/files/edd/person-flat.png'}

    });
  }
  render() {
    return (
        <View style={styles.container}>
          <Image source={require('./source/assets/logo.png')}></Image>

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
  //Navigation.registerComponent('WelcomeBox', () => WelcomeBox);
  Navigation.registerComponent('react-native-navigation-bootstrap', () => react_native_navigation_bootstrap);
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'react-native-navigation-bootstrap',
      title: 'Chalk'
    }
  });
}
