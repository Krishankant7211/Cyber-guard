import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


const bg = require('../Assets/homebg.png');
const Ban1 = require('../Assets/banner.png');
const Ban2 = require('../Assets/bann.jpg');
const Bottomview = require('../Assets/extrabg.png');

const Home = () => {
  return (
    <SafeAreaView style = {styles.Safecontener} >
    <ImageBackground source={Bottomview} resizeMode='cover' style={{ flex: 1 }}>
    // This is for header view
      <View style={styles.Header} >
        <Text style={styles.HeaderText} >
          Cyber Guard
        </Text>
      </View>

    // This is for banners
      <View>
        <Image source={Ban2} style={styles.Banner} />
      </View>


    // welcome text
      <View style={{ flex: .2, justifyContent: 'center ', alignItems: 'center', padding: 5, margin: 10, borderRadius: 40 , backgroundColor: '#3a36a1' , elevation : 30 }}  >
        <Text style={{ justifyContent: 'center', marginTop: 3, fontSize: 22, fontWeight: '700', color: 'white' }} > WELCOME </Text>
        <Text style={{ justifyContent: 'center', marginTop: 8, fontSize: 18, fontWeight: '600', color: 'white' }} > Stay cyber Healthy Stay Secure </Text>
      </View>






    // This is for the center title



      // Bottom design 
      <View style={{ flex: 1, borderTopLeftRadius: 25, marginTop : 10  ,  borderTopRightRadius: 25, height: "50%", alignItems: 'center', width: '90%', alignSelf: 'center', backgroundColor: '#eef4fb' , elevation : 20 }} >
      // Main Text

        <Text style={styles.CenterText}  > Trendings   </Text>

      // Box sections
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }} >

      // First view
          <View style={styles.Newsbg} >
            <Text style={styles.NewsText} > Windows Zero-Day Exploit: Russian Hackers Lead the Charge on Vulnerability Attacks . </Text>
          </View>

      // second view
          <View style={styles.Newsbg} >
            <Text style={styles.NewsText} > AI-Powered Cyber Attacks Surge, with China-Linked Threats on the Rise </Text>
          </View>

        </View>


      // second box sections
        // Box sections 
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} >

      // First view
          <View style={styles.Newsbg} >
            <Text style={styles.NewsText} > SparrowDoor Backdoor Linked to Chinese Cyber Espionage Operations </Text>
          </View>

      // second view
          <View style={styles.Newsbg} >
            <Text style={styles.NewsText} >U.S. Government Issues New Guidelines on Protecting Critical Infrastructure from Cyber Threats </Text>
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
  },
  Header: {
    flexDirection: 'row',
    paddingTop: 28,
    paddingLeft: 15,
    height: 70,
    width: '100%',
    borderColor: 'lavender',
    borderWidth: .2,
    backgroundColor: '#3a36a1',
    alignItems: 'center',
    justifyContent: 'center',
    elevation : 30 ,
  },
  HeaderText: {
    fontSize: 25,
    color: 'white',
    fontWeight: '600',
    flex: 1,
    justifyContent: 'center',

  },
  Banner: {
    width: '90%',
    height: 180,
    margin: 20,
    alignSelf: 'center',
    borderRadius: 10,
    shadowRadius: 20,
    shadowColor: 'darkblue',
    elevation : 30
  },
  CenterText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3a36a1',
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





