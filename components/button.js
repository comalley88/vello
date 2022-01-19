import React, { useState, useEffect } from 'react'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'


const AppButton = ({ onPress, title }) => {
     return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );}

const styles = StyleSheet.create({
  appButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    alignSelf: "center",
    
},
  appButtonContainer: {
    marginTop: 40,
    alignSelf: 'center',
    justifyContent: "center",
    width: 275,
    height: 60,
    backgroundColor: '#004282',
    borderRadius: 50,
},
});

export {AppButton}