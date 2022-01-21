import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { AppButton } from '../components/button';
import { Stars } from '../components/stars';
import { Avatar } from 'react-native-paper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function ProductDetailScreen(props) {

    return (
        <View style={styles.container}>
            <View style={styles.listingWrapper}>
                <Image style={styles.image} source={require('../assets/bicycle.jpg')}/>
                <View style={styles.listingSection}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Giant TCR SL-2</Text>
                        <View style={styles.features}>
                            {/**badges */}
                        </View>
                        <View style={styles.reviews}>
                        <Stars/><Text style={styles.cardTitle}>€120</Text>
                        </View>
                        <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  </Text>
                    </View>
                    <View style={styles.cardOwner}>
                        <Avatar.Image size={50} source={require('../assets/profile.jpg')}/>
                        <View style={styles.ownerInfo}>
                            <Text style={styles.cardOwnerTitle}>Owner</Text>
                            <Text style={styles.cardOwnerName}>Conor O'Malley</Text>
                        </View>
                    </View>
                    <AppButton title='reserve' onPress={() => props.navigation.navigate('BookingRequest')}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#004282"
    },
    listingWrapper: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    image: {
        flex: 4,
        width: '100%',
        height: '100%',
    },
    listingSection: {
        flex: 4,
        padding: 15,
        paddingTop: 25,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    card: {
        width: width*0.9,
        height: height*0.25,
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: "#000000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        elevation: 2,
    },
    cardOwner: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: width*0.9,
        height: height*0.1,
        paddingVertical: 10,
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
        fontSize: 28,
        fontWeight: '700',
        alignSelf: 'flex-start',
    },
    features: {
        display: 'flex',
        flexDirection: 'row',
    },
    reviews: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#F472B6',
        borderBottomWidth: 2,
    },
    description: {
        paddingVertical: 10,
    },
    ownerInfo: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 15

    },
    cardOwnerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },

})