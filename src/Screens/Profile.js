import { StyleSheet, Text, View,TextInput, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


const localImage = require("../Assets/Profileimg.jpg");

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.safeview} >
    <View style={styles.container}>

      // This is for profile photo 
      <Pressable   style = {{justifyContent : 'center' , alignItems : 'center' ,  }}>
        <Image source={localImage} style = {{height :160 , width :160 ,borderRadius : 80 ,marginBlockStart : 80 }} />
      </Pressable>

      // This is for name , email and save Button
      <View style = {{alignItems :'center'}} >
        // for editing the name 
      <TextInput placeholder='Edit Name ' style={styles.textinput} />
// for editing the emmail
      <TextInput placeholder='Edit Email ' style={styles.textinput} />

// for saving the changes 
      <Pressable style = {styles.pressablesavebtn} onPress={() => { navigation.navigate('HomeBottomNav') }} >
      <Text  style={{ color: '#fff' , fontSize : 20 }} >Save</Text>
      </Pressable>

      </View>

    </View>

    </SafeAreaView>
  )
};

export default Profile

const styles = StyleSheet.create({
  safeview : {
    flex : 1 ,
    paddingTop : "8%" ,
    backgroundColor : 'white'
  }  ,
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#6749CA'
  },
  textinput: {
    fontSize: 20,
    borderRadius: 20,
    borderWidth: 2,
    marginTop: 30,
    width: '90%',
    height: 50,
    paddingLeft: 20,
    backgroundColor: 'white',
    borderColor: 'white',
    
  },
  pressablesavebtn : {
    height: 50,
    width: '90%',
    marginTop: 30,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

  },
  
})

