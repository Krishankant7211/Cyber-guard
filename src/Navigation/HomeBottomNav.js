import { StyleSheet, Text, View , Image, Settings } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import News from '../Screens/News';
import Setting from '../Screens/Setting';
import Events from '../Screens/Events';


const BottonTab = createBottomTabNavigator();

const HomeBottomNav = () => {
    return (
        <BottonTab.Navigator initialRouteName='Home' >
            <BottonTab.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    title : 'Home',
                    tabBarIcon : ({focused}) => (
                        <Image source={require ('../Assets/home.png')} style = {{height : 36 , width : 36 , tintColor : focused ? '#1e98d5' : 'lightgrey'  }} />
                    )
                }} />
                
            <BottonTab.Screen 
            name='Events' 
            component={Events} 
            options={{ headerShown: false , 
                title : 'Events',
                    tabBarIcon : ({focused}) => (
                        <Image source={require ('../Assets/chat.png')} style = {{height : 36 , width : 36 , tintColor : focused ? '#1e98d5' : 'lightgrey'  }} />
                    )
            }} />
            <BottonTab.Screen
                name='News'
                component={News}
                options={{
                    headerShown: false,
                    title : 'News',
                    tabBarIcon : ({focused}) => (
                        <Image source={require ('../Assets/news.png')} style = {{height : 36 , width : 36 , tintColor : focused ? '#1e98d5' : 'lightgrey'  }} />
                    )
                }} /> 
             <BottonTab.Screen
                name='Settings'
                component={Setting}
                options={{
                    headerShown: false,
                    title : 'Settings',
                    tabBarIcon : ({focused}) => (
                        <Image source={require ('../Assets/settings.png')} style = {{height : 36 , width : 36 , tintColor : focused ? '#1e98d5' : 'lightgrey'  }} />
                    )
                }} />
        </BottonTab.Navigator>
    )
}

export default HomeBottomNav

const styles = StyleSheet.create({})


