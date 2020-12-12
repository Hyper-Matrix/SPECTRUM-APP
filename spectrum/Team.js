import React from 'react';
import { StyleSheet, Text, View,Dimensions,Animated,ScrollView,Image,ImageBackground, Linking} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";
import {Card,Paragraph} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
const s = Dimensions.get('window').height
export default class Team extends React.Component {
 
    render() {
      return (
        
        <View style={styles.container}>
        <ImageBackground
        source={require('./media/homeback.jpg')}
        style={styles.image}
        >
         <ScrollView >  
         <Text style={{color:'white',fontSize:30,marginTop:10,alignSelf:'center',fontWeight:'bold',textShadowColor:'black',textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 15,letterSpacing:3}}>OUR TEAM</Text>
         <Card
style={{margin:10,opacity:1,marginTop:20,borderColor:'white',borderWidth:4}}

>
<ImageBackground source={require('./media/nebu.jpg')}
style={styles.cardimage}>
    
    <Card.Content>
     
      <Image style={{height:110,width:110,alignSelf:'center',marginTop:10}} source={require('./members/soumya-4th.png')} />
    <Paragraph style={{fontSize:20,alignSelf:'center',marginTop:20,fontWeight:'bold',textShadowColor:'black',color:"white", textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 15}} >SOUMYA BAL</Paragraph>
    <Paragraph style={{color:"white",fontSize:16,textShadowColor:'black',textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 15,marginTop:15,letterSpacing:2,alignSelf:'center'}} >CONVENER</Paragraph>
  <View style={{marginBottom:15,marginTop:10,flexDirection:'row'}}>

  <Ionicons name="logo-instagram" size={39} style={{marginBottom:9,marginTop:10,color:'white'}} onPress={()=>{ Linking.openURL('https://www.instagram.com/balsoumyaranjan32/')}}/>
  <Ionicons name="logo-linkedin" size={39} style={{marginBottom:9,marginTop:10,marginLeft:10,color:'white'}} onPress={()=>{ Linking.openURL('https://www.linkedin.com/in/soumya-bal-8654a4138/?originalSubdomain=in')}}/>
  </View>
 
    </Card.Content>
    </ImageBackground>
    </Card>
    <Card
style={{margin:10,opacity:1,marginTop:20,borderColor:'white',borderWidth:4}}

>
<ImageBackground source={require('./media/neb1.jpg')}
style={styles.cardimage}>
    
    <Card.Content>
     
      <Image style={{height:110,width:110,alignSelf:'center',marginTop:10}} source={require('./members/soumya.png')} />
    <Paragraph style={{fontSize:20,alignSelf:'center',marginTop:20,fontWeight:'bold',textShadowColor:'black',color:"white", textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 15}} >SOUMYA RANJAN MOHANTY</Paragraph>
    <Paragraph style={{color:"white",fontSize:16,textShadowColor:'black',textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 15,marginTop:15,letterSpacing:2,alignSelf:'center'}} >COORDINATOR</Paragraph>
  <View style={{marginBottom:15,marginTop:10,flexDirection:'row'}}>
  <Ionicons name="logo-facebook" size={39} style={{marginTop:10,color:"white"}} onPress={()=>{ Linking.openURL('https://www.facebook.com/soumyaranjan.mohanty.75491')}}/>
  <Ionicons name="logo-linkedin" size={39} style={{marginBottom:9,marginTop:10,marginLeft:10,color:'white'}} onPress={()=>{ Linking.openURL('https://www.linkedin.com/in/srm43/')}}/>
  </View>
 
    </Card.Content>
    </ImageBackground>
    </Card>
    <Card
style={{margin:10,opacity:1,marginTop:20,borderColor:'white',borderWidth:4}}

>
<ImageBackground source={require('./media/neb1.jpg')}
style={styles.cardimage}>
    
    <Card.Content>
     
      <Image style={{height:110,width:110,alignSelf:'center',marginTop:10}} source={require('./members/pritish.png')} />
    <Paragraph style={{fontSize:20,alignSelf:'center',marginTop:20,fontWeight:'bold',textShadowColor:'black',color:"white", textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 15}} >PRITISH ROSHAN RAY</Paragraph>
    <Paragraph style={{color:"white",fontSize:16,textShadowColor:'black',textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 15,marginTop:15,letterSpacing:2,alignSelf:'center'}} >TECHNICAL LEAD</Paragraph>
  <View style={{marginBottom:15,marginTop:10,flexDirection:'row'}}>
  <Ionicons name="logo-facebook" size={39} style={{marginTop:10,color:"white"}}  onPress={()=>{ Linking.openURL('https://m.facebook.com/pritishroshan.ray')}}/>
  <Ionicons name="logo-instagram" size={39} style={{marginBottom:9,marginTop:10,marginLeft:10,color:'white'}}  onPress={()=>{ Linking.openURL('https://www.instagram.com/pritishroshan/')}}/>
  <Ionicons name="logo-linkedin" size={39} style={{marginBottom:9,marginTop:10,marginLeft:10,color:'white'}}  onPress={()=>{ Linking.openURL('https://www.linkedin.com/in/pritish-roshan-ray-49921a172/')}}/>
  </View>
 
    </Card.Content>
    </ImageBackground>
    </Card>
    <Card
style={{margin:10,opacity:1,marginTop:20,borderColor:'white',borderWidth:4}}

>
<ImageBackground source={require('./media/neb1.jpg')}
style={styles.cardimage}>
    
    <Card.Content>
     
      <Image style={{height:110,width:110,alignSelf:'center',marginTop:10}} source={require('./members/deepak.png')} />
    <Paragraph style={{fontSize:20,alignSelf:'center',marginTop:20,fontWeight:'bold',textShadowColor:'black',color:"white", textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 15}} >DEEPAK KUMAR PRUSTY</Paragraph>
    <Paragraph style={{color:"white",fontSize:16,textShadowColor:'black',textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 15,marginTop:15,letterSpacing:2,alignSelf:'center'}} >TECHNICAL LEAD</Paragraph>
  <View style={{marginBottom:15,marginTop:10,flexDirection:'row'}}>
  <Ionicons name="logo-facebook" size={39} style={{marginTop:10,color:"white"}} onPress={()=>{ Linking.openURL('https://www.facebook.com/deepak.prusty.52')}}/>
  <Ionicons name="logo-instagram" size={39} style={{marginBottom:9,marginTop:10,marginLeft:10,color:'white'}} onPress={()=>{ Linking.openURL('https://www.instagram.com/deepak.prusty.52/')}}/>
  <Ionicons name="logo-linkedin" size={39} style={{marginBottom:9,marginTop:10,marginLeft:10,color:'white'}} onPress={()=>{ Linking.openURL('https://www.linkedin.com/in/deepak-kumar-prusty-a2060016b/')}}/>
  </View>
 
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
      height:s
    },
    image:{
      flex:1,
      resizeMode: "cover",
      
      
    },
    cardimage:{
   
      resizeMode:'cover',
     
      
    },
})