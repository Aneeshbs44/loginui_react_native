import { View, Text, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import React from 'react';
import Mybutton from '@/components/Mybutton';
import { useRouter } from 'expo-router';

// Get screen height globally
const { height: screenHeight } = Dimensions.get('window');

const Login = () => {
  const router = useRouter();

  const onLogin = () => {
    router.push('/(tabs)/signup');
  };

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={require('@/assets/images/login.jpg')}
        style={[styles.image, { height: screenHeight / 2 }]}
        resizeMode="cover"
      />

      {/* Content */}
      <View style={styles.content}>
        {/* Heading */}
        <Text style={styles.heading}>Login</Text>

        {/* Text Input */}
        <TextInput
          style={styles.field}
          placeholder="Enter your Email"
          placeholderTextColor="#999"
        />

        {/* Button */}
        <View style={styles.buttonContainer}>
          <Mybutton title="Login" onPress={onLogin} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1, // Place it behind the text
  },
  content: {
    flex: 1,
    marginTop: screenHeight / 3, // Push content below the image
    paddingHorizontal: 20,
    zIndex: 2, // Ensure content is above the image
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 80,
    top: 0,
  },
  field: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Login;
