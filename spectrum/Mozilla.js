import React,{Fragment} from 'react';
import { StyleSheet, Text, View,Dimensions,Animated,ScrollView,Image,ImageBackground, Linking} from 'react-native';
import {Video} from 'expo-av';
import { createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";
import styled from "styled-components/native";
import { TextInput,Button ,Card,Title,Paragraph} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default class Mozilla extends React.Component {
    render() {
      return (
        
        <View style={styles.container}>
        <Video source={require("./media/mozilla.mp4")}   
       rate={1.0}
       volume={1.0}
       isMuted={true}
       resizeMode="cover"
       shouldPlay
       style={styles.backgroundVideo}/>
            <Image style={{height:160 ,width:160,alignSelf:'center',marginTop:30}} source={require('./assets/icon.png')}/>
        </View>
 
       
      );

    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#303F9F',
      
    },
    image:{
      flex:1,
      resizeMode: "cover",
      
      
    },
    cardimage:{
   
      resizeMode:'cover',
     
      
    },
    backgroundVideo:{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }
})