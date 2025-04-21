import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, Alert } from 'react-native'
import React , {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';


const Loginbg = require('../Assets/register.png');

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

      <View style={{ height: '60%', width: '90%', backgroundColor: 'wheat', borderRadius: 30, borderWidth: 1 , borderColor: 'white' , elevation : 30 }}  >


        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }} >
          <Text style={styles.text} > Login  </Text>
          <TextInput placeholder=' Email ' 
          value={Email}
          onChangeText={txt => setEmail(txt)}
          style={styles.textinput} />


          <TextInput placeholder=' Password '
           value={Password}
           onChangeText={txt => setPassword(txt)}
            style={styles.textinput} />


          <TouchableOpacity style={styles.touchableopsbtn} onPress = {LoginUser} >
            <Text style={{ color: '#fff' , fontSize : 20 }} > Login </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableopstext} onPress={() => { navigation.navigate('Register') }}  >
            <Text style={{ color: 'darkslateblue' }} > Don't have an account ? Register Here  </Text>
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
    padding : 5,
  },
  text: {
    fontSize: 40,
    color: 'black',
    marginBottom: 20,
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
    borderColor: 'white'
  },
  touchableopsbtn: {
    height: 50,
    width: '90%',
    marginTop: 30,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

  },
  touchableopstext: {
    height: 30,
    width: '90%',
    marginTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

  }
})





