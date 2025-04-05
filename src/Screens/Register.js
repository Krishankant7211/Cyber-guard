import { StyleSheet, Text, View, TouchableOpacity, ImageBackground ,  TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


const Loginbg = require('../Assets/register.png');

const register = ({ navigation }) => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Name , setName ] = useState('');

    // function to create user on firebase
    
    // create user function end here 

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
                // createUser();
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




