import React, {useState} from 'react'
import { View, TextInput, StyleSheet, ImageBackground, Text } from 'react-native'
import { Avatar } from 'react-native-paper';
import { AppButton } from '../components/button';

export default function MapScreen(props) {
    const [destination, setDestination] = useState('')


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Hi Julien</Text>
                <Avatar.Image size={80} source={require('../assets/profile.jpg')}/>
            </View>
            <ImageBackground source={require('../assets/search.jpg')} style={styles.main}>
            <TextInput style={styles.input} placeholder='where you going?' onChangeText={(value) => setDestination(value)}/>
            <AppButton title='search' onPress={() => props.navigation.navigate('Results')}/>
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
        backgroundColor: '#FFFFFF'
    },
    input: {
        alignSelf: 'center',
        marginTop: 120,
        justifyContent: 'flex-start',
        width: 325,
        height: 50,
        backgroundColor:'#FFFFFF',
        borderColor: '#E5E5E5',
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
});