import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {
  CameraKitGallery,
  CameraKitCamera,
  CameraKitGalleryView,
} from 'react-native-camera-kit';


export default class ChatBox extends Component{
  constructor(props) {
    super(props);

  }
  componentDidMount() {
  
  }

  render() {
    return (
        <CameraKitGalleryView
            ref={(gallery) => {
                  this.gallery = gallery;
                }}
            style={{flex:1, margin: 0, backgroundColor: '#ffffff', marginTop: 50}}
            //albumName={this.state.album}
            minimumInteritemSpacing={10}
            minimumLineSpacing={10}
            columnCount={3}
            onSelected={(result) => {

        }}
            fileTypeSupport={{
                      supportedFileTypes: ['image/png'],
                      unsupportedOverlayColor: "#00000055",
                      //unsupportedText: 'JPEG!!',
                      unsupportedTextColor: '#ff0000'
          }}
        />
    )
  }
}


