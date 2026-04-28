import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const { id } = useLocalSearchParams<{ id: string }>();

const Id = () => {
    return (
        <View>
            <Text>Subscription Details: {id}</Text>
            <Link href="/">Go to Homepage</Link>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Id;
