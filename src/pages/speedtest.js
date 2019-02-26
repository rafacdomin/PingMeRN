import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { WebView } from "react-native-webview";
import SpeedTitle from '../components/SpeedTitle';


export default class speedtest extends Component{
    static navigationOptions = {
        headerTitle: <SpeedTitle />,
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor:'#1E90FF'
        },
        headerTitleStyle:{
            color: '#000',
        },
    };    
    
    render(){
        return(
            <View style={{flex: 1, overflow: 'hidden' }}>
                <WebView 
                    source={{uri: 'http://pingme.speedtestcustom.com/'}}
                    style={{flex: 1, marginTop: 20}}
                    javaScriptEnabled = {true}
                    domStorageEnabled = {true}
                    renderLoading = {this.ActivityIndicatorLoadingView}
                    startInLoadingState = {true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});