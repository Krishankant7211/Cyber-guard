import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Newsbg = require('../Assets/newsbg2.png');

const News = () => {
  return (
    
    <SafeAreaView  style = {styles.Safecontener} >
    <View style={{ flex: 1 }} >
      <ImageBackground source={Newsbg} resizeMode='cover' style={{ flex: 0.35 }}>

        <View style={{ flex: 1 , justifyContent: 'center',  }} >
          <Text style={{ fontWeight : '700' , flex : 0.3 , paddingLeft : 20 ,  fontSize: 20, color: '#000' , marginTop : 40 }} > CYBER NEWS </Text>
          <Text style={{   fontWeight : 'bold' , flex : 0.7 , fontSize: 32, color: '#000' , padding : 10 }} > Recent Frauds </Text>
        </View>

        


      </ImageBackground>


      <View style={{ flex: .55 , justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#000' }} >News </Text>
        <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 20, color: 'darkslateblue' }} > kya aap log news dekhte hain  </Text>
      </View>


    </View>
    </SafeAreaView>
    
  )
}

export default News

const styles = StyleSheet.create({
  Safecontener : {
    flex :1 ,
    backfaceVisibility : '#fff',
    padding : 5,
  }
})