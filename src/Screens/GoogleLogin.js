import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { GoogleAuthProvider, getAuth, signInWithCredential } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import PropTypes from 'prop-types';

const GoogleLogin = ({ navigation }) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '493050487438-7dht0djg8ulfkdilk95t5qbjjp9bg9e0.apps.googleusercontent.com',
      offlineAccess: false, // Set to true if you need a refresh token
    });
  }, []);

  const onGoogleSignin = async () => {
    try {
      // Check if Google Play Services are available
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      // Sign in with Google
      const { idToken } = await GoogleSignin.signIn();

      if (!idToken) {
        throw new Error('No ID token returned from Google Sign-In');
      }

      // Create a Google credential with the token
      const googleCredential = GoogleAuthProvider.credential(idToken);

      // Sign in with Firebase
      await signInWithCredential(getAuth(), googleCredential);
      console.log('Successfully signed in with Google!');

      // Navigate to the dashboard
      if (navigation) {
        navigation.navigate('HomeBottomNav');
      } else {
        console.error('Navigation prop is undefined');
        Alert.alert('Error', 'Navigation is not available.');
      }
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      let errorMessage = 'An error occurred during Google Sign-In. Please try again.';
      
      // Provide specific error messages for common issues
      if (error.code === 'SIGN_IN_CANCELLED') {
        errorMessage = 'Sign-in was cancelled.';
      } else if (error.code === 'PLAY_SERVICES_NOT_AVAILABLE') {
        errorMessage = 'Google Play Services are not available on this device.';
      }

      Alert.alert('Sign-In Error', errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Sign in with Google" onPress={onGoogleSignin} />
    </View>
  );
};

// Prop validation
GoogleLogin.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

export default GoogleLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
