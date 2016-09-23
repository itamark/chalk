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
} from 'react-native-camera-kit';


class ChatBox extends Component{
  constructor(props) {
    super(props);

  }
  componentDidMount() {
  
  }

  render() {
    return (
        <CameraKitCamera
            ref={(cam) => {
              this.camera = cam;
              }
            }
            style={{flex: 1, backgroundColor:'white'}}
            cameraOptions={{
              flashMode: 'auto',             // on/off/auto(default)
              focusMode: 'on',               // off/on(default)
              zoomMode: 'on',                // off/on(default)
              ratioOverlay:'1:1',            // optional, ratio overlay on the camera and crop the image seamlessly 
              ratioOverlayColor: '#00000077' // optional
              }}
            />
    )
  }
}


