import { Button, Image, StyleSheet, ImageBackground, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const localImage = require("../Assets/Profileimg.jpg");

const Setting = () => {
  return (
    <SafeAreaView style = {styles.Safecontener} >
    <View style={styles.container}>

    //This is for header View
      <View style={styles.Header}>
        <Image
          source={localImage} style={{ width: 160, height: 160, borderRadius: 80, elevation: 30, }} />
        <View style={{ width: 160, height: 160, justifyContent: 'center' }}>
          <Text style={styles.HeaderText}>Name</Text>
          <Text style={styles.HeaderText}>Email</Text>
        </View>
      </View>

    //This is for Bottom View
      <View style={styles.Botton}>
        <View style={styles.Box} />
        <View style={styles.Box} />
        <View style={styles.Box} />
      </View>

    </View>

    </SafeAreaView>


  )
};

export default Setting

const styles = StyleSheet.create({
  Safecontener : {
    flex :1 ,
    backfaceVisibility : '#fff',
    padding : 5,
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#E4DEDE'
  },
  Header: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 80,
    height: 290,
    width: '100%',
    backgroundColor: '#AB7983',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 30
  },
  HeaderText: {
    alignSelf: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: '600',
    justifyContent: 'space-evenly'
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
  Box: {
    margin: 30,
    width: '90%',
    height: 120,
    backgroundColor: '#AB7983',
    alignSelf: 'center',
    borderRadius: 40,
    elevation: 30
  },
})
