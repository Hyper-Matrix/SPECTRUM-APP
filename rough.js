

  







<Card
style={{margin:10,borderRadius:10,borderColor:'white',borderWidth:5}}>
  
 
  <Card.Cover source={require('./media/AuDu.jpg')} />
  <ImageBackground
    source={require('./media/moon.jpg')}
    style={styles.cardimage}>
  <Card.Content>
   
    <Title style={{color:'white',alignSelf:'center',fontSize:30,marginTop:5,letterSpacing:2,fontWeight:'bold',shadowColor:'black',textShadowRadius:13,textShadowOffset:{width:-1,height:1}}}>AuDu</Title>

  <View style={{borderWidth:1,borderColor:'white'}}/>      
  <Text style={{color:'white',alignSelf:'center',fontSize:20,marginVertical:7,fontWeight:'bold'}}>AuDu - Automatic Dustbin</Text>
  <Text style={{color:'white',textAlign:'justify',fontSize:15,fontWeight:'bold'}}>This is a automatic dustbin, which works using arduino and the phone's inbuilt gyroscope. This dustbin also contains a lid which can be automatically opened or closed when waste materials and brought near it.</Text>
 
  </Card.Content>
  <Card.Actions>
    <Button
    onPress={()=>Linking.getURL('https://github.com/Hyper-Matrix/AuDu-The-automatic-dustbin')}
    mode="contained"
    color="#00BCD4"
labelStyle={{color:"white",letterSpacing:3}}
style ={{margin:5, height:50,padding:8,width:350,borderRadius:30,marginTop:5,borderColor
:"black",borderWidth:3,padding:5} 
}>GET THE CODE</Button>
  </Card.Actions>
  </ImageBackground>
</Card>