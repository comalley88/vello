import React, {useState} from 'react'
import { View, StyleSheet, ImageBackground, Text, Dimensions, ScrollView, Image } from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import {Stars} from '../components/stars';


export default function ResultsScreen(props) {

return (
  <View style={styles.container}>
    <View style={styles.main}>
      <MapView style={styles.map}
      initialRegion={{
      latitude: 43.2965,
      longitude: 5.3698,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      }}
        >
      <Marker coordinate={{ latitude : 43.2965 , longitude : 5.3698 }}
      image={require('../assets/bicyclepoint.png')}
      />
      </MapView>
    </View>
    
    <ScrollView style={styles.scroll}  horizontal>
      <View style={styles.card}>
        <Image resizeMode='cover' source={require('../assets/bicycle.jpg')} style={styles.cardImage}/>
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>Hey this ius a bike</Text>
          <Stars/>
          <View style={styles.cardTotal}>
          <Text>Total Price</Text><Text style={styles.cardTotalPrice}>€120</Text>
          </View>  
        </View>
      </View>
            <View style={styles.card}/>
            <View style={styles.card}/>
    </ScrollView>
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 15,
    },
    main: {
        flex: 2,
        backgroundColor: '#FFFFFF',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    card: {
        alignSelf: 'flex-end',
        width: 210,
        height: 180,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 10,
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        elevation: 2,
    },
    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    cardContainer: {
        marginHorizontal: 10,
        marginVertical: 5
    },
    cardTotal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardTitle: {
        fontWeight: '700',
        fontSize: 16
    },
    cardTotalPrice: {
        fontSize: 18,
        fontWeight: '700'
    }, 
    resultWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 3,
        height: 100,
        backgroundColor: "#FFF",
        borderRadius: 10,
        shadowColor: "#000000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        elevation: 2,
        marginBottom: 20,
        padding: 15
    }
});