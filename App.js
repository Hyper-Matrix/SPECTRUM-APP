import React,{Fragment} from 'react';
import { StyleSheet, Text, View,Dimensions,Animated,ScrollView} from 'react-native';
import {Video} from 'expo-av';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import styled from "styled-components/native";
import { TextInput,Button } from 'react-native-paper';
import LoginPage from './LoginPage'


 class Register extends React.Component{
   
  state={
    fadeAnim: new Animated.Value(0) 
  }
  componentDidMount(){
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 2700
    }).start();
   };
    render(){return (
      <View style={styles.container}>
        <ScrollView>
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
 resizeMode="contain" />
  <Title>WELCOME TO SPECTRUM</Title>
          <TextDescription>
            PLEASE REGISTER BELOW
          </TextDescription>
          <TextInput theme={{colors:{text:"white",primary:"white",placeholder:"white"}}}
          mode="outlined" label="E-Mail" placeholder="Enter Your E-mail" style={styles.Textinput}  />
           <TextInput theme={{colors:{text:"white",primary:"white",placeholder:"white"}}}
          mode="outlined" label="Password" placeholder="Enter Your Password" style={styles.Textinput}  />
           <TextInput theme={{colors:{text:"white",primary:"white",placeholder:"white"}}}
          mode="outlined" label="Phone" placeholder="Enter Your Phone Number" style={styles.Textinput}  />
           <TextInput theme={{colors:{text:"white",primary:"white",placeholder:"white"}}}
          mode="outlined" label="Registration No." placeholder="Enter your Registration Number" style={styles.Textinput1}  />
          <Button  mode="contained" 
color="#00BCD4"
labelStyle={{color:"white",letterSpacing:3}}
 style ={{margin:5, height:50,padding:8,width:350,borderRadius:30,marginTop:30,opacity:0.7,borderColor
 :"black",borderWidth:3,padding:5,marginBottom:130} }>
    REGISTER
  </Button>
          </Wrapper>
      </Animated.View>
      </ScrollView>
      </View>
    );
   }
 }
class LoginScreen extends React.Component {
  resetStack = () => {
    this.props
      .navigation
      .dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'LoginPage',
            
          }),
        ],
      }))
   }
  NavigateRegisterScreen = ()=>{
this.props.navigation.navigate('Register')

  }
  NavigateLoginPage = ()=>{
    this.props.navigation.navigate('LoginPage')
    
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
  render() {
    return (
      <View >
        <Video source={require("./media/backfinal.mp4")}   
       rate={1.0}
       volume={1.0}
       isMuted={false}
       resizeMode="cover"
       shouldPlay
       isLooping
       style={styles.backgroundVideo}
       />
       <Animated.View style={{ opacity:this.state.fadeAnim}}>
      <Wrapper>
<Logo source={require("./assets/splash.png")}
 width={50}
 height={50}
 resizeMode="contain" />
  <Title>WELCOME TO SPECTRUM</Title>
          <TextDescription>
            LOGIN OR REGISTER BELOW
          </TextDescription>
<Button  mode="contained" 
color="#00BCD4"
onPress={()=>this.resetStack()}
labelStyle={{color:"white",letterSpacing:3}}
 style ={{margin:5, height:50,padding:8,width:350,borderRadius:30,marginTop:90,opacity:0.7,borderColor
 :"black",borderWidth:3,padding:5}} >
    LOGIN
  </Button>
  <Button  
mode="contained" 
onPress={()=>this.NavigateRegisterScreen()}
color="#8BC34A"
labelStyle={{color:"white",letterSpacing:3}}
style ={{margin:5, height:50,padding:8,width:350,marginTop:10,borderRadius:30,opacity:0.7,borderColor
  :"black",borderWidth:3,padding:5}}>
    REGISTER
  </Button>
  <Button  mode="contained" 
color="red"
icon="google"
labelStyle={{color:"white",letterSpacing:3}}
 style ={{margin:5, height:50,padding:8,width:350,marginTop:10,borderRadius:30,opacity:0.7,borderColor
  :"black",borderWidth:3,padding:5} }>
    GOOGLE+
  </Button>
      </Wrapper>
      </Animated.View>
      
      </View>

    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Register: Register,
    Login: LoginScreen,
    LoginPage:
    {screen: ()=><LoginPage/>}
    
  },
  {
    initialRouteName: "Login",
    headerMode:"none"
  }
);
export default createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },backgroundVideo:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  Textinput:{
    backgroundColor: 'transparent',
    width:350,
    marginTop:20
    
  },Textinput1:{
    backgroundColor: 'transparent',
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
  marginTop: 30;
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

