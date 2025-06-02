import { StyleSheet, Text, View, TouchableOpacity,Image , TextInput, ImageBackground, Alert } from 'react-native'
import React , {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import GoogleLogin from './GoogleLogin';
//import { Image } from 'react-native-reanimated/lib/typescript/Animated';

const Loginbg = require('../Assets/background1.png');

const login = ({ navigation }) => {

   const [Email, setEmail] = useState('');
      const [Password, setPassword] = useState('');

// function to login user to main dashboard
const LoginUser = () => {
  auth().signInWithEmailAndPassword(Email,Password).then(() => {
    navigation.navigate('HomeBottomNav');
      // Alert.alert("user logged in");
    }
  ).catch(Error => {
    console.log(Error)
  });
  
}
// function to check if user is already logged in or not
const checkUser = () => {
  auth().onAuthStateChanged(user => {
    if (user) {
      navigation.navigate('HomeBottomNav');
    } else {
      console.log("User not logged in");
    }
  });
}
// Call checkUser function when the component mounts




  return (
    checkUser(),
    <SafeAreaView style = {styles.Safecontener} >
    <ImageBackground source={Loginbg} resizeMode='cover' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View style={{ height: '80%', width: '90%'}} >


        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }} >
          
          <Image source={require('../Assets/appLogo.jpg')} style={{ width: '90%', height: '25%', marginBottom: 20 }} />

          <Text style={styles.text} > LOGIN  </Text>

          <Text style={styles.text2} >Shielding Access With Every Login </Text>

          <TextInput placeholder=' Enter Email ID' 
          value={Email}
          onChangeText={txt => setEmail(txt)}
          style={styles.textinput} />

          <TextInput placeholder=' EnterPassword '
           value={Password}
           onChangeText={txt => setPassword(txt)}
            style={styles.textinput} />


          <TouchableOpacity style={styles.touchableopsbtn} onPress = {LoginUser} >
            <Text style={{ color: '#fff' , fontSize : 20,fontFamily: "Roboto Condensed" }} >Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableopstext} onPress={() => { navigation.navigate('Register') }}  >
            <Text style={{ color: 'darkslateblue',color:'#050171', fontSize:16,fontFamily: "Roboto Condensed"}} > Create New Account? Register Here  </Text>
          </TouchableOpacity>
          <GoogleLogin></GoogleLogin>
        </View>


      </View>

    </ImageBackground>
    </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({
  Safecontener : {
    flex :1 ,
    backfaceVisibility : '#fff',
    backgroundColor:'white',
  },
  text: {
    fontSize: 48,
    fontWeight: '700',
    color: 'black',
    fontFamily: 'Roboto Condensed'
  },
  text2: {
    fontSize: 18,
    fontWeight:400,
    color: '#050171',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 50,
    fontFamily: "Roboto Condensed"
  },
  textinput: {
    fontFamily: "Roboto Condensed",
    fontSize: 20,
    borderRadius:2,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    width: '92%',
    height: 60,
    paddingLeft: 20,
    marginTop:20,
  },
  touchableopsbtn: {
    borderRadius:2,
    height: 60,
    width: '92%',
    marginTop: 30,
    backgroundColor: '#050171',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  touchableopstext: {
    height: 36,
    width: '92%',
    marginTop: 30,
    alignItems:'flex-end',
    backgroundColor: '#fff',
    borderRadius: 20,

  }
})