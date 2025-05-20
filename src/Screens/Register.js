import { StyleSheet, Text, View, TouchableOpacity, ImageBackground ,  TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const Loginbg = require('../Assets/register.png');

const register = ({ navigation }) => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Name , setName ] = useState('');

    // function to create user on firebase
    const createUser = () => {
        auth()
  .createUserWithEmailAndPassword(Email, Password)
  .then(() => {
    console.log('User account created & signed in!');
    sendVerificationEmail();
    addUserToFirestore();
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
        });
    }
    // create user function end here 


// function to send verification email
const sendVerificationEmail = () => {
    auth().currentUser.sendEmailVerification()
    .then(() => {
        console.log('Verification email sent!');
    })
    .catch(error => {
        console.error(error);
    });
}
    // send verification email function end here

    // function to send password reset email
const sendPasswordResetEmail = () => {
        auth().sendPasswordResetEmail(Email)
        .then(() => {
            console.log('Password reset email sent!');
        })
        .catch(error => {
            console.error(error);
        });
    }
    // send password reset email function end here

    // function to add user to firestore
const addUserToFirestore = () => {
        const user = auth().currentUser;
        const userData = {
            uid: user.uid,
            name: Name,
            email: Email,
            is_user : true,
            createdAt: new Date(),
        };
        firestore()
            .collection('users')
            .doc(user.uid)
            .set(userData)
            .then(() => {
                console.log('User added to Firestore!');
            })
            .catch(error => {
                console.error(error);
            });
    }
    // add user to firestore function end here

    // function to get user data from firestore
const getUserDataFromFirestore = () => {
        const user = auth().currentUser;
        firestore()
            .collection('users')
            .doc(user.uid)
            .get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    console.log('User data: ', documentSnapshot.data());
                } else {
                    console.log('No user data found!');
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
    // get user data from firestore function end here

    // function to update user data in firestore
const updateUserDataInFirestore = () => {
        const user = auth().currentUser;
        const userData = {
            name: Name,
            email: Email,
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
    }
    // update user data in firestore function end here
    


    return (
        <SafeAreaView style = {styles.Safecontener}   >
        <ImageBackground source={Loginbg} resizeMode='cover' style={{ flex: 1 , justifyContent : 'center' , alignItems : 'center' }}>

        <View  style = {{height : '60%' , width : '90%' , backgroundColor : 'wheat' , borderRadius : 30 , borderWidth : 1 , borderColor : 'white' , elevation : 30 }}  >

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} >
            <Text style={styles.text} > Register  </Text>
            <TextInput placeholder=' Name '
                value={Name}
                onChangeText={txt => setName(txt)}
                style={styles.textinput}
            />
            
            <TextInput placeholder=' Email '
                value={Email}
                onChangeText={txt => setEmail(txt)}
                style={styles.textinput}
            />


            <TextInput placeholder=' Password '
                value={Password}
                onChangeText={txt => setPassword(txt)}
                style={styles.textinput}
            />


            <TouchableOpacity style={styles.touchableopsbtn} onPress={() => { 
                createUser();
                navigation.navigate('Login') }}  >
                <Text style={{ color: '#fff' , fontSize : 20 }} > Register </Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={styles.touchableopstext} onPress={() => { 
                navigation.navigate('Login') }}  >
                <Text style={{ color: 'darkslateblue' }} > Already have an account? Login  </Text>
            </TouchableOpacity>
        </View>

        </View>

        </ImageBackground>

        </SafeAreaView>
    )
}

export default register

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
        borderWidth: .8,
        marginTop: 30,
        width: '90%',
        height: 50,
        paddingLeft: 20,
        backgroundColor : 'white',
        borderColor : 'white'
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




