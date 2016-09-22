import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ListView,
} from 'react-native';

import firebase from 'firebase';
import { firebaseApp, firebaseAuth, firebaseDb } from '../firebase';

export default class ChatList extends Component {
  constructor(props) {
    super(props);

    const rowHasChanged = (r1, r2) => r1 !== r2 //(r1, r2) => r1.id !== r2.id}
    const ds = new ListView.DataSource({rowHasChanged});
    this.state = {
      dataSource: ds
    };
  }

  componentDidMount() {
    const chats = [{
      name: 'Wix Hackathon',
      owner: '1111',
      channel: '1'      
    },{
      name: 'Boring',
      owner: '2'  ,
      channel: '2'      
    },{
      name: 'Dringing beer',
      owner: '3'   ,
      channel: '3'     
    }];
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(chats)
    })

    chats.forEach((chat) => {
      
    });
  }

  chatItemClick(){
    this.props.navigator.push({
      screen: 'ChatBox',
      title: 'ChatBox',
      passProps: {channelId: 'test'}
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={(dataRow) => (
            <TouchableOpacity onPress={this.chatItemClick.bind(this)}>
              <View style={{padding:10}}>
                <Text>{dataRow.name}</Text>
              </View>
            </TouchableOpacity>
          )}
         /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{}
});