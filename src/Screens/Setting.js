import { Button, Image, StyleSheet, ImageBackground, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


const localImage = require("../Assets/Profileimg.jpg");

const Setting = ({navigation}) => {
  return (
  <SafeAreaView  style = {styles.Safecontener} >
    <View style={styles.container}>

    //This is for header View
      <View style={styles.Header}>
        
        <Image
          source={localImage} style={{ width: 140, height: 140, borderRadius: 70, elevation: 30,margin : 10 }} />
        <View style={{ width: "100%", height: '20%', justifyContent: 'center', flex : 1 }}>
          <Text style={styles.HeaderText}>Krishankant </Text>
          <Text style={styles.HeaderText}>Krishanasharma7211@gmail.com</Text>
        </View>
      </View>

    //This is for buttons 
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }} >
        //profile button
      <TouchableOpacity style={styles.touchableopsbtn} onPress={() => { navigation.navigate('Profile') }} >
        <Text style={{ color: '#fff' , fontSize : 20 }} >Manage Profile</Text>
      </TouchableOpacity>

      //Notification button
      <TouchableOpacity style={styles.touchableopsbtn} >
        <Text style={{ color: '#fff' , fontSize : 20 }} >Notifications</Text>
      </TouchableOpacity>

      //Help and support button
      <TouchableOpacity style={styles.touchableopsbtn} >
        <Text style={{ color: '#fff' , fontSize : 20 }} >Help & Support</Text>
      </TouchableOpacity>

      //share app button
      <TouchableOpacity style={styles.touchableopsbtn} >
        <Text style={{ color: '#fff' , fontSize : 20 }} >Share App</Text>
      </TouchableOpacity>

      //Logout button
      <TouchableOpacity style={styles.touchableopsbtn} >
        <Text style={{ color: '#fff' , fontSize : 20 }} onPress={() => { navigation.navigate('Login') }} >Logout</Text>
      </TouchableOpacity>



      </View>

    </View>
    </SafeAreaView>
  )
};

export default Setting

const styles = StyleSheet.create({
  Safecontener : {
    flex :1 ,
    paddingTop : 5,
    backfaceVisibility : 'hidden'
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: 'white'
  },
  Header: {
    padding : 10,
    justifyContent : 'center',
    alignItems : 'center',
    height:'40%' ,
    width: '100%',
    backgroundColor: '#3a36a1',
    elevation: 30
  },
  HeaderText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '400',
    paddingLeft : 20
  },
  Botton: {
    flex: 1,
    borderTopLeftRadius: 40,
    marginTop: 50,
    borderTopRightRadius: 40,
    width: '100%',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    backgroundColor: '#F1F0F0',
    elevation: 30,
  },
  touchableopsbtn: {
    height: 50,
    width: '90%',
    marginTop: 10,
    backgroundColor: '#3a36a1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

  },
})

