import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image


} from 'react-native';

export default class ChatBox extends Component{
  constructor(props) {
    super(props);

  }
  componentDidMount() {
  
  }

  onClick = (x) =>{
    this.props.onAvatarSelected(x.avatar);
    this.props.navigator.pop();
  }

  render() {
    let avatars = [{
      avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/a01.png'
    },
    {
      avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/fh04.png'
    },
    {
      avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/a03.png'
    },
    {
      avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/a02.png'
    },
    {
      avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/a05.png'
    },
    {
      avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/i03.png'
    },
    {
      avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/i04.png'
    },
    {
      avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/i05.png'
    },
    {
      avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/k05.png'
    },
    {
      avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/i01.png'
    },
    ,
    {
      avatar: 'http://findicons.com/files/icons/175/halloween_avatar/128/bat.png'
    },
    ,
    {
      avatar: 'http://findicons.com/files/icons/175/halloween_avatar/128/chucky.png'
    }];

    return (
      <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-around',}} >
        {avatars.map(x=>(
          <TouchableOpacity key={x.avatar} onPress={() => this.onClick(x)}>
            <View style={{padding: 15, flexDirection: 'column', alignItems: 'center'}}>
              <Image style={{width:80, height:80}} source={{uri: x.avatar}}></Image>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}


