import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import Ping from 'react-native-ping';
import { strings } from '../components/localization';
import firebase from 'react-native-firebase';
import { ScaledSheet } from 'react-native-size-matters';

export default class result extends Component{
    constructor(){
        super()
        this.initialState ={
            average: '0',
            maximum: '0',
            game: '',
            server: '',
            loading: true,
            bye: false,
        }
        this.pingtest = this.pingtest.bind(this)
        this.showAd = this.showAd.bind(this)
        this.state = this.initialState
    }

    componentDidMount(){
        this.pingtest()
        //this.showAd()
    }

    componentWillUnmount(){
        this.showAd()
    }

    static navigationOptions= {
        headerTitle: <Text style={{fontSize: 23, color: '#fff', fontWeight: 'bold', fontFamily: 'monospaced'}}>Results</Text>,
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor:'#1E90FF'
        },
        headerTitleStyle:{
            color: '#fff',
        },
    }

    loadFunc(){
        if(this.state.loading){
            return(
                <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                    <ActivityIndicator size='large' color="#1E90FF" />
                    <Text style={styles.loadingTxt}>Loading...</Text>
                    <Text style={styles.fewMinutes}>This may take a few minutes</Text>
                </View>
            );
        }
        else return(<View style={{flex: 1}}>
                    <View style={styles.info}>
                        <Text style={styles.txt}>Avg:</Text>
                        <Text style={styles.txt}>Max:</Text>
                    </View>
                    <View style={styles.ping}>
                        <Text style={styles.txt2}>{this.state.average} ms</Text>
                        <Text style={styles.txt2}>{this.state.maximum} ms</Text>
                    </View>
                    <View style={styles.game}>
                        <Text style={styles.txt}>{this.state.game}</Text>
                        <Text style={styles.txt}>{this.state.server}</Text>
                    </View>
                    </View>
        );
    }

    showAd(){
        const advert = firebase.admob().interstitial('ca-app-pub-3940256099942544/1033173712');

        const AdRequest = firebase.admob.AdRequest;
        const request = new AdRequest();
        request.addKeyword('foo').addKeyword('bar');

        // Load the advert with our AdRequest
        advert.loadAd(request.build());

        advert.on('onAdLoaded', () => {
            advert.show();
        });
    }

    async pingtest(){
        this.setState({
            loading: true
        })
        const { navigation } = this.props;
        const IP = navigation.getParam('IP', 'IP-ADRESS');
        let G = navigation.getParam('game', 'GAME');
        let serv;
        let avg = 0, max;
        for(let i = 0; i<20 ;i++){
            const ms = await Ping.start(IP)
            if(i == 0){
                max = ms;
            }else if(ms>max){
                max = ms;
            }
            avg += ms;
        }
        switch(G){
            case 'lol': G = 'League of Legends'; 
                            switch(IP){
                                case '104.160.131.1': serv = 'NA'; break;
                                case '104.160.141.3': serv = 'EUW'; break;
                                case '104.160.142.3': serv = 'EUNE'; break;
                                case '104.160.156.1': serv = 'OCE'; break;
                                case '104.160.152.3': serv = 'BR'; break;
                                case '104.160.136.3': serv = 'LAN'; break;
                            }
                            break;
            case 'fortnite': G = 'Fortnite';
                            switch(IP){
                                case '3.80.0.0': serv = 'US East'; break;
                                case '13.52.0.0': serv = 'US West'; break;
                                case '18.202.0.0': serv = 'Europe West'; break; 
                                case '3.120.0.0': serv = 'Europe Central'; break;
                                case '13.53.128.254': serv = 'Europe North'; break;
                                case '35.182.0.251': serv = 'Canada'; break;
                                case '18.228.0.0': serv = 'Brazil'; break;
                                case '3.112.0.0': serv = 'Tokyo'; break;
                                case '13.124.63.251': serv = 'Seoul'; break;
                                case '3.0.0.9': serv = 'Singapore'; break;
                                case '13.54.63.252': serv = 'Sydney'; break;
                                case '13.126.0.252': serv = 'Mumbai'; break;
                                case '52.80.5.207': serv = 'China'; break;
                            } 
                                break;
            case 'pubg': G = 'PUBG';
                            switch(IP){
                                case '23.23.255.255': serv = 'US 1 (Virginia)'; break;
                                case '13.58.0.253': serv = 'US 2 (Ohio)'; break;
                                case '13.56.63.251': serv = 'US 3 (California)'; break; 
                                case '34.208.63.251': serv = 'US 4 (Oregon)'; break;
                                case '35.182.0.251': serv = 'Canada'; break;
                                case '34.248.60.213': serv = 'Europe 1 (Ireland)'; break;
                                case '35.176.0.252': serv = 'Europe 2 (London)'; break;
                                case '35.156.63.252': serv = 'Europe 3 (Frankfurt)'; break;
                                case '52.67.255.254': serv = 'South America'; break;
                                case '13.54.63.252': serv = 'Australia'; break;
                                case '13.126.0.252': serv = 'Asia Pacific (Mumbai)'; break;
                                case '13.124.63.251': serv = 'Asia Pacific (Seoul)'; break;
                                case '13.228.0.251': serv = 'Asia Pacific (Singapore)'; break;
                                case '13.112.63.251': serv = 'Asia Pacific (Tokyo)'; break;
                            }
                            break;
            case 'cs': G = 'CS:GO';
                            switch(IP){
                                case '208.78.164.4': serv = "US East"; break;
                                case '192.69.96.1': serv = "US West"; break;
                                case '162.254.194.1': serv = "US South West"; break;
                                case '162.254..199.1': serv = "US South East"; break;
                                case '162.254.199.254': serv = "Europe 1 (North/Russia/Sweden)"; break;
                                case '185.25.182.1': serv = "Europe 2 (East)"; break;
                                case '155.133.240.1': serv = "Poland"; break;
                                case '209.197.29.5': serv = "Brazil"; break;
                                case '155.133.247.2': serv = "Spain"; break;
                                case '103.10.125.2': serv = "Australia"; break;
                                case '103.28.54.1': serv = "Asia 1"; break;
                                case '45.121.184.1': serv = "Asia 2"; break;
                                case '185.25.183.1': serv = "Dubai"; break;
                                case '155.133.233.1': serv = "India"; break;
                                case '155.133.244.1': serv = "Hong Kong"; break;
                                case '61.14.157.158': serv = "Japan"; break;
                                case '97.84.209.1': serv = "Capetown (South Africa)"; break;
                                case '197.80.4.37': serv = "Johansberg (South Africa)"; break;
                            }
                            break;
            case 'dota': G = 'Dota 2'; 
                            switch(IP){
                                case '192.69.96.1': serv = "US West"; break;
                                case '208.78.164.1': serv = "US East"; break;
                                case '146.66.152.1': serv = "Europe West"; break;
                                case '146.66.155.1': serv = "Europe East"; break;
                                case '103.10.124.1': serv = "Asia"; break;
                                case '209.197.25.1': serv = "Brazil"; break;
                                case '196.38.180.1': serv = "South Africa"; break;
                            }
                            break;
            case 'apex': G = 'Apex Legends'; 
                            switch(IP){
                                 case '104.198.101.253': serv =  "US 1 (Oregon)"; break;
                                 case '107.150.147.67': serv = "US 2 (New York)"; break;
                                 case '130.211.193.234': serv = "US 3 (Iowa)"; break;
                                 case '177.54.152.31': serv = "Brazil"; break;
                                 case '217.147.89.101': serv = "Europe 1"; break;
                                 case '52.59.121.244': serv = "Europe 2"; break;
                                 case '69.88.135.37': serv = "Hong Kong"; break;
                                 case '104.155.233.79': serv = "Taiwan"; break;
                                 case '72.5.161.228': serv = "Singapore"; break;
                                 case '161.202.72.179': serv = "Tokyo"; break;
                                 case '27.50.72.162': serv = "Australia"; break;
                            }
                            break;
        }
        this.setState({
            average: parseInt(avg/20),
            maximum: max,
            game: G,
            server: serv,
            loading: false
        })
    }

    render(){
        const Banner = firebase.admob.Banner;
        const AdRequest = firebase.admob.AdRequest;
        const request = new AdRequest();
        const Id = 'ca-app-pub-3940256099942544/6300978111';

        return(
            <ImageBackground source = {require('../img/fundo.jpg')} style = {styles.container}>
                <View style={styles.resultContainer}>
                    {this.loadFunc()}
                </View>
                <View style={styles.buttonContainer}>
                   <View style={styles.warningView}>
                       <Text style={styles.warningTxt}>{strings.Warning}</Text>
                   </View>
                   <View style={styles.buttonsView}>
                       <View style={styles.btnview2}>
                           <TouchableOpacity style={styles.button} onPress = {this.pingtest}>
                                <Text style={styles.btntxt}>Test Again</Text>
                           </TouchableOpacity>
                       </View>
                       <View style={styles.btnview2}>
                           <TouchableOpacity style={styles.button} onPress={() => {
                               this.showAd()
                               this.props.navigation.goBack()}}>
                                <Text style={styles.btntxt}>Change Server</Text>
                           </TouchableOpacity>
                       </View>
                   </View>
                   
                </View>
                <View style={styles.adContainer}>
                    <Banner
                        unitId={Id}
                        size={'SMART_BANNER'}
                        request={request.build()}
                    />
                </View>
            </ImageBackground>
        );
    }
}

const styles = ScaledSheet.create({
    btnview2: {
        width: '100@s',
        height: '100@s', 
        margin: '35@s'
    },
    buttonsView: {
        flexDirection: 'row', 
        flex: 2, 
        justifyContent: 'space-evenly', 
        alignItems: 'center'
    },
    warningTxt: {
        fontSize: '18@s', 
        color: '#FF0000', 
        fontWeight: 'bold'
    },
    warningView: {
        padding: '5@s', 
        flex: 1, 
        marginBottom: '30@s', 
        paddingLeft: '15@s', 
        paddingTop: '30@s'
    },
    fewMinutes: {
        fontSize: '12@s', 
        color: '#000'
    },
    loadingTxt: {
        fontSize: '12@s', 
        color: '#000', 
        padding: '10@s', 
        paddingBottom: '0@s'
    },
    container:{
        flex: 1
    },
    resultContainer:{
        flex:6,
        justifyContent: 'flex-start',
    },
    buttonContainer:{
        flex: 7,
    },
    adContainer:{
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info:{
        paddingTop: '25@s',
        paddingBottom: '0@s',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    ping:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    game:{
        padding: '25@s',
        alignItems: 'center',
    },
    txt:{
        fontSize: "20@s",
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    txt2:{
        fontSize: "30@s",
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center'
    }, 
    button:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '30@s',
        backgroundColor: '#1E90FF',
        borderRadius: 50
    },
    btntxt:{
        fontWeight: 'bold',
        fontSize: '12@s',
        color: '#000',
    }
})