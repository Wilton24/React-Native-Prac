import { styled } from "nativewind";
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";


const SafeAreaView = styled(RNSafeAreaView)

const Subscriptions = () => {
    return (
        <SafeAreaView>
            <Text>Subscriptions</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Subscriptions;
