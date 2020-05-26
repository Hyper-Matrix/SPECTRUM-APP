import React from 'react';
import { StyleSheet, Text, View,Dimensions,ImageBackground, Alert,ScrollView,Picker} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
import {firebaseConfig} from './config'
import { TextInput,Button } from 'react-native-paper';
const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

firebase.initializeApp(firebaseConfig);
  

class Decode extends React.Component{
  state={
    name:" ",
    regd:" ",
    component:" ",
    purpose:" ",
    mylist:[]
  }
  componentDidMount(){
  const item =  firebase.database().ref("users");
  item.on("value",datasnap=>{
    console.log(datasnap.val())
  })
  }
  saveitem(){
   console.log(this.state)
   const name =  firebase.database().ref("users");
   const data = this.props.navigation.getParam("data", "NO-QR");
   name.push().set({
     name:this.state.name,
     regd:this.state.regd,
    priority:data,
    component:this.state.component,
    purpose:this.state.purpose,
    time:Date.now()
   })
   this.setState({name:" "})
   this.setState({regd:" "})
   this.setState({component:" "})
   this.setState({purpose:" "})
  }
render(){
 
  const data = this.props.navigation.getParam("data", "NO-QR");
  return (<ImageBackground
    source={require('./media/homeback.jpg')}
    style={styles.image}
    >
    < ScrollView >
    <View style={{flex:1,backgroundColor:'transparent',alignItems:'center',justifyContent:'center'}}>
    <Text style={{color:'white',fontSize:30,alignSelf:'center',fontWeight:'bold',textShadowColor:'black',textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 15,letterSpacing:3}}>ISSUE COMPONENTS</Text>
    <TextInput theme={{colors:{text:"white",primary:"white",placeholder:"white"}}} style={styles.Textinput1} mode="outlined" placeholder="Enter Name" label="Name"
    value={this.state.name} onChangeText={(text)=>this.setState({name:text})}/>
    <TextInput theme={{colors:{text:"white",primary:"white",placeholder:"white"}}} style={styles.Textinput1} mode="outlined" placeholder="Enter Registration Number" label="Regd.no"value={this.state.regd} onChangeText={(text)=>this.setState({regd:text})}/>
    
    <TextInput theme={{colors:{text:"white",primary:"white",placeholder:"white"}}} style={styles.Textinput1} mode="outlined" disabled='true'>{data}</TextInput>
    <View
                    style={{marginTop:22,
                        borderColor: 'white',
                        borderWidth:1,
                        borderRadius: 3,
                        
                    }}>
    <Picker style={{ backgroundColor: 'rgba(0,0,0,0.6)',
      width:350,
      
      color:"white",borderColor:"white",borderWidth:5}} selectedValue={this.state.component} mode="dropdown" onValueChange={(text)=>this.setState({component:text})}>
    <Picker.Item label = "Select Required Component"/>
    <Picker.Item label = "Arduino" value = "Arduino" />
               <Picker.Item label = "Raspberry" value = "Raspberry" />
               <Picker.Item label = "Motor Driver" value = "motordriver" />
    </Picker>
    </View>
    <TextInput theme={{colors:{text:"white",primary:"white",placeholder:"white"}}} style={styles.Textinput1} mode="outlined" placeholder="Enter Purpose" label="Purpose" value={this.state.purpose} onChangeText={(text)=>this.setState({purpose:text})}/>
    <Button  mode="contained" 
    onPress={()=>this.saveitem() }
color="#00BCD4"
labelStyle={{color:"white",letterSpacing:3}}
 style ={{margin:5, height:50,padding:8,width:360,borderRadius:30,opacity:0.7,borderColor
 :"black",borderWidth:3,padding:5,marginTop:22} }>
    SUBMIT
  </Button>
    </View>
    </ ScrollView>
    </ImageBackground>
  );
}
 
}
 class  Scanner extends React.Component {
   
  state = {
    hasCameraPermission: null, // if app has permissions to acess camera
    isScanned: false // scanned-set to false, tertiary operator works below, remember initial condition is false
  }
  async componentDidMount() {
    // ask for camera permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    console.log(status);
    this.setState({ hasCameraPermission: status === "granted" ? true : false });
  }
  handleBarCodeScanned = ({ type, data }) => {
    // Do something here
    this.props.navigation.navigate('Decode', {
      data: data 
    });
}
    render() {
      
      const { hasCameraPermission, isScanned } = this.state;
      if(hasCameraPermission === null){
        console.log("Requesting permission");
        return (<ImageBackground
          source={require('./media/homeback.jpg')}
          style={styles.image}
          >
          <Text style={{color:'white',fontSize:30,marginTop:10,alignSelf:'center',fontWeight:'bold',textShadowColor:'black',textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 15,letterSpacing:2}}>REQUESTING PERMISSION</Text>
        </ImageBackground>
        );
      }
  
      if(hasCameraPermission === false){
        return ( 
          
           Alert.alert("Please grant Camera permission")
          
        )
      }
      if(hasCameraPermission === true && !isScanned && this.props.navigation.isFocused() ){
        return <ImageBackground
        source={require('./media/homeback.jpg')}
        style={styles.image}
        >
         <View style = {{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
         backgroundColor:'transparent'
        }}>
         
          <Text style={{color:'white',fontSize:30,marginTop:10,alignSelf:'center',fontWeight:'bold',textShadowColor:'black',textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 15,letterSpacing:2}}>Scan code inside window</Text>
  <View style={{borderColor:'white',
             borderRadius:10,
             borderWidth:5,
             backgroundColor:'rgba(0,0,0,0.6)'}}>
          <BarCodeScanner
            onBarCodeScanned = { isScanned ? undefined : this.handleBarCodeScanned }
            style = {{
              height:  600,
              width: 350
            }}
          >
          </BarCodeScanner>
          </View>
        </View>
        </ImageBackground>
      }
      else{
        return (
          <Text>LOADING</Text>
        );
      }
    }
  }
  const Appnav = createStackNavigator(
    {
      Scanner:Scanner,
      Decode:Decode
    },{
      headerMode:'none'
    }
  )
  export default createAppContainer(Appnav);
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
    Textinput1:{
      backgroundColor: 'rgba(0,0,0,0.6)',
      width:350,
      marginTop:20,
      color:"white",
     
      
    }
})