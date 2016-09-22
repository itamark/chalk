import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import TestMessages from './TestMessages';

import firebase from 'firebase';
import { firebaseApp, firebaseAuth, firebaseDb } from '../firebase';

class ChatBox extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }
  componentDidMount() {
    this.ref = firebaseDb.ref().child(`chats/${this.props.channelId}`).on('value', snap => {
      let messages = [];
      snap.forEach(message => {
        messages.push({_id:message.key, text: message.val().text});
      });
      console.log(messages)
      this.setState({messages});
    });
  }

  onSend(message) {
    console.log(message);
    firebaseDb.ref().child(`chats/${this.props.channelId}`).push({name: 'alex', text:message[0].text })
  }

  render() {
    return (
        <GiftedChat
          style={{flex:1}}
          messages={this.state.messages}
          onSend={this.onSend.bind(this)}/>
    )
  }
}

export { ChatBox as default };
