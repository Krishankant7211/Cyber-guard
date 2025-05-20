
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Stacknavigation from './src/Navigation/Stacknavigation';
import Profile from './src/Screens/Profile';
import Setting from './src/Screens/Setting';
import Aichat from './src/Screens/Aichat';
import HomeBottomNav from './src/Navigation/HomeBottomNav';

const App = () => {
  return (
    <Stacknavigation />
  );
}

export default App

const styles = StyleSheet.create({})