import React, {useState} from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { AppButton } from '../components/button';
import { userToken } from '../features/token';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

export default function RegisterScreen(props) {

  const dispatch = useDispatch()
  
  const [errorMessage, setErrorMessage] = useState(null);

  let loginValidation = yup.object().shape({
    password: yup.string().required('password is required'),
    email: yup.string().email('Please enter a valid email').required('email address is required'),
  });

    return (
      <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={async values => {
        
        var rawResponse = await fetch('https://vello.herokuapp.com/signin', {
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: `email=${values.email}&password=${values.password}`
          });
  
        var response = await rawResponse.json();

        dispatch(userToken(response.token));

        if(response.result===false){
          
          setErrorMessage(<Text style={styles.errorMessage}>password or email incorrect</Text>) 
         
        }else{
          console.log('response is', response)
          props.navigation.navigate('BottomNavigator', {screen: 'Map'})
        }
         
          
      }}
      validationSchema={loginValidation}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerTitle}>Login</Text>
            </View>
            <View style={styles.main}>
            <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={styles.input} keyboardType="email-address" placeholder='enter your email'/>
              {touched.email && errors.email ? (
                <Text>{errors.email}</Text>
              ) : null}
            <TextInput 
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            style={styles.input} secureTextEntry={true} placeholder='enter your password'/>
              {touched.password && errors.password ? (
                <Text>{errors.password}</Text>
              ) : null}
              {errorMessage}
            <AppButton title='login' onPress={handleSubmit}/>
            <Text style={styles.footer}>Don't yet have an account? <Text onPress={() => props.navigation.navigate('Register')} style={styles.signinLink} >register</Text></Text>
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