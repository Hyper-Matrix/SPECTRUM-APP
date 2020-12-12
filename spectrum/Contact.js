import React,{Fragment} from 'react';
import { StyleSheet, Text, View,Dimensions,Animated,ScrollView,Image,ImageBackground, Linking} from 'react-native';
import {Video} from 'expo-av';
import { createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";
import styled from "styled-components/native";
import { TextInput,Button ,Card,Title,Paragraph} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default class Contact extends React.Component {
    render() {
      return (
        
        <View style={styles.container}>
        <ImageBackground
        source={require('./media/homeback.jpg')}
        style={styles.image}
        >
         <ScrollView >  
          
        <Image source={require('./assets/splash.png')} style={{height:100,width:100,alignSelf:'center',marginTop:10}}/>
        <Text style={{color:'white',fontSize:30,marginTop:10,alignSelf:'center',fontWeight:'bold',textShadowColor:'black',textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 15,letterSpacing:3}}>SPECTRUM</Text>
  <Card style={{margin:15,borderRadius:10}}> 
  <ImageBackground source={require('./media/earth1.jpg')}
style={styles.cardimage}>
  <Card.Content >
  <Title style={{color:'white',textAlign:'justify',fontSize:20,marginTop:10,marginLeft:10,marginRight:10,alignSelf:'center'}}>Contact Us</Title>
  <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    margin:10
  }}
/>
<Text style={{color:'white',textAlign:'justify',fontSize:20,marginTop:10,marginLeft:10,marginRight:10}}>Our Address
</Text>
<View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    margin:10,
    width:98
  }}
/>
<View style={{flexDirection:'row'}}
>
  <Ionicons onPress={()=>Linking.openURL('https://www.google.com/maps/place/Spectrum+Club+-+College+Of+Engineering+and+Technology,+Bhubaneswar/@20.2771016,85.7759027,15z/data=!4m2!3m1!1s0x0:0x1d95cb7336d44ba?sa=X&ved=2ahUKEwiw7fTy2crpAhXIdn0KHcTFAeoQ_BIwE3oECA8QCg')} name="md-pin" size={30} style={{marginTop:12,color:'white'}}/>
<Text onPress={()=>Linking.openURL('https://www.google.com/maps/place/Spectrum+Club+-+College+Of+Engineering+and+Technology,+Bhubaneswar/@20.2771016,85.7759027,15z/data=!4m2!3m1!1s0x0:0x1d95cb7336d44ba?sa=X&ved=2ahUKEwiw7fTy2crpAhXIdn0KHcTFAeoQ_BIwE3oECA8QCg')} style={{color:'white',textAlign:'justify',fontSize:20,marginTop:10,marginLeft:10,marginRight:10}}>College of Engineering and Technology, Kalinganagar, Bhubaneswar, Odisha 751003
</Text>
</View>
<View style={{flexDirection:'row'}}
>
  <Ionicons onPress={()=>Linking.openURL('mailto:spectrumclub.cetb@cet.edu.in')} name="md-mail" size={30} style={{marginTop:27,color:'white'}}/>
<Text onPress={()=>Linking.openURL('mailto:spectrumclub.cetb@cet.edu.in')} style={{color:'white',textAlign:'justify',fontSize:20,marginTop:10,marginLeft:10,marginRight:10}}>{'\n'}spectrumclub.cetb@cet.edu.in
</Text>
</View>
<View style={{flexDirection:'row'}}
>
  <Ionicons onPress={()=>Linking.openURL('https://suspicious-benz-143053.netlify.app/')} name="md-globe" size={30} style={{marginTop:27,color:'white'}}/>
<Text onPress={()=>Linking.openURL('https://suspicious-benz-143053.netlify.app/')}  style={{color:'white',textAlign:'justify',fontSize:20,marginTop:10,marginLeft:10,marginRight:10}}>{'\n'}https://spectrumcet.com/
</Text>
</View>
<Text style={{color:'white',textAlign:'justify',fontSize:20,marginLeft:10,marginRight:10}}>{'\n'}Connect With Us
</Text>
<View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    margin:10,
    width:130
  }}
/>
<View style={{flexDirection:'row'}}
>
  <Ionicons onPress={()=>Linking.openURL('https://www.facebook.com/spCETrum/')} name="logo-facebook" size={40} style={{marginTop:12,color:'white'}}/>
  <Ionicons onPress={()=>Linking.openURL('https://www.instagram.com/spectrum.cetb/?hl=en')}  name="logo-instagram" size={40} style={{marginTop:12,color:'white',marginLeft:15}}/>
  <Ionicons onPress={()=>Linking.openURL('https://www.twitter.com ')}  name="logo-twitter" size={40} style={{marginTop:12,color:'white',marginLeft:15}}/>
  <Ionicons onPress={()=>Linking.openURL('https://www.youtube.com/channel/UCFJdttLXjuUyd6tpMAW2Hhw')}  name="logo-youtube" size={40} style={{marginTop:12,color:'white',marginLeft:15}}/>

</View>
        <Text style={{color:'white',textAlign:'justify',fontSize:20,marginTop:50,marginLeft:10,marginRight:10,lineHeight:37}}>SPECTRUM{'\n'}LET'S INNOVATE
</Text>
<Text onPress={()=>Linking.openURL('https://github.com/Hyper-Matrix')} style={{color:'white',fontSize:20,marginTop:30,marginLeft:10,marginBottom:10}}>{'\n'}© Spectrum app designed and developed by Hyper-Matrix
</Text>

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