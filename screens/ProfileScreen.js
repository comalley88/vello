import React from 'react'
import { View, Text, StyleSheet} from 'react-native';
import {MenuItemButton} from '../components/menuButton'
import { Avatar } from 'react-native-paper';

export default function ProfileScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Hi Julien</Text>
                <Avatar.Image size={80} source={require('../assets/profile.jpg')}/>
            </View>
            <View style={styles.mainSection}>
                <Text style={styles.profileTitle}>Account Settings</Text>
                <MenuItemButton title='Personal information' name='person-outline' name2='chevron-forward-outline'/>
                <MenuItemButton title='Payment information' name='card-outline' name2='chevron-forward-outline'/>
                <MenuItemButton title='List your bicycle' name='bicycle-outline' name2='chevron-forward-outline' onPress={() => props.navigation.navigate('Listing')}/>
                <MenuItemButton title='Contact us' name='mail-outline' name2='chevron-forward-outline'/>
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
    mainSection: {
        flex: 4,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 30,
        paddingTop: 20 
    },
    profileTitle: {
        fontSize: 28,
        marginBottom: 30
    }
})