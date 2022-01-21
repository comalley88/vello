import React, { useState, useEffect } from 'react'
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


const MenuItemButton = ({ onPress, title, name, name2 }) => {
    return (
   <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
     <View style={styles.appButtonWrapper}>
       <View style={styles.appButtonWrapperIcons}>
         <Ionicons name={name} size={22} style={styles.appButtonIcon}/>
         <Text style={styles.appButtonText}>{title}</Text>
       </View>
       <View>
          <Ionicons name={name2} size={22} style={styles.appButtonIconEnd}/>
       </View>
     </View>
   </TouchableOpacity>
 );}

const styles = StyleSheet.create({
  appButtonText: {
    fontSize: 18,
    color: '#004282',
    alignSelf: "center",
    marginLeft: 10
    
},
  appButtonContainer: {
    alignSelf: 'center',
    justifyContent: "center",
    paddingHorizontal: 5,
    width: 350,
    height: 50,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5'
},
appButtonIcon: {
    color: '#E5E5E5',
    alignSelf: 'flex-start'
},
appButtonIconEnd: {
    color: '#F472B6',
    alignSelf: 'flex-end'
},
appButtonWrapper: {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
},
appButtonWrapperIcons: {
  display: 'flex',
  flexDirection: 'row',
}

});


export {MenuItemButton}