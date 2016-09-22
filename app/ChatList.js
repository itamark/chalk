import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ListView,
} from 'react-native';

import GeoFire from 'geofire';
import firebase from 'firebase';
import { firebaseApp, firebaseAuth, firebaseDb } from '../firebase';
import Prompt from 'react-native-prompt';
import base64 from 'base-64'
import utf8 from 'utf8'

const geoFire = new GeoFire(firebaseDb.ref().child('rooms'));

export default class ChatList extends Component {

  static navigatorButtons = {
    rightButtons: [
      {
        title: 'New', // for a textual button, provide the button title (label)
        id: 'new', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
        disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
        disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        //showAsAction: 'ifRoom' // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
      }
    ]
  };

  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    const rowHasChanged = (r1, r2) => r1 !== r2 //(r1, r2) => r1.id !== r2.id}
    const ds = new ListView.DataSource({rowHasChanged});
    this.state = {
      dataSource: ds,
      chats: [],
      promptVisible: false
    };
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'new') { // this is the same id field from the static navigatorButtons definition
        this.setState({promptVisible:true});
      }
    }
  }

  componentDidMount() {
    const _this= this;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('componentDidMount', [position.coords.latitude, position.coords.longitude]);
        const geoQuery = geoFire.query({
          center: [position.coords.latitude, position.coords.longitude],
          radius: 1000
        });
        var onKeyEnteredRegistration = geoQuery.on("key_entered", function(key, location, distance) {
          var roomIdObject = JSON.parse(base64.decode(key));
          const chats = _this.state.chats.concat([{name: roomIdObject.name, key, distance}]);
          _this.setState({
            chats,
            dataSource: _this.state.dataSource.cloneWithRows(chats)
          })
        });
      },
      (error) => alert(error),
      {enableHighAccuracy: false, timeout: 10000, maximumAge: 5000000}
    );
  }

  chatItemClick(dataRow){
    this.props.navigator.push({
      screen: 'ChatBox',
      title: dataRow.name,
      passProps: {channelId: dataRow.key}
    });
  }

  createNewRoom(name){
    this.setState({ promptVisible: false})
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('componentDidMount', [position.coords.latitude, position.coords.longitude]);

        var roomIdObject = {name, rnd: Math.floor((Math.random() * 1000) + 1)};
        var roomId = base64.encode(JSON.stringify(roomIdObject));

        geoFire.set(roomId, [position.coords.latitude, position.coords.longitude]);
      },
      (error) => alert(error),
      {enableHighAccuracy: false, timeout: 10000, maximumAge: 5000000}
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={(dataRow) => (
            <TouchableOpacity onPress={()=> this.chatItemClick(dataRow) }>
              <View style={{padding:10}}>
                <Text>{dataRow.name} - {dataRow.distance}meters away</Text>
              </View>
            </TouchableOpacity>
          )}
         /> 
         <Prompt
            title="Create new Room"
            placeholder="eg. Wix Hackathon"
            visible={this.state.promptVisible}
            onCancel={() => this.setState({ promptVisible: false})}
            onSubmit={this.createNewRoom.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1

  }
});