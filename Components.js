import React,{Fragment} from 'react';
import { StyleSheet, Text, View,Dimensions,Animated,ScrollView,Image,ImageBackground} from 'react-native';
import {Video} from 'expo-av';
import { createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";
import styled from "styled-components/native";
import { TextInput,Button ,Card,Title,Paragraph} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const size = Dimensions.get('window').height
   export default class About extends React.Component {
    static navigationOptions = {
      title: 'About',
    };
  
    render() {
      return (
        
        <View style={styles.container}>
        <ImageBackground
        source={require('./media/homeback.jpg')}
        style={styles.image}
        >
         <ScrollView >  
          
        <Image source={require('./assets/splash.png')} style={{height:150,width:150,alignSelf:'center',marginTop:10}}/>
        <Text style={{color:'white',fontSize:30,marginTop:10,alignSelf:'center',fontWeight:'bold',textShadowColor:'black',textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 15,letterSpacing:3}}>SPECTRUM</Text>
  <Card style={{margin:15,borderRadius:10}}> 
  <ImageBackground source={require('./media/space.jpg')}
style={styles.cardimage}>
  <Card.Content >
  <Title style={{color:'white',textAlign:'justify',fontSize:20,marginTop:10,marginLeft:10,marginRight:10,alignSelf:'center'}}>About Us</Title>
  <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    margin:10
  }}
/>
        <Text style={{color:'white',textAlign:'justify',fontSize:20,marginTop:10,marginLeft:10,marginRight:10}}>A Spectrum is a condition that is not limited to a specific set of values but can vary without steps, across a continuum. The word “Spectrum” is particularly used to describe the characteristic colours of visible light after passing through a prism. Light from different sources contains rays of varying wavelengths, each with its own brightness. A prism disperses these rays in different directions, making the spectrum of white light individually visible. Similarly our club “SPECTRUM” is so named as it provides us with different wings homologous to that of the characteristic colours of white light, such as{'\n'}
</Text>
<Text style={{color:'white',textAlign:'justify',fontSize:20,marginBottom:10,alignSelf:'center',marginTop:-13}}>1.Instrumentation & Control</Text>

<Text style={{color:'white',textAlign:'justify',fontSize:20,margin:10,alignSelf:'center'}}>2.Electronics & Embedded systems</Text>

<Text style={{color:'white',textAlign:'justify',fontSize:20,margin:10,alignSelf:'center',marginBottom:20}}>3.Design & Promotion</Text>

<Text style={{color:'white',textAlign:'justify',fontSize:20,margin:10}}>Under these different wings different areas of electronics engineering practice are covered giving widespread Scope to all our fellow mates to make their talents come to limelight.</Text>
</Card.Content>
</ImageBackground>
</Card>
</ScrollView>
        </ImageBackground>
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
})