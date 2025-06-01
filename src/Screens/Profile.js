import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React ,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import RNFS from "react-native-fs";
import ImageCropPicker from 'react-native-image-crop-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";


const localImage = require("../Assets/Profileimg.jpg");


const Profile = ({ navigation }) => {

  const [Email, setEmail] = useState('');
      const [Password, setPassword] = useState('');
      const [Name , setName ] = useState('');
      const [loading , setLoading] = useState('');
      const [selectedImage, setSelectedImage] = useState(null);

      // function to pick image from gallery and set it to imageview 
  const handleImagePress = async () => {
    try {
      const image = await ImageCropPicker.openPicker({
        width: 200,
        height: 200,
        cropping: true,
        includeBase64: true,
        mediaType: "photo",
      });
      const fileName = `${RNFS.DocumentDirectoryPath}/profile.jpg`;

// Save the cropped image to the file system
await RNFS.writeFile(fileName, image.data, 'base64');

      const fileExists = await RNFS.exists(fileName);
if (fileExists) {
  setSelectedImage(`file://${fileName}`);
} else {
  console.error("File not found at:", fileName);
}
      console.log("Cropped image saved:", fileName);
    } catch (error) {
      console.error("Error selecting and cropping image:", error);
    }
  };

// function to pick image from gallery and set it to imageview end here


// function to store the image , username and email in async storage  
const saveImagePath = async (imagePath) => {
  try {
    await AsyncStorage.setItem("profileImage", selectedImage);
  } catch (error) {
    console.error("Error saving image path:", error);
  }
};
// function to store the image , username and email in async storage end here


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
        
        <TouchableOpacity onPress={handleImagePress} style={{ marginBottom: 20 }}>
        <Image
          source={selectedImage ? { uri: selectedImage } : localImage}
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
          <Text style={{ color: 'white', fontSize: 20 }} onPress={()=>{updateUserDataInFirestore()
            saveImagePath()
            }}   >Save</Text>
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

