import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Mybutton from '@/components/Mybutton';
import { useRouter } from 'expo-router';

const Signup = () => {
  const router = useRouter();

  const onSignup = () => {
    // Handle signup logic here or navigate to the login page
    router.push('/(tabs)/login');
  };

  const onLogin = () => {
    // Navigate to the login page
    router.push('/(tabs)/login');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.heading}>Create Account</Text>

      {/* Form */}
      <TextInput
        style={styles.field}
        placeholder="Full Name"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.field}
        placeholder="Email Address"
        placeholderTextColor="#999"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.field}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
      />

      {/* Signup Button */}
      <View style={styles.buttonContainer}>
        <Mybutton title="Signup" onPress={onSignup} />
      </View>

      {/* Already have an account? */}
      <TouchableOpacity onPress={onLogin}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 35,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 40,
  },
  field: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#555',
    fontSize: 16,
  },
  loginLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default Signup;
