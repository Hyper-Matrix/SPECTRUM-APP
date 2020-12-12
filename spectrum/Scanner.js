import React from 'react';
import { StyleSheet, Text, View,Dimensions,ImageBackground, Alert,ScrollView,Picker} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
import {firebaseConfig} from './config'
import { TextInput,Button } from 'react-native-paper';
import Autocomplete from 'react-native-autocomplete-input';
const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
import Home from './Home'
firebase.initializeApp(firebaseConfig);


class Decode extends React.Component{
   
  state={
    name:" ",
    regd:" ",
    component:" ",
    purpose:" ",
    mylist:[],
    value:[],
    Rvalue:[],
    textInput : [],
    component2:[]
    
  }
  componentDidMount(){
  const item =  firebase.database().ref("ArduinoConsumed");
  item.on("value",datasnap=>{
    //console.log(Object.values(datasnap.val()))
    this.setState({value:Object.values(datasnap.val())})
  })
  const item1 =  firebase.database().ref("RaspberryConsumed");
  item1.on("value",datasnap=>{
    //console.log(Object.values(datasnap.val()))
    this.setState({Rvalue:Object.values(datasnap.val())})
  })
  const item2 =  firebase.database().ref("components");
  item2.on("value",datasnap=>{
    //console.log(Object.values(datasnap.val()))
    this.setState({mylist:Object.values(datasnap.val())})
  })
  }
  saveitem(){
   
   const name =  firebase.database().ref("users");
   const arduino = firebase.database().ref("ArduinoConsumed")
   const raspberry = firebase.database().ref("RaspberryConsumed")
   const data = this.props.navigation.getParam("data", "NO-QR");
   const value1 = this.state.value
   const value2 = this.state.Rvalue
   const result = value1[0]+1
   const result1 = value2[0]+1
   //console.log(value1)
   name.push().set({
     name:this.state.name,
     regd:this.state.regd,
    priority:data,
    //component:this.state.component,
    purpose:this.state.purpose,
    time:Date.now(),
   component2:this.state.component2
   })
  
   if(this.state.component=="Arduino"){
    arduino.set({
      value:result
         })
   }
  else
     if(this.state.component=="Raspberry"){
      raspberry.set({
        Rvalue:result1
           })
     }
     var itm = this.state.component2.toString();
   Alert.alert("Name:"+this.state.name+"\n"+"Registration Number:"+this.state.regd+"\n"+"Purpose:"+this.state.purpose+"\n")
   this.setState({name:" "})
   this.setState({regd:" "})
   this.setState({component2:" "})
   this.setState({purpose:" "})
  
  }
  addTextInput = (key) => {
    let textInput = this.state.textInput;
    textInput.push(<Picker enabled={false} key={key}  style={{ backgroundColor: 'rgba(0,0,0,0.6)',
    width:350,
    color:"white",borderColor:"white",borderWidth:5}} selectedValue={this.state.component} mode="dropdown" >
  <Picker.Item label = "Select Required Component"/>
  
   
  {this.state.mylist.map(element =>
  <Picker.Item label={element.value} value={element.value} />
)}
  </Picker>   );
    this.setState({ textInput })
   
      this.state.component2.push(this.state.component)
  }
  removeTextInput = (key) => {
    let textInput = this.state.textInput;
    textInput.pop(<Picker enabled={false} key={key}  style={{ backgroundColor: 'rgba(0,0,0,0.6)',
    width:350,
    color:"white",borderColor:"white",borderWidth:5}} selectedValue={this.state.component} mode="dropdown" >
  <Picker.Item label = "Select Required Component"/>
  
   
  {this.state.mylist.map(element =>
  <Picker.Item label={element.value} value={element.value} />
)}
  </Picker>   );
    this.setState({ textInput })
   
      this.state.component2.pop(this.state.component)
  }
render(){
 
  
 console.log(this.state.component2)
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
      color:"white",borderColor:"white",borderWidth:5}} selectedValue={this.state.component} mode="dropdown" onValueChange={(itemValue, itemIndex) =>
        this.setState({component: itemValue})}>
    <Picker.Item label = "Select Required Component"/>
    
     
    {this.state.mylist.map(element =>
    <Picker.Item label={element.value} value={element.value} />
)}
    </Picker>   
    </View>
    <View style={{flexDirection:"row",marginLeft:10,marginRight:10}}>
    <Button  mode="contained" 
   onPress={() => this.addTextInput(this.state.textInput.length)}
color="#00BCD4"
labelStyle={{color:"white",letterSpacing:3}}
 style ={{margin:5, height:50,padding:8,borderRadius:30,opacity:0.7,borderColor
 :"black",borderWidth:3,padding:5,marginTop:22,width:150} }>
    ADD+
  </Button>
  <Button  mode="contained" 
   onPress={() => this.removeTextInput(this.state.textInput.length)}
color="red"
labelStyle={{color:"white",letterSpacing:3}}
 style ={{margin:5, height:50,padding:8,width:150,borderRadius:30,opacity:0.7,borderColor
 :"black",borderWidth:3,padding:5,marginTop:22} }>
    REMOVE-
  </Button>
      </View>
     
      <Text style={{color:'white',fontSize:20,alignSelf:'center',fontWeight:'bold',textShadowColor:'black',textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 15,letterSpacing:3}}>ADDED COMPONENTS</Text>
   {this.state.textInput.map((value, index) => {
          return value
        })}
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
        this.props.navigation.navigate('Home')
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
         <ScrollView>
          <Text style={{color:'white',fontSize:30,marginTop:10,alignSelf:'center',fontWeight:'bold',textShadowColor:'black',textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 15,letterSpacing:2}}>Scan code inside window</Text>
  <View style={{borderColor:'white',
             borderRadius:10,
             borderWidth:5,
             backgroundColor:'rgba(0,0,0,0.6)',
             flex: 1,
             flexDirection: 'column',
             justifyContent: 'center',
             alignItems: 'center',}
             }>
          <BarCodeScanner
            onBarCodeScanned = { isScanned ? undefined : this.handleBarCodeScanned }
            style = {{
              height:  600,
              width: 350
            }}
          >
          </BarCodeScanner>
          </View>
          </ScrollView>
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
      Decode:Decode,
      Home:{
        screen:()=><Home/>
      }
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
     
      
    },
    textInput: {
    height: 40,
    borderColor: 'black', 
    borderWidth: 1,
    margin: 20
  }
})