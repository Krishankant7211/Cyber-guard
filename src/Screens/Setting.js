import { Image, StyleSheet, ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AntDesign from 'react-native-vector-icons/AntDesign';

const localImage = require("../Assets/Profileimg.jpg");
const Settingbg = require('../Assets/background1.png');
const forwardImage = require('../Assets/fastforward.png');

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
      {/* Background Image */}
      <ImageBackground source={Settingbg} resizeMode='cover' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* Profile Info View */}
        <View style={styles.middleView}>
          <Image
            source={localImage}
            style={{marginBottom: 2,width: 140,height: 140,shadowOpacity: 0.6,shadowColor: '#308CD7',borderRadius: 70,elevation: 30,}}
          />
          <Text
            style={{color: '#2F2F2F',fontSize: 35,fontWeight: 'semibold',fontFamily: 'Roboto condensed',}}
          >
            {userData.name}
          </Text>
          <Text
            style={{color: '#2F2F2F',fontSize: 16,fontWeight: '600',fontFamily: 'Roboto condensed',
            }}
          >
            {userData.email}
          </Text>
        </View>

        {/* Buttons Container */}
        <View style={{ width: '100%', height: '60%', alignItems: 'center' }}>
          {/* Manage Profile Button */}
          <TouchableOpacity
            style={styles.pressablesbtn}
            onPress={() => navigation.navigate('Profile')}
          >
            <AntDesign name="user" size={28} color="black" style={styles.icon} />
            <Text style={styles.btnText}>Manage Profile</Text>
            <AntDesign name="right" size={24} color="#B8B8B8" style={styles.arrow} />
          </TouchableOpacity>

          {/* Notification Button */}
          <TouchableOpacity style={styles.pressablesbtn}>
            <AntDesign name="setting" size={28} color="black" style={styles.icon} />
            <Text style={styles.btnText}>Notifications</Text>
            <AntDesign name="right" size={24} color="#B8B8B8" style={styles.arrow} />
          </TouchableOpacity>

          {/* Help and Support Button */}
          <TouchableOpacity style={styles.pressablesbtn}>
            <AntDesign name="questioncircleo" size={28} color="black" style={styles.icon} />
            <Text style={styles.btnText}>Help & Support</Text>
            <AntDesign name="right" size={24} color="#B8B8B8" style={styles.arrow} />
          </TouchableOpacity>

          {/* Share App Button */}
          <TouchableOpacity style={styles.pressablesbtn}>
            <AntDesign name="sharealt" size={28} color="black" style={styles.icon} />
            <Text style={styles.btnText}>Share App</Text>
            <AntDesign name="right" size={24} color="#B8B8B8" style={styles.arrow} />
          </TouchableOpacity>

          {/* Logout Button */}
          <TouchableOpacity
            style={styles.pressablesbtn}
            onPress={() => {
              auth().signOut().then(() => navigation.navigate('Login'));
            }}
          >
            <AntDesign name="poweroff" size={28} color="black" style={styles.icon} />
            <Text style={styles.btnText}>Logout</Text>
            <AntDesign name="right" size={24} color="#B8B8B8" style={styles.arrow} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  containerback: {
    flex: 1,
  },
  /*header: {
    flex: 0.065,
    backgroundColor: '#d7f0fc',
    paddingStart: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
   headerText: {
    color: '#2F2F2F',
    fontSize: 36,
    alignSelf: 'flex-start',
    fontWeight: '600',
    fontFamily: 'inter',
  },*/
  btnText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'calibri',
    flex: 1, // Take remaining space between icon and arrow
    textAlign: 'left', // Align text to the left within its flex space
  },
  middleView: {
    flex: 0.94,
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pressablesbtn: {
    marginTop: 15,
    width: '90%',
    height: 50,
    borderRadius:7,
    backgroundColor: '#F5F3F3',
    elevation: 5,
    shadowOpacity: 0.6,
    shadowColor: '#308CD7',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15, // Add padding to the sides for better spacing
  },
  /*pressablesavebtn: {
    height: 50,
    width: '90%',
    marginTop: 30,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },*/
  icon: {
    marginRight: 15, // Space between icon and text
  },
  arrow: {
    marginLeft: 15, // Space between text and arrow
  },
});