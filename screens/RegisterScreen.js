import React, {useState} from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { AppButton } from '../components/button';

export default function RegisterScreen(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerTitle}>Register</Text>
            </View>
            <View style={styles.main}>
            <TextInput style={styles.input} placeholder='enter your first name' onChangeText={(value) => setFirstName(value)}/>
            <TextInput style={styles.input} placeholder='enter your last name' onChangeText={(value) => setLastName(value)}/>
            <TextInput style={styles.input} keyboardType="email-address" placeholder='enter your email' onChangeText={(value) => setEmail(value)}/>
            <TextInput style={styles.input} secureTextEntry={true} placeholder='enter your password' onChangeText={(value) => setPassword(value)}/>
            <AppButton title='Register' onPress={() => props.navigation.navigate('BottomNavigator', {screen: 'Map'})}/>
            <Text style={styles.footer}>Already have an account? <Text onPress={() => props.navigation.navigate('Login')} style={styles.signinLink} >signin</Text></Text>
            </View>  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#004282'
    },
    header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 50,
      marginBottom: 30
    },
    headerTitle: {
      fontWeight: '700',
      color: '#F472B6',
      fontSize: 36
    },
    main: {
      paddingTop: 30,
      display: 'flex',
      flexDirection: 'column',
      flex: 3,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 30
    },
    input: {
        marginTop: 20,
        justifyContent: 'flex-start',
        width: 325,
        height: 50,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    signinLink: {
        fontWeight: '700',
        color: '#004282',
    },
    footer: {
        marginTop: 60,
        alignSelf: 'center'
    }
});