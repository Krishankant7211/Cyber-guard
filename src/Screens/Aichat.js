import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Aichat = () => {
  return (
    <SafeAreaView style = {styles.Safecontener} > 
    <View>
        <Text>Hello how are you and what are you doing guys </Text>
    </View>
    
    </SafeAreaView>)
}

export default Aichat

const styles = StyleSheet.create({
    Safecontener : {
        flex :1 ,
        backfaceVisibility : '#fff',
        padding : 5,
      },
})