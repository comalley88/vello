import React, { useState, useEffect } from 'react'
import {ImageBackground, Text, Button, StyleSheet, View, TouchableOpacity} from 'react-native'
import { AppButton } from '../components/button';

import AppLoading from 'expo-app-loading';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';



export default function HomeScreen(props) {

    let [fontsLoaded] = useFonts({
        Pacifico_400Regular,
      });

      let fontSize = 54;
      let color = '#F472B6'

      if (!fontsLoaded) {
        return <AppLoading />;
      } else {

    return (
        <ImageBackground source={require('../assets/landing.jpg')} style={styles.container}>
            <View style={styles.wrapper}>
            <Text style={styles.tagLine}><Text style={styles.colorPop}>Adventures</Text> on the road</Text>
            <View style={styles.circle}>
            <Text 
                  style={{
                    fontSize,
                    color,
                    fontFamily: 'Pacifico_400Regular',
                  }}>
                Vello</Text>
            </View>
            <AppButton title='Get Started' onPress={() => props.navigation.navigate('Register')}/>
            </View>
        </ImageBackground>
    )
}}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    tagLine: {
        alignSelf: 'flex-start',
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        width: 175
    },
    colorPop: {
        color: '#F472B6'
    },
    circle: {
        height: 200,
        width: 200,
        backgroundColor: '#004282',
        opacity: 0.9,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50
    },
    tagline: {
        textAlign: 'left'
    }
  });
