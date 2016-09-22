import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import TestMessages from './TestMessages';
import SendMessage from './SendMessage';

class ChatBox extends React.Component{
  render() {
    return (
      <View>
        <GiftedChat
          messages={TestMessages}
          onSend={this.onSend}/>
      </View>
    )
  }
}

export { ChatBox as default };
