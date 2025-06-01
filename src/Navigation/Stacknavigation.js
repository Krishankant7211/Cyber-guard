import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native" ;
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeBottomNav from './HomeBottomNav';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Profile from '../Screens/Profile';
import Splash from '../Splash';
import App from '../../App';
import NewsViewer from '../NewsViewer';
import Search from '../Screens/Search';
import Fraud from '../Screens/Fraud';
import Aichat from '../Screens/Aichat';


const Stack = createNativeStackNavigator();

const Stacknavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} options={{headerShown : false}} />
            <Stack.Screen name='Register' component={Register} options={{headerShown : false}} />
            <Stack.Screen name='HomeBottomNav' component={HomeBottomNav} options={{headerShown : false}} />
            <Stack.Screen name="NewsViewer" component={NewsViewer}/>
            <Stack.Screen name='Fraud' component={Fraud} options={{headerShown : false}} />
            <Stack.Screen name='App' component={App} options={{headerShown : false}} />
            <Stack.Screen name='Search' component={Search} options={{headerShown : false}} />
            <Stack.Screen name='Profile' component={Profile} options={{headerShown : false}} />
            <Stack.Screen name='Aichat' component={Aichat} options={{headerShown : false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Stacknavigation

const styles = StyleSheet.create({})