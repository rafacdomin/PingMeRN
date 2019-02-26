import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { WebView } from "react-native-webview";


export default class coffee extends Component{
    static navigationOptions = {
        header: null,
    };    

    render(){
        return(
            <View style={{flex: 1, overflow: 'hidden' }}>
                <WebView 
                    source={{uri: 'https://www.buymeacoffee.com/rcod'}}
                    style={{flex: 1}}
                    javaScriptEnabled = {true}
                    domStorageEnabled = {true}
                    renderLoading = {this.ActivityIndicatorLoadingView}
                    startInLoadingState = {true}
                />
            </View>
        );
    }
}