import React, { useState, useEffect } from 'react'
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const OutlineButtonLarge = ({ onPress, title, name }) => {
     return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}<Ionicons name={name} size={20} style={styles.appButtonIcon}/></Text>
    </TouchableOpacity>
  );}

const OutlineButtonSmall = ({ onPress, title, name }) => {
    return (
   <TouchableOpacity onPress={onPress} style={styles.appButtonContainerSmall}>
     <View style={styles.appButtonWrapper}>
     <Ionicons name={name} size={20} style={styles.appButtonIcon}/>
     <Text style={styles.appButtonText}>{title}</Text>
     </View>
   </TouchableOpacity>
 );}

const styles = StyleSheet.create({
  appButtonText: {
    fontSize: 16,
    color: '#004282',
    alignSelf: "center",
    
},
  appButtonContainer: {
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: "center",
    paddingHorizontal: 10,
    width: 350,
    height: 40,
    backgroundColor: '#FFF',
    borderColor: '#004282',
    borderWidth: 1,
    borderRadius: 50,
},
appButtonContainerSmall: {
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
    justifyContent: "center",
    width: 160,
    height: 40,
    backgroundColor: '#FFF',
    borderColor: '#004282',
    borderWidth: 1,
    borderRadius: 50,
},
appButtonIcon: {
    color: '#004282'
},
appButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
}
});


export {OutlineButtonLarge, OutlineButtonSmall }