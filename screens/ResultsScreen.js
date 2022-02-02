import React, {useState} from 'react'
import { View, StyleSheet, ImageBackground, Text, Dimensions, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import {Stars} from '../components/stars';
import { CalendarStartDate, CalendarEndDate } from '../components/calendar';
import { OutlineButtonLarge, OutlineButtonSmall } from '../components/outlineButton';
import { Modal, Portal, Provider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { GooglePlacesInput } from '../components/googlePlacesInput';
import { AppButton } from '../components/button';



export default function ResultsScreen(props) {

const coords  = useSelector((state) => state.coords.value)

const reducerDate  = useSelector((state) => state.startDate.value)
const reducerEndDate  = useSelector((state) => state.endDate.value)

console.log("reducer end date is", reducerEndDate)


const [visible, setVisible] = useState(false);

const showModal = () => setVisible(true);
const hideModal = () => setVisible(false);
const containerStyle = {backgroundColor: 'white', padding: 20};

const [visibleSearch, setVisibleSearch] = useState(false);

const showModalSearch = () => setVisibleSearch(true);
const hideModalSearch = () => setVisibleSearch(false);

const handleSubmit = () => setVisibleSearch(false)
const containerStyleSearch = {backgroundColor: 'white', padding: 20, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'};

const [visibleEndDate, setVisibleEndDate] = useState(false);

const showModalEndDate = () => setVisibleEndDate(true);
const hideModalEndDate = () => setVisibleEndDate(false);

const startDate = reducerDate || 'start date'
const endDate = reducerEndDate || 'end date'

return (
  <Provider>
     <Portal>
        <Modal visible={visibleSearch} onDismiss={hideModalSearch} contentContainerStyle={containerStyleSearch}>
        <GooglePlacesInput/>
        <AppButton style={styles.searchButton}  title='search' onPress={() => handleSubmit() }/>
        </Modal>
    </Portal>
<View style={styles.container}>
    <View style={styles.header}>
    <OutlineButtonLarge title={coords?.formatted_address} onPress={showModalSearch}/>
    <View style={styles.calendar}>
    <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <CalendarStartDate/>
        </Modal>
    </Portal>
    <OutlineButtonSmall title={startDate} name='calendar-outline' onPress={showModal}/>
    <Portal>
        <Modal visible={visibleEndDate} onDismiss={hideModalEndDate} contentContainerStyle={containerStyle}>
          <CalendarEndDate/>
        </Modal>
    </Portal>
    <OutlineButtonSmall title={reducerEndDate} name='calendar-outline' onPress={showModalEndDate}/>
    </View>
    </View>
    <View style={styles.main}>
      <MapView style={styles.map}
      region={{
      latitude: coords?.geometry?.location?.lat,
      longitude: coords?.geometry?.location?.lng,
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
      <TouchableOpacity activeOpacity={1} style={styles.press} onPress={() => props.navigation.navigate('ProductDetails')}>
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
      </TouchableOpacity>
    </ScrollView>
  </View>
  </Provider> 
  
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#004282"
    },
    header: {
        flex: 1, 
        paddingHorizontal: 20,
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
    },
    input: {
      marginTop: 20,
      justifyContent: 'flex-start',
      width: 325,
      height: 50,
      borderColor: '#E5E5E5',
      backgroundColor: "#FFF",
      borderWidth: 1,
      paddingHorizontal: 20,
      borderRadius: 50,
  },
  calendar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  press: {
    alignSelf: 'flex-end'
  },
  searchButton: {
    marginTop: 40,
  }
});