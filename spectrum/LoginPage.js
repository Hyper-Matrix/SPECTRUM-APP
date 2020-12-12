import React,{Fragment} from 'react';
import { StyleSheet, Text, View,Dimensions,Animated,ScrollView,ActivityIndicator,Alert} from 'react-native';
import {Video} from 'expo-av';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import styled from "styled-components/native";
import { TextInput,Button,Snackbar } from 'react-native-paper';
import Home from './Home'
import Register from './App'
import NetInfo from "@react-native-community/netinfo";
import * as firebase from 'firebase'
const s = Dimensions.get('screen').height
class LoginPage extends React.Component{
  constructor() {
    super();
    this.state = { fadeAnim: new Animated.Value(0) ,
      visible: false,
      email: '', 
      password: '',
      isLoading: false
    }
  }
  resetStack = () => {
   
   }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
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
      })
      .catch(error=>{
        Alert.alert(error.message)
        this.setState({isLoading:false})
            })
    }
   
  }

  NavigateRegisterScreen = ()=>{
    this.props.navigation.navigate('Register')
    
      }
 
homepage = () => {
  this.props.navigation.navigate('Home')
}
    
    componentDidMount(){
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 2700
      }).start();
      NetInfo.fetch().then(state => {
        console.log('Connection type', state.type);
      
        console.log('Is connected?', state.isConnected);
        if(state.isConnected == true){
       
      return null;
        }
        else{
        
        this.setState({visible:true});
        }
      });
     };
     _onDismissSnackBar = () => this.setState({ visible: false });
      render()
      {if(this.state.isLoading){
        return(
          <View style={styles.preloader}>
            <Video source={require("./media/load.mp4")}   
       rate={1.0}
       volume={1.0}
       isMuted={true}
       resizeMode='contain'
       shouldPlay
       isLooping
       style={styles.backgroundVideo}/>
          </View>
        )
      }    
        
        return (
        <View >
          
          <Video source={require("./media/back2.mp4")}   
         rate={1.0}
         volume={1.0}
         isMuted={true}
         resizeMode="cover"
         shouldPlay
         isLooping
         style={styles.backgroundVideo}/>
         <ScrollView>
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
            mode="outlined" label="E-Mail" placeholder="Enter Your E-mail" style={styles.Textinput1} 
            onChangeText={(val) => this.updateInputVal(val, 'email')}/>
             
             <TextInput theme={{colors:{text:"white",primary:"white",placeholder:"white"}}}
            mode="outlined" label="Password" placeholder="Enter your Password" style={styles.Textinput1}
            onChangeText={(val) => this.updateInputVal(val, 'password')} secureTextEntry={true} />
            <Button  mode="contained" 
  color="#00BCD4"
  onPress={() => this.userLogin()}
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
 :"black",borderWidth:3,padding:5} }>
    BACK
  </Button>
            </Wrapper>
            
        </Animated.View>
        </ScrollView>
        <Snackbar
     
     visible={this.state.visible}
     onDismiss={this._onDismissSnackBar}
     action={{
       label: 'Exit',
       onPress: () => {
         BackHandler.exitApp();
       },
     }}
     duration={1000000}
   >
     You are disconnected please connect to the internet and then open the app
   </Snackbar>
        </View>
        
       
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
      backgroundColor: 'rgba(0,0,0,0.57)',
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
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black'
    },
    backgroundVideo:{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height:s
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
  