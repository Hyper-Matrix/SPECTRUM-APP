import React,{Fragment} from 'react';
import { StyleSheet, Text, View,Dimensions,Animated,ScrollView,Alert,BackHandler,ActivityIndicator} from 'react-native';
import {Video} from 'expo-av';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import styled from "styled-components/native";
import { TextInput,Button,Snackbar } from 'react-native-paper';
import LoginPage from './LoginPage'
import NetInfo from "@react-native-community/netinfo";
import * as firebase from 'firebase';
import Home from './Home';
import * as Google from 'expo-google-app-auth';
import Home1 from './Home1'
import * as ImagePicker from 'expo-image-picker';
const height = Dimensions.get('screen').height;

import {firebaseConfig} from './config'

 class Register extends React.Component{
  constructor() {
    super();
    this.state = { 
      fadeAnim: new Animated.Value(0) ,
    visible: false,
      displayName: '',
      email: '', 
      pass: '',
      phone:'',
      val:" ",
      year:' ',
      isLoading: false,
      photoURL:'https://i.ibb.co/wSjh6vt/splash.png'
    }
  }
  
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  final(){
    this.userSignup(this.state.email,this.state.pass);
   
  }
 
  userSignup(email, pass){
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } 
    else {
      this.setState({
        isLoading: true,
      })
    }


    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((res)=>{
      this.props.navigation.navigate('LoginPage');
      res.user.updateProfile({
        displayName:this.state.displayName,
        email:this.state.email,
        pass:this.state.pass,
        photoURL:this.state.photoURL
      })
    })
    .catch(error=>{
Alert.alert(error.message)
    })

   
  }
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({photoURL:result.uri});
      
    }
  };
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
    render(){
      if(this.state.isLoading){
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
      //console.log(this.state.name)
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
<Logo source={{uri:this.state.photoURL}}
 width={50}
 height={50}
 resizeMode="contain" />
  <Title>WELCOME TO SPECTRUM</Title>
          <TextDescription>
            PLEASE REGISTER BELOW
          </TextDescription>
          <TextInput theme={{colors:{text:"white",primary:"white",placeholder:"white"}}}
          mode="outlined" label="Name" placeholder="Enter your Name" style={styles.Textinput} value={this.state.displayName}   onChangeText={(val) => this.updateInputVal(val, 'displayName')}  />
          <TextInput theme={{colors:{text:"white",primary:"white",placeholder:"white"}}}
          mode="outlined" label="E-Mail" placeholder="Enter Your E-mail" style={styles.Textinput} value={this.state.email} onChangeText={(val) => this.updateInputVal(val, 'email')}  />
           <TextInput theme={{colors:{text:"white",primary:"white",placeholder:"white"}}}
          mode="outlined" label="Password" placeholder="Enter Your Password" style={styles.Textinput} value={this.state.pass} onChangeText={(val) => this.updateInputVal(val, 'pass')} secureTextEntry={true}/>
           <TextInput theme={{colors:{text:"white",primary:"white",placeholder:"white"}}}
          mode="outlined" label="Phone" placeholder="Enter Your Phone Number" style={styles.Textinput} value={this.state.phone} onChangeText={(val) => this.updateInputVal(val, 'phone')}  />
           
          <Button  mode="contained" 
          onPress={this.pickImage}
color="#00BCD4"
labelStyle={{color:"white",letterSpacing:3}}
 style ={{margin:5, height:50,padding:8,width:350,borderRadius:30,marginTop:20,opacity:0.7,borderColor
 :"black",borderWidth:3,padding:5} }>
    UPLOAD IMAGE
  </Button>
          <Button  mode="contained" 
          onPress={()=>this.final()}
color="#00BCD4"
labelStyle={{color:"white",letterSpacing:3}}
 style ={{margin:5, height:50,padding:8,width:350,borderRadius:30,marginTop:20,opacity:0.7,borderColor
 :"black",borderWidth:3,padding:5} }>
    REGISTER
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
 
class LoginScreen extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { fadeAnim: new Animated.Value(0) ,
      visible: false,
      signedIn: false,
      name: " ",
      photoUrl: " ",
      data:"",
      Loading:false
    }
  }
  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "1004196694696-agbsocn4d4fmmggbjqk3aqta4mtl5qjm.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl,
          data:result.user
        })
        this.props
        .navigation
        .dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: 'Home1',
              
            },
            ),
          ],
        }))
      console.log(this.state.name)
      
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }
  resetStack = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user logged')
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
      else{
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
   });
    
   }
  NavigateRegisterScreen = ()=>{
this.props.navigation.navigate('Register')

  }
  NavigateLoginPage = ()=>{
    this.props.navigation.navigate('LoginPage')
    
      }
  nav=()=>{
    this.props.navigation.navigate('Rough')
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
  render() {
   
    return (
      
      <View >
        
        <Video source={require("./media/back2.mp4")}   
       rate={1.0}
       volume={1.0}
       isMuted={false}
       resizeMode="cover"
       shouldPlay
       isLooping
       style={styles.backgroundVideo}
       />
       <Animated.View style={{opacity:this.state.fadeAnim}}>
    
      <Wrapper style={{alignSelf:'center',justifyContent:'center'}}>
<Logo source={require("./assets/splash.png")}
 width={50}
 height={50}
 resizeMode="contain" />
  <Title style={{marginTop:150}}>WELCOME TO SPECTRUM</Title>
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
  
  
      </Wrapper>
     
      </Animated.View>
      <View  style={{marginBottom:10,marginTop:130}}>
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
    ,Home:{
      screen:()=><Home/>
    },
    Home1:{
      screen:()=><Home1/>
    },
   
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
  
  },backgroundVideo:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  Textinput:{
    backgroundColor: 'rgba(0,0,0,0.57)',
    width:350,
    marginTop:20
    
  },
  backgroundVideo: {
    height: height,
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
  }
});
export const Wrapper = styled.View`
  justify-content: center;
  padding: 20px;
  align-items: center;
  flex-direction: column;
`;
export const Logo = styled.Image`
  max-width: 100px;
  width: 100px;
  height: 100px;
  marginTop: 10px;
  align-self:center;
  border-radius:150;
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

