import { Button, Image, StyleSheet, ImageBackground, Text, View, TouchableOpacity } from 'react-native';
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
    <SafeAreaView style={styles.Safecontener}>
      <View style={styles.container}>
        {/* Header View with Profile Info */}
        <View style={styles.Header}>
          <Image
            source={localImage}
            style={{ width: 140, height: 140, borderRadius: 70, elevation: 30, margin: 10 }}
          />
          <View style={{ width: '100%', height: '20%', justifyContent: 'center', flex: 1 }}>
            <Text style={styles.HeaderText}>{userData.name}</Text>
            <Text style={styles.HeaderText}>{userData.email}</Text>
          </View>
        </View>

        {/* Buttons View */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {/* Profile button */}
          <TouchableOpacity
            style={styles.touchableopsbtn}
            onPress={() => {
              navigation.navigate('Profile'); // Assuming a Profile screen exists
            }}
          >
            <Text style={{ color: '#fff', fontSize: 20 }}>Manage Profile</Text>
          </TouchableOpacity>

          {/* Notification button */}
          <TouchableOpacity style={styles.touchableopsbtn}>
            <Text style={{ color: '#fff', fontSize: 20 }}>Notifications</Text>
          </TouchableOpacity>

          {/* Help and Support button */}
          <TouchableOpacity style={styles.touchableopsbtn}>
            <Text style={{ color: '#fff', fontSize: 20 }}>Help & Support</Text>
          </TouchableOpacity>

          {/* Share App button */}
          <TouchableOpacity style={styles.touchableopsbtn}>
            <Text style={{ color: '#fff', fontSize: 20 }}>Share App</Text>
          </TouchableOpacity>

          {/* Logout button */}
          <TouchableOpacity
            style={styles.touchableopsbtn}
            onPress={() => {
              auth().signOut().then(() => navigation.navigate('Login'));
            }}
          >
            <Text style={{ color: '#fff', fontSize: 20 }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  Safecontener: {
    flex: 1,
    paddingTop: 5,
    backfaceVisibility: 'hidden',
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  Header: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    width: '100%',
    backgroundColor: '#3a36a1',
    elevation: 30,
  },
  HeaderText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '400',
    paddingLeft: 20,
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
});