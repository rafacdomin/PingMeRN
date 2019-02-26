import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Picker, StatusBar, ImageBackground, NetInfo } from 'react-native';
import LogoTitle from '../components/LogoTitle';
import OfflineNotice from '../components/offlineNotice';

export default class pingtest extends Component{
    constructor(){
        super()
        this.initialState = {
            game: 'lol',
            server: '104.160.131.1',
            connectionType: ''
        }
        this.state = this.initialState
    }

    static navigationOptions = ({ navigation }) => {
        return{
            headerTitle:(
            <View style = {styles.Logostyle}>
                <LogoTitle />
            </View>),
            headerStyle: {
                backgroundColor:'#1E90FF'
            },
            headerTitleStyle:{
                color: '#000',
            },
            headerLeft:(
                <TouchableOpacity onPress={() => navigation.navigate('Speed')}>
                    <Image
                        source={require('../img/internetspeedtest.png')}
                        style={{ 
                            width: 55, 
                            height: '55%',
                            resizeMode: "contain", 
                    }}/>
                </TouchableOpacity>
            ),
            headerRight:(
                <TouchableOpacity style={{ padding: '2%' }} onPress={()=> navigation.navigate('About')} >
                    <Text style={styles.Aboutstyle}>?</Text>
                </TouchableOpacity>
            ),
        };
    };


    ImgRender(){
        let imglink;
        switch(this.state.game){
            case 'lol': return (
                            <Image
                                source ={require('../img/LoL.jpg')}
                                style = {styles.imgRender}
                            />
                        );
                        
            case 'fortnite': return(
                            <Image
                                source={require('../img/fortnite.jpg')}
                                style = {styles.imgRender} 
                                />
                        );
                        
            case 'pubg': return(
                            <Image
                                source={require('../img/pubg.jpg')}
                                style = {styles.imgRender} 
                                />
                        );
                        
            case 'cs': return(
                            <Image
                                source={require('../img/cs.jpg')}
                                style = {styles.imgRender} 
                                />
                        );
                        
            case 'dota': return(
                            <Image
                                source={require('../img/dota.jpg')}
                                style = {styles.imgRender} 
                                />
                        );
                        
            case 'apex': return(
                            <Image
                                source={require('../img/apex.jpg')}
                                style = {styles.imgRender}
                                />
                        );
                        
        }
    }

    ServerOptions(){
        switch(this.state.game){
            case 'lol': return(
                        <Picker
                        style={styles.pickercontainer}
                        selectedValue ={this.state.server}
                        onValueChange ={(itemValue, itemIndex) => this.setState({server:itemValue})}>
                            <Picker.Item label = "NA" value = '104.160.131.1' style = {styles.svtxt}/>
                            <Picker.Item label = "EUW" value = '104.160.141.3' style = {styles.svtxt}/>
                            <Picker.Item label = "EUNE" value = '104.160.142.3' style = {styles.svtxt}/>
                            <Picker.Item label = "OCE" value = '104.160.156.1' style = {styles.svtxt}/>
                            <Picker.Item label = "BR" value = '104.160.152.3' style = {styles.svtxt}/>
                            <Picker.Item label = "LAN" value = '104.160.136.3' style = {styles.svtxt}/>
                        </Picker>
                        );
                        
            case 'dota': return(
                <Picker
                style={styles.pickercontainer}
                selectedValue ={this.state.server}
                onValueChange ={(itemValue, itemIndex) => this.setState({server:itemValue})}>
                            <Picker.Item label = "US West" value = '192.69.96.1' style = {styles.svtxt}/>
                            <Picker.Item label = "US East" value = '208.78.164.1' style = {styles.svtxt}/>
                            <Picker.Item label = "Europe West" value = '146.66.152.1' style = {styles.svtxt}/>
                            <Picker.Item label = "Europe East" value = '146.66.155.1' style = {styles.svtxt}/>
                            <Picker.Item label = "Asia" value = '103.10.124.1' style = {styles.svtxt}/>
                            <Picker.Item label = "Brazil" value = '209.197.25.1' style = {styles.svtxt}/>
                            <Picker.Item label = "South Africa" value = '196.38.180.1' style={styles.svtxt}/>
                        </Picker>
                        );
                        
            case 'pubg': return(
                        <Picker
                        style={styles.pickercontainer}
                        selectedValue ={this.state.server}
                        onValueChange ={(itemValue, itemIndex) => this.setState({server:itemValue})}>
                            <Picker.Item label = "US 1 (Virginia)" value = '23.23.255.255' style = {styles.svtxt}/>
                            <Picker.Item label = "US 2 (Ohio)" value = '13.58.0.253' style = {styles.svtxt}/>
                            <Picker.Item label = "US 3 (California)" value = '13.56.63.251' style = {styles.svtxt}/>
                            <Picker.Item label = "US 4 (Oregon)" value = '34.208.63.251' style = {styles.svtxt}/>
                            <Picker.Item label = "Canada" value = '35.182.0.251' style = {styles.svtxt}/>
                            <Picker.Item label = "Europe 1 (Ireland)" value = '34.248.60.213' style = {styles.svtxt}/>
                            <Picker.Item label = "Europe 2 (London)" value = '35.176.0.252' style = {styles.svtxt}/>
                            <Picker.Item label = "Europe 3 (Frankfurt)" value = '35.156.63.252' style = {styles.svtxt}/>
                            <Picker.Item label = "Brazil" value = '52.67.255.254' style = {styles.svtxt}/>
                            <Picker.Item label = "Australia" value = '13.54.63.252' style = {styles.svtxt}/>
                            <Picker.Item label = "Mumbai" value = '13.126.0.252' style = {styles.svtxt}/>
                            <Picker.Item label = "Seoul" value = '13.124.63.251' style = {styles.svtxt}/>
                            <Picker.Item label = "Singapore" value = '13.228.0.251' style = {styles.svtxt}/>
                            <Picker.Item label = "Tokyo" value = '13.112.63.251' style = {styles.svtxt}/>
                        </Picker>
                        );
                        
            case 'cs': return(
                        <Picker
                        style={styles.pickercontainer}
                        selectedValue ={this.state.server}
                        onValueChange ={(itemValue, itemIndex) => this.setState({server:itemValue})}>
                            <Picker.Item label = "US East" value = '208.78.164.4' style = {styles.svtxt}/>
                            <Picker.Item label = "US West" value = '192.69.96.1' style = {styles.svtxt}/>
                            <Picker.Item label = "US South West" value = '162.254.194.1' style = {styles.svtxt}/>
                            <Picker.Item label = "US South East" value = '162.254.199.1' style = {styles.svtxt}/>
                            <Picker.Item label = "Europe 1(North/Russia/Sweden)" value = '162.254.199.254' style = {styles.svtxt}/>
                            <Picker.Item label = "Europe 2 (East)" value = '185.25.182.1' style = {styles.svtxt}/>
                            <Picker.Item label = "Poland" value = '155.133.240.1' style = {styles.svtxt}/>
                            <Picker.Item label = "Brazil" value = '209.197.29.5' style = {styles.svtxt}/>
                            <Picker.Item label = "Spain" value = '155.133.247.2' style = {styles.svtxt}/>
                            <Picker.Item label = "Australia" value = '103.10.125.2' style = {styles.svtxt}/>
                            <Picker.Item label = "Asia 1" value = '103.28.54.1' style = {styles.svtxt}/>
                            <Picker.Item label = "Asia 2" value = '45.121.184.1' style = {styles.svtxt}/>
                            <Picker.Item label = "Dubai" value = '185.25.183.1' style = {styles.svtxt}/>
                            <Picker.Item label = "India" value = '155.133.233.1' style = {styles.svtxt}/>
                            <Picker.Item label = "Hong Kong" value = '155.133.244.1' style = {styles.svtxt}/>
                            <Picker.Item label = "Japan" value = '61.14.157.158' style = {styles.svtxt}/>
                            <Picker.Item label = "Capetown (South Africa)" value = '97.84.209.1' style = {styles.svtxt}/>
                            <Picker.Item label = "Johansberg (South Africa)" value = '197.80.4.37' style = {styles.svtxt}/>
                        </Picker>
                        );
                        
            case 'fortnite': return(
                            <Picker
                            style={styles.pickercontainer}
                            selectedValue ={this.state.server}
                            onValueChange ={(itemValue, itemIndex) => this.setState({server:itemValue})}>
                                <Picker.Item label = "US East" value = '3.80.0.0' style = {styles.svtxt}/>
                                <Picker.Item label = "US West" value = '13.52.0.0' style = {styles.svtxt}/>
                                <Picker.Item label = "Europe West" value = '18.202.0.0' style = {styles.svtxt}/>
                                <Picker.Item label = "Europe Central" value = '3.120.0.0' style = {styles.svtxt}/>                                
                                <Picker.Item label = "Europe North" value = '13.53.128.254' style = {styles.svtxt}/>
                                <Picker.Item label = "Canada" value = '35.182.0.251' style = {styles.svtxt}/>
                                <Picker.Item label = "Brazil" value = '18.228.0.0' style = {styles.svtxt}/>
                                <Picker.Item label = "Tokyo" value = '3.112.0.0' style = {styles.svtxt}/>
                                <Picker.Item label = "Seoul" value = '13.124.63.251' style = {styles.svtxt}/>
                                <Picker.Item label = "Singapore" value = '3.0.0.9' style = {styles.svtxt}/>
                                <Picker.Item label = "Sydney" value = '13.54.63.252' style = {styles.svtxt}/>
                                <Picker.Item label = "Mumbai" value = '13.126.0.252' style = {styles.svtxt}/>
                                <Picker.Item label = "China" value = '52.80.5.207' style = {styles.svtxt}/>
                            </Picker>
                            );
                            
            case 'apex': return(
                        <Picker
                        style={styles.pickercontainer}
                        selectedValue ={this.state.server}
                        onValueChange ={(itemValue, itemIndex) => this.setState({server:itemValue})}>
                            <Picker.Item label = "US 1 (Oregon)" value = '104.198.101.253' style = {styles.svtxt}/>
                            <Picker.Item label = "US 2 (New York)" value = '107.150.147.67' style = {styles.svtxt}/>
                            <Picker.Item label = "US 3 (Iowa)" value = '130.211.193.234' style = {styles.svtxt}/>
                            <Picker.Item label = "Brazil" value = '177.54.152.31' style = {styles.svtxt}/>
                            <Picker.Item label = "Europe 1" value = '217.147.89.101' style = {styles.svtxt}/>
                            <Picker.Item label = "Europe 2" value = '52.59.121.244' style = {styles.svtxt}/>
                            <Picker.Item label = "Hong Kong" value = '69.88.135.37' style = {styles.svtxt}/>
                            <Picker.Item label = "Taiwan" value = '104.155.233.79' style = {styles.svtxt}/>
                            <Picker.Item label = "Singapore" value = '72.5.161.228' style = {styles.svtxt}/>
                            <Picker.Item label = "Tokyo" value = '161.202.72.179' style = {styles.svtxt}/>
                            <Picker.Item label = "Australia" value = '27.50.72.162' style = {styles.svtxt}/>
                        </Picker>
                        );
                                        
        }
    }

    render(){
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            this.setState({ connectionType: connectionInfo.type})
        });
        
        return(
            <ImageBackground style = {styles.container} source = {require('../img/fundo.jpg')}>
                <StatusBar backgroundColor="#1E90FF" barStyle="light-content" />
                <View style = {styles.Imgcontainer}>
                    {this.ImgRender()}
                    <OfflineNotice />
                </View>
                <View style = {styles.actionsContainer}>
                    <Text style={styles.text}>Game: </Text>
                    <Picker 
                        style={styles.pickercontainer}
                        selectedValue ={this.state.game}
                        onValueChange ={(itemValue, itemIndex) => this.setState({game:itemValue})}>
                        <Picker.Item label = "League of Legends" value = "lol" />
                        <Picker.Item label = "Fortnite" value = "fortnite" />
                        <Picker.Item label = "Apex Legends" value = "apex" />
                        <Picker.Item label = "PlayerUnknown Battlegrounds" value = "pubg" />
                        <Picker.Item label = "Counter Strike: Global Offensive" value = "cs" />
                        <Picker.Item label = "Dota 2" value = "dota"/>
                    </Picker>
                    <Text style={styles.text}>Server:</Text>
                    {this.ServerOptions()}
                    <View style={{width: '30%', margin: 25, flex:1}}>
                        <TouchableOpacity style={styles.button} onPress={() =>{
                            if(this.state.connectionType== 'wifi'){
                                this.props.navigation.navigate("Results",{IP: this.state.server, game: this.state.game})
                            }else{
                                alert('Please connect to a WiFi network to continue')
                            }}}>
                            <Text style={styles.txtbtn}>Start</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.adContainer}>
                    
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    Logostyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Aboutstyle: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        paddingRight: 10
    },
    container:{
        flex: 1,
    },
    Imgcontainer:{
        flex: 6,
        alignItems: 'center',
    },
    actionsContainer:{
        flex: 7,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    adContainer:{
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgRender:{
        flex: 1,
        resizeMode: "contain"
    },
    pickercontainer:{
        width: '60%',
        height: '13%',
        backgroundColor: '#1E90FF',
    },
    text:{
        fontWeight: 'bold', 
        fontSize: 18,
        color: '#000',
        paddingTop: '5%',
        paddingBottom: '0.5%',
    },
    svtxt:{
        textAlign: 'center',
    }, 
    button:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E90FF',
    },
    txtbtn:{
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000'
    },
})