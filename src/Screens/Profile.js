import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const localImage = require("../Assets/Profileimg.jpg");
const profilebg = require('../Assets/background1.png');

const Profile = ({ navigation }) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [loading, setLoading] = useState('');

  const updateUserDataInFirestore = () => {
    setLoading(true);
    const user = auth().currentUser;
    const userData = {
      name: Name,
      email: Email,
      password: Password,
      updatedAt: new Date(),
    };
    firestore()
      .collection('users')
      .doc(user.uid)
      .update(userData)
      .then(() => {
        console.log('User data updated in Firestore!');
      })
      .catch(error => {
        console.error(error);
      });
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.containerback}>
      <ImageBackground source={profilebg} style={styles.imageBackground}>
        <View style={styles.middleView}>
          <Image
            source={localImage}
            style={{ width: 140, height: 140, borderRadius: 70, elevation: 15,shadowColor:'#018AD8',shadowOpacity : 2  }}
          />
          <Text
            style={{
              paddingTop: 20,
              color: '#050171',
              fontSize: 20,
              fontWeight: 'semibold',
              fontFamily: 'inter',
            }}>
            Edit your profile
          </Text>
          <TextInput
            placeholder="Edit Name"
            value={Name}
            onChangeText={txt => setName(txt)}
            style={styles.textinput}
          />
          <TextInput
            placeholder="Edit Email"
            value={Email}
            onChangeText={txt => setEmail(txt)}
            style={styles.textinput}
          />
          <TextInput
            placeholder="Update Password"
            value={Password}
            onChangeText={txt => setPassword(txt)}
            style={styles.textinput}
          />
          <TouchableOpacity style={styles.pressablesavebtn} onPress={updateUserDataInFirestore}>
            <Text style={{ color: 'white', fontSize: 22,fontWeight:'semibold' }}>Save</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  containerback: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the entire screen
  },
  middleView: {
    flex: 0.94,
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textinput: {
    borderRadius:7,
    backgroundColor: '#F5F3F3',
    elevation: 5,
    shadowOpacity: 0.6,
    shadowColor: '#308CD7',
    fontSize: 20,
    marginTop: 30,
    width: '90%',
    height: 50,
    paddingLeft: 20,
  },
  pressablesavebtn: {
    height: 50,
    width: '90%',
    marginTop: 70,
    backgroundColor: '#050171',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});