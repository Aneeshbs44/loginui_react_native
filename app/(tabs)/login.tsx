import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const login = () => {
  return (
    <View>
      <Text>login</Text>
      <Text style = {styles.text}>Welcome to LOGIN</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    text:{
        fontSize:16, color:"black",fontWeight:'bold', textAlign:"center" 
    },

});

export default login