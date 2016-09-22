import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { TestMessages } from './TestMessages'

class ChatBox extends React.Component{
  constructor(props) {
    super(props);
    TestMessages;
    this.state = {messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    }
  }

  onSend() {

  }

  render() {
    return (
      <View>
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}/>

      </View>
    )
  }
}

export { ChatBox as default };
