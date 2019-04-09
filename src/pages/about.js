import React, { Component } from 'react';
import { ScrollView, View, Text, ImageBackground, Linking } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { strings } from '../components/localization';

export default class about extends Component{
    static navigationOptions= {
        headerTitle: <Text style={{fontSize: 23, color: '#fff', fontWeight: 'bold', fontFamily: 'monospaced',}}>About</Text>,
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor:'#1E90FF'
        },
        headerTitleStyle:{
            color: '#fff',
        },
    }

    render(){
        return(
            <ImageBackground style = {styles.container} source = {require('../img/fundo.jpg')}>
                <ScrollView>
                    <View style={styles.Content}>
                        <Text style={styles.titleText}>{strings.HowWorkTitle}</Text>
                        <Text style={styles.elementText}>{strings.HowWorkContent}</Text>
                    </View>
                    <View style={styles.Content}>
                        <Text style={styles.titleText}>{strings.HowUseTitle}</Text>
                        <Text style={styles.elementText}>{strings.HowUseContent}</Text>
                    </View>
                    <View style={styles.Content}>
                        <Text style={styles.titleText}>{strings.WhatGamesTitle}</Text>
                        <Text style={styles.elementText}>{strings.WhatGamesContent}</Text>
                    </View>
                    <View style={styles.Content}>
                        <Text style={styles.titleText}>{strings.AboutTitle}</Text>
                        <Text style={styles.elementText}>{strings.AboutContent}
                            <Text style={{color: '#009'}} onPress={()=>Linking.openURL('https://bit.ly/pingmegit')}>bit.ly/pingmegit</Text>
                        </Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = ScaledSheet.create({
    container:{
        flex: 1,
    },
    titleText:{
        fontSize: '20@s',
        fontWeight: 'bold',
        color: '#000',
        paddingVertical: '10@s',
        fontFamily: 'Roboto',
        textAlign: 'center',
    },
    elementText:{
        fontSize: '14@s',
        paddingHorizontal: '10@s',
        color: '#001',
        fontFamily: 'Roboto',
    },
    Content:{
        flex: 1,
        marginVertical: '13@s',
    },

});