import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
// home screen new branch

const homebg = require('../Assets/background1.png');
const homelogo = require('../Assets/finallogo.png');
const Ban2 = require('../Assets/homebanner.png');
const Bottomview = require('../Assets/extrabg.png');

const Home = () => {
  return (
    <SafeAreaView style = {styles.Safecontener} >
    <ImageBackground source={homebg} resizeMode='cover' style={{ flex: 1 }}>
    // This is for header view
      <View style>
        <Image source={homelogo} style={styles.Header} />
      </View>

    // This is for banners
      <View>
        <Image source={Ban2} style={styles.Banner} />
      </View>


    // welcome text
      <View style={{ flex: .2, justifyContent: 'center ', alignItems: 'center', padding: 5, margin: 20, borderRadius: 12 , backgroundColor: 'white' , elevation : 10 }}  >
        <Text style={{ justifyContent: 'center', marginTop: 3, fontSize: 22, fontWeight: '700', color: '#233FCC' }} > WELCOME </Text>
        <Text style={{ justifyContent: 'center', marginTop: 8, fontSize: 18, fontWeight: '600', color: 'black' }} > Think Before You Click </Text>
      </View>






    // This is for the center title



      // Bottom design 
      <View style={{ flex: 1, marginTop : 10  ,  height: "50%", alignItems: 'center', width: '100%', alignSelf: 'center', }} >
      // Main Text

        <Text style={styles.CenterText}  > Tip of the Day </Text>

      // Box sections
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }} >

      // First view
          <View style={styles.Newsbg} >
            <Text style={styles.NewsText} > AI Chatbot </Text>
          </View>

      // second view
          <View style={styles.Newsbg} >
            <Text style={styles.NewsText} > Games </Text>
          </View>

        </View>

      </View>


    </ImageBackground>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  Safecontener : {
    flex :1 ,
    backfaceVisibility : '#fff',
    paddingTop : "5%",
    backgroundColor:'white',
  },
  Header: {
    paddingTop: 25,
    paddingLeft: 15,
    height: 90,
    width: '100%',
    //alignSelf: 'center',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#3a36a1',
    elevation : 30 ,
  },
  Banner: {
    width: '95%',
    height: 180,
    margin: 10,
    alignSelf: 'center',
    borderRadius: 10,
    shadowRadius: 20,
    shadowColor: 'black',
    elevation : 10
  },
  CenterText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    flex: .4,
    justifyContent: 'center',
    paddingTop: 10,
    
  },
  NewsText: {
    fontSize: 15, color: 'black ', justifyContent: 'center', padding: 15
  },
  Newsbg: {
    width : '40%' ,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 8,
    borderColor: 'black' , 
    elevation : 20
  },
  Boxshadow : {
    shadowRadius : 2 ,
    shadowColor : 'black' ,
    shadowOffset : {height : 3 , width  : 3 } ,
    elevation : 10 ,
    shadowOpacity : .6 ,
  }

})





