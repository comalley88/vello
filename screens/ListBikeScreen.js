import { ScrollView, StyleSheet, Text, View, Dimensions, TextInput, useState } from 'react-native';
import { ProgressBar, Colors, Chip } from 'react-native-paper';
import { AppButton } from '../components/button';
import { Formik } from 'formik'
import * as yup from 'yup';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const registerValidation = yup.object().shape({
  model: yup.string().required(),
  yearPuchased: yup.string().required(),
  bikeSize: yup.string().required(),
  bikeDescription: yup.string().min(50, ({min}) => `description must be at least ${min} characters`).required(),
  price: yup.string().required()
});

export default function ListBikeScreen(props) {

    var bikeType = ['road', 'VTT', 'carbon', 'electric', 'gravel']

    return (

           <Formik
            initialValues={{ model: '', yearPuchased: '', bikeSize: '', bikeDescription: '', price: '', extras: [], type: '' }}
            onSubmit={values => console.log(values)}
   >
           {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>list your bike</Text>
            </View>
            <View style={styles.mainSection}>
                <ScrollView style={styles.scroll}  showsVerticalScrollIndicator={false}>
                    <ProgressBar progress={0.25} color={Colors.pink800} />
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Bike Details</Text>
                        <TextInput 
                         style={styles.input} 
                         onChangeText={handleChange('model')}
                         onBlur={handleBlur('model')}
                         value={values.model}
                         placeholder='model'/>
                        <TextInput 
                         style={styles.input} 
                         onChangeText={handleChange('bikeSize')}
                         onBlur={handleBlur('bikeSize')}
                         value={values.bikeSize}
                         placeholder='bike size'
                        />
                        <TextInput
                         style={styles.input} 
                         onChangeText={handleChange('yearPuchased')}
                         onBlur={handleBlur('yearPuchased')}
                         value={values.yearPuchased}
                         placeholder='year puchased'
                         />
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Bike Description</Text>
                        <View style={styles.chipWrapper}>
                        { bikeType.map((bike, i) => {
        return <Chip key={i} onPress={handleChange('type')} value={bike} style={styles.chip} icon="information">{bike}</Chip>
    })}  
                        </View>
                        <TextInput 
                         style={styles.inputDescription} 
                         onChangeText={handleChange('bikeDescription')}
                         onBlur={handleBlur('bikeDescription')}
                         value={values.bikeDescription}
                         placeholder='bikeDescription'
                        />
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Extras</Text>
                        <View style={styles.chipWrapper}>
                        <Chip style={styles.chip} icon="information">road</Chip><Chip style={styles.chip} icon="information">VTT</Chip><Chip style={styles.chip} icon="information">carbon</Chip><Chip style={styles.chip} icon="information">electric</Chip><Chip style={styles.chip} icon="information">gravel</Chip>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Price</Text>
                        <TextInput 
                         placeholder='price per day (EUR)'
                         style={styles.input} 
                         onChangeText={handleChange('price')}
                         onBlur={handleBlur('price')}
                         value={values.price}
                        />
                    </View>
                    <AppButton title='next' onPress={handleSubmit}/>
                </ScrollView>


            </View>
        </View>
         )}
   </Formik>
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
        fontWeight: '700'
    },
    input: {
        marginTop: 20,
        justifyContent: 'flex-start',
        width: 300,
        height: 40,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    inputDescription: {
        justifyContent: 'flex-start',
        width: 300,
        height: 100,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    chipWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 5
    },
    chip: {
        marginRight: 10,
        marginVertical: 5
    },
    scroll: {
flex: 4
    }

})
