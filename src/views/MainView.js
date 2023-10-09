import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react'

export default function MainView({navigation}) { 
    return ( 
        <View style={styles.container}> 
            <Text style={styles.paragraph}> Home Screen </Text> 
            <Button 
                title="Go to Home" 
                onPress={() => navigation.navigate('HomeScreen')} 
            /> 
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    paragraph: {

    }
});