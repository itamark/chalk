/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    TouchableHighlight
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import ChatList from './app/ChatList'
import CameraPicker from './app/CameraPicker'
import ChatBox from './ChatBox/ChatBox'


class react_native_navigation_bootstrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            avatar:'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/user-2.png?alt=media&token=8d32edc1-540e-4306-9aed-ef8b9a2ab3d4'
        };
    }


    choosePicture() {
        this.props.navigator.push({
            screen: 'CameraPicker',
            title: 'Choos avatar',
            passProps: {onAvatarSelected: (avatar) => this.setState({avatar})}
        });
    }
        showChats()
        {
            if (this.state.name == '')
                return;
            this.props.navigator.push({

                screen: 'ChatList',
                title: 'Nearby chalks',
                passProps: {uid: Date.now(), name: this.state.name, avatar: this.state.avatar}

            });
        }

        render()
        {
            return (
                <View style={styles.container}>
                    <Image source={require('./source/assets/logo.png')}></Image>
                    <TouchableHighlight onPress={this.choosePicture.bind(this)}>
                      <Image style={{width:80, height:80}} source={{uri: this.state.avatar}}></Image>
                        
                    </TouchableHighlight>
                    <TextInput placeholder='Enter your nickname'
                               style={{fontSize:20, height:50, width:300, backgroundColor:'#134124', color: '#ffffff', textAlign: 'center'}}
                               placeholderTextColor="#ffffff" onChangeText={(name) => this.setState({name})}
                               clearTextOnFocus={true}/>
                    <TouchableHighlight style={{backgroundColor:'#ffffff', borderRadius:3, borderWidth:1, padding:4, marginTop:10, flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'}} activeOpacity={this.state.name =='' ? 1 : 0.7} onPress={this.showChats.bind(this)}>
                        <Text style={{color: 'blue', fontSize:15, color:'#134124'}}>Lets Chalk!</Text>
                    </TouchableHighlight>
                </View>
            );
        }
    }

    const images = '../assets/logo.png';

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#134124',
            flexDirection: 'column'
        },
        text: {
            color: '#ffffff'
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

    export
    default
    setup = () => {
      console.disableYellowBox = true;

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
