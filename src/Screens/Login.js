import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, Alert } from 'react-native'
import React , {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';


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




  return (
    <SafeAreaView style = {styles.Safecontener} >
    <ImageBackground source={Loginbg} resizeMode='cover' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View style={{ height: '80%', width: '90%'}} >


        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }} >\

          <Text style={styles.text} > LOGIN  </Text>

          <Text style={styles.text2} >Shielding Access With Every Login </Text>

          <TextInput placeholder=' Email ' 
          value={Email}
          onChangeText={txt => setEmail(txt)}
          style={styles.textinput} />

          <TextInput placeholder=' Password '
           value={Password}
           onChangeText={txt => setPassword(txt)}
            style={styles.textinput} />


          <TouchableOpacity style={styles.touchableopsbtn} onPress = {LoginUser} >
            <Text style={{ color: '#fff' , fontSize : 20 }} >Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableopstext} onPress={() => { navigation.navigate('Register') }}  >
            <Text style={{ color: 'darkslateblue',color:'#050171', fontSize:16}} > Create New Account? Register Here  </Text>
          </TouchableOpacity>
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
    backgroundColor:'white'
  },
  text: {
    fontSize: 48,
    fontWeight: '700',
    //fontWeight:700,
    color: 'black',
    fontFamily: 'Roboto'
  },
  text2: {
    fontSize: 18,
    fontWeight:400,
    color: '#050171',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 50,
    fontFamily: "Montserrat Regular"
  },
  textinput: {
    fontFamily: "Montserrat Regular",
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





