import { Button, Image, StyleSheet, ImageBackground, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const localImage = require("../Assets/Profileimg.jpg");

const Setting = ({ navigation }) => {
  // State to hold user data
  const [userData, setUserData] = useState({
    name: 'Loading...',
    email: 'Loading...',
  });

  // Fetch user data from Firestore when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth().currentUser;
        if (user) {
          const documentSnapshot = await firestore()
            .collection('users')
            .doc(user.uid)
            .get();
          if (documentSnapshot.exists) {
            const data = documentSnapshot.data();
            // Update state with fetched data, including fallback values
            setUserData({
              name: data.name || 'Not set',
              email: data.email || 'Not set',
              joinedDate: data.joinedDate || 'N/A',
            });
          } else {
            console.log('No user data found!');
          }
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <SafeAreaView style={styles.containerback}>
            // Header View with Profile Info

      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>


      <View style={styles.middleView}>
        <Image
          source={localImage}
          style={{ width: 140, height: 140, shadowOpacity:6, shadowColor: '#308CD7' ,borderRadius: 70, elevation: 30 }}
        />

        <View style={{ width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{
            color: '#2F2F2F',
            fontSize: 20,
            fontWeight: 'semibold',
            fontFamily: 'inter',
          }}>{userData.name}</Text>
          <Text style={{
            color: '#2F2F2F',
            fontSize: 20,
            fontWeight: 'semibold',
            fontFamily: 'inter',
          }} >{userData.email}</Text>
        </View>

          <View style={{ width: '100%', height : "65%" ,justifyContent :"center",  alignItems: 'center', backgroundColor: "#D7F0FC" , borderTopLeftRadius: 30 , borderTopRightRadius: 30 , borderWidth: 6 , borderColor : "#fff" , elevation : 20 , shadowColor: '#000' }}>

        {/* Buttons View */}

        {/* Profile button */}
        <TouchableOpacity
          style={styles.pressablesbtn}
          onPress={() => {
            navigation.navigate('Profile'); // Assuming a Profile screen exists
          }}
        >
          <Text style={styles.btnText}>Manage Profile</Text>
        </TouchableOpacity>

        {/* Notification button */}
        <TouchableOpacity style={styles.pressablesbtn}>
          <Text style={styles.btnText}>Notifications</Text>
        </TouchableOpacity>

        {/* Help and Support button */}
        <TouchableOpacity style={styles.pressablesbtn}>
          <Text style={styles.btnText}>Help & Support</Text>
        </TouchableOpacity>

        {/* Share App button */}
        <TouchableOpacity style={styles.pressablesbtn}>
          <Text style={styles.btnText}>Share App</Text>
        </TouchableOpacity>

        {/* Logout button */}
        <TouchableOpacity
          style={styles.pressablesbtn}
          onPress={() => {
            auth().signOut().then(() => navigation.navigate('Login'));
          }}
        >
          <Text style={styles.btnText}>Logout</Text>
        </TouchableOpacity>

        </View>

      </View>


    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({

  containerback: {
    flex: 1,
    backgroundColor: '#d7f0fc',
  },
  header: {
    flex: 0.065,
    backgroundColor: '#d7f0fc',
    paddingStart: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnText: {
    color: '#308CD7',
    fontSize: 20,
    fontWeight: "600",
    fontFamily: 'calibri',
    padding: 5
  },

  headerText: {
    color: '#2F2F2F',
    fontSize: 36,
    fontWeight: 'semibold',
    fontFamily: 'inter',
  },
  middleView: {
    flex: 0.94,
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: 'center',
  },
  pressablesbtn: {
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 15,
    width: '90%',
    height: 50,
    paddingLeft: 20,
    backgroundColor: 'white',
    borderColor: 'white',
    elevation : 7 ,
    shadowOpacity:6, 
    shadowColor: '#308CD7'

  },
  pressablesavebtn: {
    height: 50,
    width: '90%',
    marginTop: 30,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

  },

});