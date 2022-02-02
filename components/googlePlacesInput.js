import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { placeCoords } from '../features/coords';
import { useDispatch, useSelector } from 'react-redux';

const GooglePlacesInput = () => {

    const googleAPI = ''
    const dispatch = useDispatch()
  return (
    <GooglePlacesAutocomplete
      placeholder='where do you want to go'
      onPress={(data, details = null) => {
        dispatch(placeCoords(details))
      }}
      query={{
        key: googleAPI,
        language: 'en',
      }}
      fetchDetails={true}
      debounce={1000}
      enablePoweredByContainer={false}
      styles={{
          container: {
              flex: 0,
              alignContent: 'center',
          },
        textInputContainer: {
            marginTop: 20,
            width: 325,
            height: 50,
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 20,
            borderRadius: 50,
            alignItems: 'center'
        },
        textInput: {
          color: '#000',
          fontSize: 16,
        },
        listView: {
          marginHorizontal: 20,
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
    />
  );
};

export {GooglePlacesInput}