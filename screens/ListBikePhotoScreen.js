import { ScrollView, StyleSheet, Text, View, Dimensions, TextInput, Image } from 'react-native';
import { ProgressBar, Colors, Chip } from 'react-native-paper';
import { AppButton } from '../components/button';
import { OutlineButtonSmall } from '../components/outlineButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function ListBikePhotoScreen(){
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>list your bike</Text>
        </View>
        <View style={styles.mainSection}>
            <ScrollView style={styles.scroll}  showsVerticalScrollIndicator={false}>
                <ProgressBar progress={0.50} color={Colors.pink800} />
            
                    <Text style={styles.cardTitle}>Upload Photos</Text>
                    <View style={styles.buttonContainer}>
                        <OutlineButtonSmall title='upload photos' name='cloud-upload-outline'/>
                        <OutlineButtonSmall title='take photo' name='camera-outline'/>
                    </View>
                    <View style={styles.photoContainer}>
                    <Image style={styles.photo} source={require('../assets/bicycle.jpg')}></Image>
                    <Image style={styles.photo} source={require('../assets/bicycle.jpg')}></Image>
                    <Image style={styles.photo} source={require('../assets/bicycle.jpg')}></Image>
                    <Image style={styles.photo} source={require('../assets/bicycle.jpg')}></Image>
                    <Image style={styles.photo} source={require('../assets/bicycle.jpg')}></Image>
                    </View>
                <AppButton title='next' onPress={() => props.navigation.navigate('Listing2')}/>
            </ScrollView>


        </View>
    </View>
)
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#FFF'
},
header: {
    flex: 1,
    backgroundColor: '#004282',
    paddingHorizontal: 40,
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: 20
},
headerTitle: {
    fontSize: 36,
    color: "#FFFFFF",
    fontWeight: '400',
},  
mainSection: {
    flex: 4,
    padding: 15,
    paddingTop: 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
},
scrollSection: {
    paddingHorizontal: 10
},
card: {
    width: width * 0.9,
    height: height * 0.30,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: "#000000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    elevation: 2,
    marginBottom: 15
},
cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 20
},
buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30
},
photoContainer: {
    paddingHorizontal: 20,
},
photo: {
    alignSelf: 'center',
    resizeMode: 'cover',
    height: 120,
    width: 200,
    marginVertical: 10
}

})
