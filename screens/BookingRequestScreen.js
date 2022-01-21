import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image, Button } from 'react-native';
import { AppButton } from '../components/button';
import Ionicons from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function BookingRequestScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerTitle}>Request to book</Text>
            </View>
            <View style={styles.bookingWrapper}>
                <View style={styles.bikeDetailsCard}>
                    <Text style={styles.cardTitle}>Bike Details</Text>
                    <View style={styles.bikeDetailsCardContent}>
                        <View style={styles.bikeInfo}>
                            <Text style={styles.titleText}>Giant TCR SL 2</Text>
                            <Text style={styles.priceText}>€120</Text>
                        </View>
                        <Image style={styles.bikeImage} source={require('../assets/bicycle.jpg')}/>
                    </View>
                </View>
                <View style={styles.cardTripDetails}>
                    <Text style={styles.cardTitle}>Trip Details</Text>
                    <View style={styles.cardTripDetailsContent}>
                        <View style={styles.calendarCard}>
                            <TouchableOpacity style={styles.dateContainer}>
                                <View style={styles.dateInfo}>
                                    <Text style={styles.dateTitle}>Start Date</Text>
                                    <Text style={styles.dates}>10-01-2022</Text>
                                </View>
                                <Ionicons name='calendar-outline' size={25} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dateContainer}>
                                <View style={styles.dateInfo}>
                                    <Text style={styles.dateTitle}>End Date</Text>
                                    <Text style={styles.dates}>17-01-2022</Text>
                                </View>
                                <Ionicons name='calendar-outline' size={25} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.priceDetailsCard}>
                    <Text style={styles.cardTitle}>Price Details</Text>
                    <View style={styles.priceDetailsCardContent}>
                        <View style={styles.priceBreakdown}>
                            <Text>€20 x 5 nights </Text>
                            <Text>€120</Text>
                        </View>
                        <View style={styles.priceBreakdown}>
                            <Text style={styles.priceTotalTitle}>Total</Text>
                            <Text style={styles.priceTotalAmount}>€120</Text>
                        </View>
                    </View>
                </View>
                <AppButton title='request to book'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    header: {
        flex: 1,
        backgroundColor: '#004282',
        paddingHorizontal: 40,
        display: 'flex',
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    bookingWrapper: {
        flex: 4,
        paddingVertical: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    bikeDetailsCard: {
        display: 'flex',
        flexDirection: 'column',
        width: width*0.85,
        height: height*0.2,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: "#000000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        elevation: 2,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '700',
        borderBottomColor: '#F472B6',
        borderBottomWidth: 2,
    },
    bikeDetailsCardContent: {
        paddingTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
        paddingHorizontal: 20,
    },
    bikeImage: {
        resizeMode: 'cover',
        height: 80,
        width: 120
    },
    cardTripDetails: {
        paddingBottom: 25,
        width: width*0.85,
        height: height*0.25,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: "#000000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        elevation: 2,
    },
    cardTripDetailsContent: {
        paddingVertical: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendarCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        width: '100%',
        height: '100%',
        borderColor: '#E5E5E5',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    dateContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        width: '100%',
        height: 60,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        paddingVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    dateInfo: {
        display: 'flex',
        flexDirection: 'column',
    },
    dateTitle: {
        fontWeight: '700',
        fontSize: 14
    },
    priceDetailsCard: {
        width: width*0.85,
        height: height*0.15,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: "#000000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        elevation: 2,
    },
    priceDetailsCardContent: {
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    priceBreakdown: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    priceTotalTitle: {
        fontSize: 16,
        fontWeight: '700'
    },
    priceTotalAmount: {
        fontSize: 28,
        fontWeight: '700'
    },
    headerTitle: {
        fontSize: 36,
        color: "#FFFFFF",
    },


});
