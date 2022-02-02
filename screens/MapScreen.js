import React, {useState, useEffect} from 'react'
import { View, TextInput, StyleSheet, ImageBackground, Text } from 'react-native'
import { Avatar } from 'react-native-paper';
import { AppButton } from '../components/button';
import { useDispatch, useSelector } from 'react-redux';
import { placeCoords } from '../features/coords';
import { GooglePlacesInput } from '../components/googlePlacesInput';

export default function MapScreen(props) {

    const token  = useSelector((state) => state.token.value)

    const coords  = useSelector((state) => state.coords.value)

    console.log('coords are', coords)
    
    return (
            <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Hi Julien</Text>
                <Avatar.Image size={80} source={require('../assets/profile.jpg')}/>
            </View>
            <ImageBackground source={require('../assets/search.jpg')} style={styles.main}>
            <View style={styles.searchContainer}>
            <GooglePlacesInput/>
            <AppButton title='search' onPress={props.navigation.navigate('Results')}/>
            </View>
            </ImageBackground>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#004282'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1, 
        marginHorizontal: 30, 
    },
    headerTitle: {
        fontSize: 36,
        color: "#FFFFFF",
        fontWeight: '400',
    },
    main: {
        flex: 4,
        backgroundColor: '#FFFFFF',
    },
    searchContainer: {
        height: '60%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});