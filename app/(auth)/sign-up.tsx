import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';


const SignUp = () => {
    return (
        <View>
            <Link href="/(auth)/sign-up">Already have an account? Sign in</Link>
        </View>
    );
}

const styles = StyleSheet.create({})

export default SignUp;
