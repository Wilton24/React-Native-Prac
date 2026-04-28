import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const SignIn = () => {
    return (
        <View>
            <Text>SignUp in the house of the Lord</Text>
            <Link href="/(auth)/sign-in">Don't have an account? Sign up</Link>
        </View>
    );
}

const styles = StyleSheet.create({})

export default SignIn;
