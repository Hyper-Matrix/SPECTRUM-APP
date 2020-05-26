import React,{Fragment} from 'react';
import { StyleSheet, Text, View,Dimensions,Animated,ScrollView,Image,ImageBackground, Linking} from 'react-native';
import {Video} from 'expo-av';
import { createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";
import styled from "styled-components/native";
import { TextInput,Button ,Card,Title,Paragraph} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default  class Events extends React.Component {
    render() {
      return (
        
        <View style={styles.container}>
        <ImageBackground
        source={require('./media/homeback.jpg')}
        style={styles.image}
        >
         <ScrollView >  
          
        
        <Text style={{color:'white',fontSize:30,marginTop:10,alignSelf:'center',fontWeight:'bold',textShadowColor:'black',textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 15,letterSpacing:3}}>EVENTS</Text>
  <Card style={{margin:15,borderRadius:10}}> 
  <ImageBackground source={require('./media/event.jpg')}
style={styles.cardimage}>
  <Card.Content >
  <Title style={{color:'white',textAlign:'justify',fontSize:20,marginTop:10,marginLeft:10,marginRight:10,alignSelf:'center'}}>SPECTRUM INTERNSHIP DRIVE</Title>
  <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    margin:10
  }}
/>
        <Text style={{color:'white',textAlign:'justify',fontSize:20,marginTop:10,marginLeft:10,marginRight:10}}>Spectrum club is proud to announce Spectrum Internship Drive 2020 for all 1st, 2nd and 3rd years students of College of Engineering and Technology Bhubaneswar.
{'\n'}
</Text>
<Text style={{color:'white',textAlign:'justify',fontSize:20,marginBottom:10,alignSelf:'center',marginTop:-13}}>As per AICTE, due to the current pandemic caused by Coronavirus, students are directed not to take any internships outside the organization during summer, but instead take up some challenging projects/problems which can be worked upon by their homes. In view of this, we have decided to provide you this opportunity to showcase your skills and work on challenging problems through our internship drive.
{'\n'}{'\n'}Register now for the internship drive.

</Text>


</Card.Content>
</ImageBackground>
</Card>
<Button  mode="contained" 
    onPress={()=>Linking.openURL('https://spectrumcet.com/form.php') }
color="#00BCD4"
labelStyle={{color:"white",letterSpacing:3}}
 style ={{margin:5, height:50,padding:8,width:350,borderRadius:30,marginTop:5,opacity:0.7,borderColor
 :"black",borderWidth:3,padding:5,marginBottom:180,alignSelf:'center'} }>
    REGISTER
  </Button>
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
   
      resizeMode:'center',
      alignSelf:'auto'
    
      
    },
})