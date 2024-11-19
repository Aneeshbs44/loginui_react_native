import { View, Text } from 'react-native'
import React from 'react'
import Mybutton from '@/components/Mybutton'
import { useRouter } from 'expo-router'

const Signup = () => {
  const router = useRouter();
  const onSignup = () =>{
    router.push("/(tabs)/login");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Mybutton title={"Signup"} onPress={onSignup} />
    </View>
  )
}

export default Signup