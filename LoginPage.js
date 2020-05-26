import React,{Fragment} from 'react';
import { StyleSheet, Text, View,Dimensions,Animated,ScrollView} from 'react-native';
import {Video} from 'expo-av';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import styled from "styled-components/native";
import { TextInput,Button } from 'react-native-paper';
import Home from './Home'
import Register from './App'
const s = Dimensions.get('window').height
class LoginPage extends React.Component{
  NavigateRegisterScreen = ()=>{
    this.props.navigation.navigate('Register')
    
      }
  resetStack = () => {
    this.props
      .navigation
      .dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'Home',
            
          }),
        ],
      }))
   }
homepage = () => {
  this.props.navigation.navigate('Home')
}
    state={
      fadeAnim: new Animated.Value(0) 
    }
    componentDidMount(){
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 2700
      }).start();
     };
      render(){return (<ScrollView style={styles.container}>
        <View >
          
          <Video source={require("./media/backfinal.mp4")}   
         rate={1.0}
         volume={1.0}
         isMuted={true}
         resizeMode="cover"
         shouldPlay
         isLooping
         style={styles.backgroundVideo}/>
         <Animated.View style={{ opacity:this.state.fadeAnim}}>
        <Wrapper>
  <Logo source={require("./assets/splash.png")}
   width={50}
   height={50}
   resizeMode="contain" 
   />
    <Title>WELCOME TO SPECTRUM</Title>
            <TextDescription>
              ENTER CREDENTIALS BELOW
            </TextDescription>
            <TextInput theme={{colors:{text:"white",primary:"white",placeholder:"white"}}}
            mode="outlined" label="E-Mail" placeholder="Enter Your E-mail" style={styles.Textinput1}  />
             
             <TextInput theme={{colors:{text:"white",primary:"white",placeholder:"white"}}}
            mode="outlined" label="Password" placeholder="Enter your Password" style={styles.Textinput1}  />
            <Button  mode="contained" 
  color="#00BCD4"
  onPress={()=>this.resetStack()}
  labelStyle={{color:"white",letterSpacing:3}}
   style ={{margin:5, height:50,padding:8,width:350,borderRadius:30,marginTop:30,opacity:0.7,borderColor
   :"black",borderWidth:3,padding:5} }>
      LOGIN
    </Button>
    <Button  mode="contained" 
    onPress={()=>this.NavigateRegisterScreen() }
color="#00BCD4"
labelStyle={{color:"white",letterSpacing:3}}
 style ={{margin:5, height:50,padding:8,width:350,borderRadius:30,marginTop:5,opacity:0.7,borderColor
 :"black",borderWidth:3,padding:5,marginBottom:180} }>
    BACK
  </Button>
            </Wrapper>
        </Animated.View>
        
        </View>
        </ScrollView>
      );
     }
   }
   const AppNavigator = createStackNavigator({
    LoginPage: {
      screen: LoginPage
    },Home: {
      screen: ()=><Home/>
    },
    Register: {
      screen:()=><Register/>
    }
    
  },{
    headerMode:"none"
  }
  );
  
  export default createAppContainer(AppNavigator);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',

      height:s
    },backgroundVideo:{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      flex:1
     
    },
    Textinput:{
      backgroundColor: 'transparent',
      width:350,
      marginTop:20
      
    },Textinput1:{
      backgroundColor: 'rgba(0,0,0,0.4)',
      width:350,
      marginTop:20
      
    },
    backgroundVideo: {
      height: 820,
      position: "absolute",
      top: 0,
      left: 0,
      alignItems: "stretch",
      bottom: 0,
      right: 0,
      alignSelf:"auto"
    }
  });
  export const Wrapper = styled.View`
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    flex-direction: column;
  `;
  export const Logo = styled.Image`
    max-width: 100px;
    width: 100px;
    height: 100px;
    marginTop: 80;
  `;
  
  
  export const TextDescription = styled.Text`
    letter-spacing: 3;
    color: #f4f4f4;
    text-align: center;
    text-transform: uppercase;
  `;
  
  export const Title = styled.Text`
    color: #f4f4f4;
    margin: 10% 0px 20px;
    font-size: 30;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 3;
  `;
  