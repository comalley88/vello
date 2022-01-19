import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Stars = () =>  {
    let rating = 4.1;
    let stars = [];

    for (let i = 1; i <=5 ; i++) {
        let name = 'ios-star';
        if (i>rating) {
            name = 'ios-star-outline';
            
        }
        stars.push(<Ionicons name={name} size={15} style={styles.star} key={i} />)
    }

    return (
        <View style={styles.container}>
            {stars}
        </View>
    )
}

export {Stars}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	star: {
		color: '#FF8C00'
	},
});
