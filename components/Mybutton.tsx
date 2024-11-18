import {StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Mybutton = ({title, onPress}) => {
  return (
    <View>
      {/* <Text>Continue</Text> */}
      <TouchableOpacity activeOpacity={0.8} 
      style = {styles.button}
      onPress={onPress}
      >
      <Text style = {styles.text}>{title}</Text>
        </TouchableOpacity>
        </View>
  )
}

export default Mybutton;

const styles = StyleSheet.create({
    button:{
        backgroundColor: "orange", 
        paddingHorizontal:40,
         paddingVertical:15,
         borderRadius:10,
    },
    text:{
        fontSize:16, color:"white",fontWeight:'bold' 
    },

});