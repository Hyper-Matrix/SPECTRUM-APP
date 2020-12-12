import React,{Fragment} from 'react';
import { StyleSheet, Text, View,Dimensions,Animated,ScrollView,Image,ImageBackground, Linking} from 'react-native';
import {Video} from 'expo-av';
import { createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";
import styled from "styled-components/native";
import { TextInput,Button ,Title,Paragraph,Card} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get("window").width;
const xOffset = new Animated.Value(0);
const Screen = props => {
  return (
<View style={styles.scrollPage}>
<Animated.View style={[transitionAnimation(props.index)]}>
<Card
style={{margin:10,borderRadius:10,borderColor:'white',borderWidth:5,backgroundColor:'rgba(0,0,0,0.6)'}}>
<Card.Cover source={require('./media/AuDu.jpg')} />

<Card.Content>
<Title style={{color:'white',alignSelf:'center',fontSize:30,marginTop:5,letterSpacing:2,fontWeight:'bold',shadowColor:'black',textShadowRadius:13,textShadowOffset:{width:-1,height:1}}}>AuDu</Title>
<View style={{borderWidth:1,borderColor:'white'}}/>      
<Text style={{color:'white',alignSelf:'center',fontSize:20,marginVertical:7,fontWeight:'bold'}}>AuDu - Automatic Dustbin</Text>
<Text style={{color:'white',textAlign:'justify',fontSize:15,fontWeight:'bold'}}>This is a automatic dustbin, which works using arduino and the phone's inbuilt gyroscope. This dustbin also contains a lid which can be automatically opened or closed when waste materials and brought near it.</Text>
</Card.Content>

<Card.Actions>
  
<Button
onPress={()=>Linking.openURL('https://github.com/Hyper-Matrix/AuDu-The-automatic-dustbin')}
mode="contained"
color="#00BCD4"
labelStyle={{color:"white",letterSpacing:3}}
style ={{margin:5, height:50,padding:8,width:300,borderRadius:30,marginTop:5,borderColor
:"black",borderWidth:3,padding:5,alignSelf:'flex-end'} 
}>GET THE CODE</Button>

</Card.Actions>

</Card>
</Animated.View>
</View>
);
};
const Screen1 = props => {
  return (
    <View style={styles.scrollPage}>
      <Animated.View style={[ transitionAnimation(props.index)]}>
      <Card
style={{margin:10,borderRadius:10,borderColor:'white',borderWidth:5,backgroundColor:'rgba(0,0,0,0.6)'}}>
  
 
  <Card.Cover source={require('./media/fire.jpg')} />
  
  <Card.Content>
   
    <Title style={{color:'white',alignSelf:'center',fontSize:30,marginTop:5,letterSpacing:2,fontWeight:'bold',shadowColor:'black',textShadowRadius:13,textShadowOffset:{width:-1,height:1},textAlign:'center'}}>Fire Emergency System</Title>

  <View style={{borderWidth:1,borderColor:'white'}}/>      

  <Text style={{color:'white',textAlign:'justify',fontSize:15,fontWeight:'bold'}}>Fires in general are a big problem and risk to life. Having a device which can point the location of fire and alarm the officials of it.Our fire emergency system helps to cure this problem.
</Text>
 
  </Card.Content>
  <Card.Actions>
    <Button
    onPress={()=>Linking.openURL('https://spectrumcet.com/First_project.html')}
    mode="contained"
    color="#00BCD4"
labelStyle={{color:"white",letterSpacing:3}}
style ={{margin:5, height:50,padding:8,width:300,borderRadius:30,marginTop:5,borderColor
:"black",borderWidth:3,padding:5,alignSelf:'center'} 
}>GET THE CODE</Button>
  </Card.Actions>

</Card>
      </Animated.View>
    </View>
  );
};
const Screen2 = props => {
  return (
    <View style={styles.scrollPage}>
      <Animated.View style={[ transitionAnimation(props.index)]}>
      <Card
style={{margin:10,borderRadius:10,borderColor:'white',borderWidth:5,backgroundColor:'rgba(0,0,0,0.6)'}}>
  
 
  <Card.Cover source={require('./media/yt.jpg')} />
 
  <Card.Content>
   
    <Title style={{color:'white',alignSelf:'center',fontSize:30,marginTop:5,letterSpacing:2,fontWeight:'bold',shadowColor:'black',textShadowRadius:13,textShadowOffset:{width:-1,height:1}}}>YoPlaDo</Title>

  <View style={{borderWidth:1,borderColor:'white'}}/>      
  <Text style={{color:'white',alignSelf:'center',fontSize:19,marginVertical:7,fontWeight:'bold'}}>YoPlaDo-Youtube-Playlist-Downloader</Text>
  <Text style={{color:'white',textAlign:'justify',fontSize:15,fontWeight:'bold'}}>A simple python program to download Youtube Playlist at once.Project is a simple combination of Web Scrapping and Youtube-Downloading.Our approach enables the user be able to download youtube videos in a playlist at one go.</Text>
 
  </Card.Content>
  <Card.Actions>
    <Button
    onPress={()=>Linking.openURL('https://github.com/Dstri26/YoPlaDo-Youtube-Playlist-Downloader')}
    mode="contained"
    color="#00BCD4"
labelStyle={{color:"white",letterSpacing:3}}
style ={{margin:5, height:50,padding:8,width:300,borderRadius:30,marginTop:5,borderColor
:"black",borderWidth:3,padding:5,alignSelf:'center'} 
}>GET THE CODE</Button>
  </Card.Actions>
  
</Card>
      </Animated.View>
    </View>
  );
};
const Screen3 = props => {
  return (
    <View style={styles.scrollPage}>
      <Animated.View style={[ transitionAnimation(props.index)]}>
      <Card
style={{margin:10,borderRadius:10,borderColor:'white',borderWidth:5,backgroundColor:'rgba(0,0,0,0.6)'}}>
  
 
  <Card.Cover source={require('./media/sis.jpg')}  />
 
  <Card.Content>
   
    <Title style={{color:'white',alignSelf:'center',fontSize:30,marginTop:5,letterSpacing:2,fontWeight:'bold',shadowColor:'black',textShadowRadius:13,textShadowOffset:{width:-1,height:1}}}>S.I.S</Title>

  <View style={{borderWidth:1,borderColor:'white'}}/>      
  <Text style={{color:'white',alignSelf:'center',fontSize:19,marginVertical:7,fontWeight:'bold'}}>S.I.S - Smart Irrigation System</Text>
  <Text style={{color:'white',textAlign:'justify',fontSize:15,fontWeight:'bold'}}>This project proposes an intelligent Irrigation system which describes how irrigation can be handled smartly using IOT. The objective of this system is to detect the moisture content of the soil and depending on it sprinkle water.</Text>
 
  </Card.Content>
  <Card.Actions>
    <Button
    onPress={()=>Linking.openURL('https://spectrumcet.com/third_project.html')}
    mode="contained"
    color="#00BCD4"
labelStyle={{color:"white",letterSpacing:3}}
style ={{margin:5, height:50,padding:8,width:300,borderRadius:30,borderColor
:"black",borderWidth:3,padding:5,alignSelf:'center',marginTop:5} 
}>GET THE CODE</Button>
  </Card.Actions>
 
</Card>
      </Animated.View>
    </View>
  );
};
const Screen4 = props => {
  return (
    <View style={styles.scrollPage}>
      <Animated.View style={[ transitionAnimation(props.index)]}>
      <Card
style={{margin:10,borderRadius:10,borderColor:'white',borderWidth:5,backgroundColor:'rgba(0,0,0,0.6)'}}>
  
 
  <Card.Cover source={require('./media/breast_cancer.png')}  />
  
  <Card.Content>
   
    <Title style={{color:'white',alignSelf:'center',fontSize:15,marginTop:5,letterSpacing:2,fontWeight:'bold',shadowColor:'black',textShadowRadius:13,textShadowOffset:{width:-1,height:1},textAlign:'center'}}>NEURON MODEL FOR BREAST CANCER CLASSIFICATION(MALIGN/BENIGN)</Title>

  <View style={{borderWidth:1,borderColor:'white'}}/>      

  <Text style={{color:'white',textAlign:'justify',fontSize:15,fontWeight:'bold'}}>A MP Neuron model to classify breast cancer as malign or benign as per given data.This is a simple McCulloch-Pitts Neuron Model for testing whether a breast cancer is malignant or benign by checking it's features such as radius, texture, area, etc.
</Text>
 
  </Card.Content>
  <Card.Actions>
    <Button
    onPress={()=>Linking.openURL('https://github.com/C3Suryansu/CNN-using-CIFAR10')}
    mode="contained"
    color="#00BCD4"
labelStyle={{color:"white",letterSpacing:3}}
style ={{margin:5, height:50,padding:8,width:300,borderRadius:30,borderColor
:"black",borderWidth:3,padding:5,alignSelf:'center',marginTop:5} 
}>GET THE CODE</Button>
  </Card.Actions>
  
</Card>
      </Animated.View>
    </View>
  );
};
const Screen5 = props => {
return (
<View style={styles.scrollPage}>
<Animated.View style={[ transitionAnimation(props.index)]}>
<Card
style={{margin:10,borderRadius:10,borderColor:'white',borderWidth:5,backgroundColor:'rgba(0,0,0,0.6)'}}>
<Card.Cover source={require('./media/cifar.png')}  />

<Card.Content>
<Title style={{color:'white',alignSelf:'center',fontSize:15,marginTop:5,letterSpacing:2,fontWeight:'bold',shadowColor:'black',textShadowRadius:13,textShadowOffset:{width:-1,height:1}}}>CIFAR 10 IMAGE CLASSIFICATION USING CNN</Title>
<View style={{borderWidth:1,borderColor:'white'}}/>      
<Text style={{color:'white',textAlign:'justify',fontSize:15,fontWeight:'bold'}}>A multi class-classification using PyTorch and GPU Cuda support, and using CNN for this purpose.A CNN model using CNN as well as using PyTorch's sequential and inbuilt modules, to build a image classifier on CIFAR 10 dataset. </Text>
</Card.Content>
<Card.Actions>
<Button
onPress={()=>Linking.openURL('https://spectrumcet.com/third_project.html')}
mode="contained"
color="#00BCD4"
labelStyle={{color:"white",letterSpacing:3}}
style ={{margin:5, height:50,padding:8,width:300,borderRadius:30,borderColor
:"black",borderWidth:3,padding:5,alignSelf:'center',marginTop:5} 
}>GET THE CODE</Button>
</Card.Actions>

</Card>
</Animated.View>
</View>
);
};
const transitionAnimation = index => {
  return {
    transform: [
      { perspective: 800 },
      {
        scale: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: [0.25, 1, 0.25]
        })
      },
      {
        rotateX: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: ["45deg", "0deg", "45deg"]
        })
      },
      {
        rotateY: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: ["-45deg", "0deg", "45deg"]
        })
      }
    ]
  };
};
export default  class Projects extends React.Component {
    render() {
      return (
        <ImageBackground
        source={require('./media/homeback.jpg')}
        style={styles.image}
        >
        <View style={styles.container}>
       
          <Text style={{color:'white',fontSize:30,marginTop:10,alignSelf:'center',fontWeight:'bold',textShadowColor:'black',textShadowOffset: {width: -1, height: 1},
textShadowRadius: 15,letterSpacing:3}}>PROJECTS</Text>
  <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: xOffset } } }],
          { useNativeDriver: true }
        )}
        horizontal
        pagingEnabled
        style={styles.scrollView}
        indicatorStyle={{color:'white'}}
        
      >
        <Screen  index={0} />
        <Screen1 index={1} />
        <Screen2  index={2} />
        <Screen3  index={3} />
        <Screen4  index={4} />
        <Screen5  index={5} />
      </Animated.ScrollView>
     
        </View>
        </ImageBackground>
       
      );
    }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      
    },
    image:{
      flex:1,
      resizeMode: "cover",
      
      
    },
    cardimage:{
   
      resizeMode:'stretch',
     height:322,
     
    }, scrollView: {
      flexDirection: "row",
      
    },
    scrollPage: {
      width: SCREEN_WIDTH,
      padding: 20,
      
    },
    screen: {
      height: 600,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
      backgroundColor: "white"
    },
    text: {
      fontSize: 45,
      fontWeight: "bold"
    }
})