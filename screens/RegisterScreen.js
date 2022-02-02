import React, {useState} from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Ani } from 'react-native'
import { AppButton } from '../components/button';
import { useSelector, useDispatch } from 'react-redux'
import { userToken } from '../features/token';
import { Formik } from 'formik'
import * as yup from 'yup';

const registerValidation = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Please enter a valid email').required('email address is required'),
  password: yup.string().min(8, ({min}) => `password must be at least ${min} characters`).required('password is required'),
});

export default function RegisterScreen(props) {



    const dispatch = useDispatch()
  
    return (
      <Formik
     initialValues={{ email: '', firstName: '', lastName: '', password: '' }}
     validateOnMount={true}
     onSubmit={ async values => {

        var rawResponse = await fetch('https://vello.herokuapp.com/signup', {
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: `firstName=${values.firstName}&lastName=${values.lastName}&email=${values.email}&password=${values.password}`
          });
  
        var response = await rawResponse.json();
        
        dispatch(userToken(response.token));
  
        props.navigation.navigate('BottomNavigator', {screen: 'Map'})
  
     }}
     validationSchema={registerValidation}
   >
     {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerTitle}>Register</Text>
            </View>
            <View style={styles.main}>
            <TextInput 
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            value={values.firstName}
            style={styles.input} placeholder='enter your first name'/>
            {(errors.firstName && touched.firstName) &&
            <Text style={styles.errorMessage}>{errors.firstName}</Text>
            }
            <TextInput 
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            value={values.lastName}
            style={styles.input} placeholder='enter your last name'/>
            {(errors.lastName && touched.lastName) &&
            <Text style={styles.errorMessage}>{errors.lastName}</Text>
            }
            <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={styles.input} keyboardType="email-address" placeholder='enter your email' />
            {(errors.email && touched.email) &&
            <Text style={styles.errorMessage}>{errors.email}</Text>
            }
            <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            style={styles.input} secureTextEntry={true} placeholder='enter your password'/>
            {(errors.password && touched.password) &&
            <Text style={styles.errorMessage}>{errors.password}</Text>
            }
            <AppButton title='Register' onPress={handleSubmit}/>
            <Text style={styles.footer}>Already have an account? <Text onPress={() => props.navigation.navigate('Login')} style={styles.signinLink} >signin</Text></Text>
            </View>  
        </View>
        )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#004282'
    },
    header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 50,
      marginBottom: 30
    },
    headerTitle: {
      fontWeight: '700',
      color: '#F472B6',
      fontSize: 36
    },
    main: {
      paddingTop: 30,
      display: 'flex',
      flexDirection: 'column',
      flex: 3,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 30
    },
    input: {
        marginTop: 20,
        justifyContent: 'flex-start',
        width: 325,
        height: 50,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    signinLink: {
        fontWeight: '700',
        color: '#004282',
    },
    footer: {
        marginTop: 60,
        alignSelf: 'center'
    },
    errorMessage: {
      color: '#FF0000'
    }
});