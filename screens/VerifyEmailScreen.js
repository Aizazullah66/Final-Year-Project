import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';

export default function VerifyEmailScreen({ route }) {
  const { userData, uid } = route.params;
  const [verified, setVerified] = useState(false);
  const navigation = useNavigation();

  // Periodically check if email is verified
  useEffect(() => {
    const checkVerification = setInterval(async () => {
      await auth.currentUser.reload(); // Refresh user data
      if (auth.currentUser.emailVerified) {
        setVerified(true);
        clearInterval(checkVerification);
      }
    }, 2000); // Check every 2 seconds

    return () => clearInterval(checkVerification);
  }, []);

  const handleContinue = async () => {
    if (!auth.currentUser.emailVerified) {
      Alert.alert('Email Not Verified', 'Please verify your email before continuing.');
      return;
    }

    try {
      // Save all user data to Firestore after verification
      await addDoc(collection(db, 'users'), {
        uid,
        name: userData.name,
        email: userData.email,
        phone: `+${userData.callingCode}${userData.phone}`,
        countryCode: userData.countryCode,
        createdAt: new Date().toISOString(),
      });

      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error saving user data:', error);
      Alert.alert('Error', 'Failed to complete registration.');
    }
  };

  const handleResendEmail = async () => {
    try {
      await sendEmailVerification(auth.currentUser);
      Alert.alert('Email Resent', 'A new verification email has been sent.');
    } catch (error) {
      Alert.alert('Error', 'Failed to resend verification email.');
    }
  };

  return (
    <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Verify Your Email</Text>
        <Text style={styles.subtitle}>
          A verification email has been sent to {userData.email}. Please check your inbox (and spam/junk folder) and click the link to verify.
        </Text>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>
            Continue <Text style={styles.arrow}>→</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resendButton} onPress={handleResendEmail}>
          <Text style={styles.resendText}>Resend Verification Email</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentContainer: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#D1D1D1',
    marginBottom: 20,
    textAlign: 'center',
  },
  continueButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF5E9B',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  arrow: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  resendButton: {
    marginTop: 10,
  },
  resendText: {
    color: '#FF5E9B',
    fontSize: 14,
    fontWeight: '500',
  },
});