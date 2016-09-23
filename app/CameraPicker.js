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
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/user-2.png?alt=media&token=8d32edc1-540e-4306-9aed-ef8b9a2ab3d4'
    },
    {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/man.png?alt=media&token=09ac85b3-aff1-411b-a64a-d56c7c3c3836'
    },
    {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/person-flat.png?alt=media&token=9acf37f2-1c4b-4da0-b008-c3e82915e4bd'
    },
    {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/user-10.png?alt=media&token=830286b7-9c43-4193-b277-32eb55d1d2cb'
    },
    {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/user-11.png?alt=media&token=02f4a7d6-9a8e-4973-8545-f114203f12e6'
    },
    {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/user-12.png?alt=media&token=8fb314fa-de18-4034-a168-a9c372610184'
    },
    {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/user-13.png?alt=media&token=64ce01c7-9a03-4682-b02f-760d1268c0c5'
    },
    {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/user-14.png?alt=media&token=06691834-be69-42c4-9782-f0a095daeec2'
    },
    {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/user-15.png?alt=media&token=6fd422a8-0a91-447b-89f1-ed0bc4f41a3f'
    },
    {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/user-16.png?alt=media&token=28bed938-2498-478a-ad22-e9bf69a9b6b0'
    },
    ,
    {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/user-17.png?alt=media&token=9ba8ec06-4e3e-4d9d-af8b-a78af7a5f75c'
    },
    ,
    {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/user-18.png?alt=media&token=9a4a8df5-5fc3-4896-988a-dbedb225ba81'
    },
    {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/user-20.png?alt=media&token=092c84ae-5656-4f61-a969-972523aa484f'
    },
    {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/user-21.png?alt=media&token=9cd968ef-bc61-45dc-993a-c956b8af9cb7'
    },
    {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/user-22.png?alt=media&token=4251690f-d969-49b2-9fa4-ecbe85885206'
    },
    {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/user-3.png?alt=media&token=dcb88bcf-fa12-43b0-83bb-21cafde53c44'
    },
    {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/user-4.png?alt=media&token=08d61a1c-4bf3-4efd-957d-fe885fe8ebbb'
    },
    {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/chalk-c68a3.appspot.com/o/user-5.png?alt=media&token=b3318a17-ef29-4d30-bd56-a97d519e1aa6'
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


