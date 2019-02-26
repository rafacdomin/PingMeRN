import React, { Component } from 'react';
import { Image } from 'react-native';

export default class LogoTitle extends Component {
    render() {
      return (
        <Image
          source={require('../img/Logo.png')}
          style={{ 
            width: '50%', 
            height: '100%',
            resizeMode: "contain",
            alignSelf: "center", 
          }}
        />
      );
    }
  }