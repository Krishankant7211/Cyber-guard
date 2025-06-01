import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React ,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



const localImage = require("../Assets/Profileimg.jpg");


const Profile = ({ navigation }) => {

  const [Email, setEmail] = useState('');
      const [Password, setPassword] = useState('');
      const [Name , setName ] = useState('');
      const [loading , setLoading] = useState('');
     

  const updateUserDataInFirestore = () => {
    setLoading(true);
        const user = auth().currentUser;
        const userData = {
            name: Name,
            email: Email,
            password : Password,
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
    }
    // update user data in firestore function end here





  return (
    <SafeAreaView style={styles.containerback}>
        // Header View with Profile Info

      <View style={styles.header}>
        <Text style={styles.headerText}>Manage Profile</Text>
      </View>


      <View style={styles.middleView}>
        
        <TouchableOpacity  style={{ marginBottom: 20 }}>
        <Image
          source={localImage}
          style={{ width: 140, height: 140, borderRadius: 70, elevation: 30 }}
        />
        </TouchableOpacity>

        <Text style={{
          paddingTop: 20,
          color: '#2F2F2F',
          fontSize: 20,
          fontWeight: 'semibold',
          fontFamily: 'inter',
        }}>Edit your profile</Text>
        <TextInput placeholder='Edit Name' value={Name} onChangeText={txt=> setName(txt)} style={styles.textinput} />
        <TextInput placeholder='Edit Email'value= {Email} onChangeText={txt=> setEmail(txt)}  style={styles.textinput} />
         {/* <TextInput placeholder='Update Password'value={Password} onChangeText={txt=> setPassword(txt)}  style={styles.textinput} /> */}

        <TouchableOpacity style={styles.pressablesavebtn}>
          <Text style={{ color: 'white', fontSize: 20 }} onPress={()=>{updateUserDataInFirestore()    }}   >Save</Text>
        </TouchableOpacity>


      </View>

    </SafeAreaView>

  )
};

export default Profile

const styles = StyleSheet.create({

  containerback: {
    flex: 1,
    backgroundColor: '#98C9ED',
  },
  header: {
    flex: 0.06,
    backgroundColor: '#98C9ED',
    paddingStart: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  textinput: {
    fontSize: 20,
    borderRadius: 20,
    borderWidth: 2,
    marginTop: 30,
    width: '90%',
    height: 50,
    paddingLeft: 20,
    backgroundColor: 'white',
    borderColor: 'white',

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

})

