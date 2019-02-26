import React, { Component } from 'react';
import { Image } from 'react-native';

export default class SpeedTitle extends Component {
    render() {
      return (
        <Image
          source={require('../img/speedscreen.png')}
          style={{ 
            width: '50%', 
            height: '70%',
            resizeMode: "contain",
            alignSelf: "center", 
          }}
        />
      );
    }
}