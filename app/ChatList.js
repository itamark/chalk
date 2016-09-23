import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ListView,
    Dimensions,
} from 'react-native';

import GeoFire from 'geofire';
import firebase from 'firebase';
import { firebaseApp, firebaseAuth, firebaseDb } from '../firebase';
import Prompt from 'react-native-prompt';
import base64 from 'base-64'
import MapView from 'react-native-maps';

const geoFire = new GeoFire(firebaseDb.ref().child('rooms'));

export default class ChatList extends Component {

  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Create', // for a textual button, provide the button title (label)
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
    console.log('props', this.props)

    const screen = Dimensions.get('window');
    const ASPECT_RATIO = screen.width / screen.height;
    const LATITUDE_DELTA = 0.03;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    const rowHasChanged = (r1, r2) => r1 !== r2 //(r1, r2) => r1.id !== r2.id}
    const ds = new ListView.DataSource({rowHasChanged});

    this.state = {
      region: {
        latitude: 32.0868,
        longitude: 34.7898,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      LATITUDE_DELTA,
      LONGITUDE_DELTA,
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
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: this.state.region.latitudeDelta,
            longitudeDelta: this.state.region.longitudeDelta,
          }
        });
        this.geoQuery = geoFire.query({
          center: [position.coords.latitude, position.coords.longitude],
          radius: 1000
        });
        var _this=this;
        this.geoQuery.on("key_entered", function(key, location, distance) {
          console.log('key_entered', key);
          var roomIdObject = JSON.parse(base64.decode(key));
          const chats = _this.state.chats.concat([{name: roomIdObject.name, key, location, distance}]);
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
      passProps: {channelId: dataRow.key, uid: this.props.uid, name: this.props.name, avatar: this.props.avatar}
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
      {enableHighAccuracy: true, timeout: 10000, maximumAge: 5000000}
    );
  }

  onRegionChange(region) {
    return;
    console.log('onRegionChange', [region.latitude, region.longitude])
    this.setState({ region });
    this.geoQuery.updateCriteria({
      center: [region.latitude, region.longitude],
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <MapView
          style={styles.chatMap}
          showsPointsOfInterest={false}
          toolbarEnabled={false}
          showsCompass={false}
          showsBuildings={false}
          onRegionChange={this.onRegionChange.bind(this)}
          region={this.state.region}
          initialRegion={this.state.region}

          >

          {this.state.chats.map((chat, index) => (
            <MapView.Marker
              key={chat.key}
              coordinate={{latitude:chat.location[0], longitude:chat.location[1]}}
              title={chat.name}
              pinColor='#00cae9'
              onCalloutPress={() => this.chatItemClick(chat)}
              onPress={()=> this._list.scrollTo({y:index*this._listItemHeight})}
            >
            
            </MapView.Marker>
          ))}

        </MapView>
        <ListView
          ref={(c) => this._list = c}
          style={styles.chatList}
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          onLayout={(e) => this._listItemHeight = e.nativeEvent.layout.height}
          renderRow={(dataRow) => (
            <TouchableOpacity onPress={()=> this.chatItemClick(dataRow) }>
              <View style={{padding:10, borderBottomWidth: StyleSheet.hairlineWidth,
                  borderBottomColor: '#b2b2b2', flexDirection: 'column' }}>
                <Text style={{fontSize:20}}>{dataRow.name}</Text><Text style={{fontSize:14}}>{Math.round(dataRow.distance)} mtrs away</Text>
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
    flex: 1,
    flexDirection: 'column'
  },
  chatList: {
    flex: 1,
  },
  chatMap: {
    flex: 1
  },
});