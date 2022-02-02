import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';
import MessageScreen from './screens/MessageScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ResultsScreen from './screens/ResultsScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import BookingRequestScreen from './screens/BookingRequestScreen';
import ListBikeScreen from './screens/ListBikeScreen';
import ListBikePhotoScreen from './screens/ListBikePhotoScreen';

import { Ionicons } from '@expo/vector-icons';


import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './features/token';
import coordsReducer from './features/coords';
import dateReducer from './features/date';
import endDateReducer from './features/endDate'

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    coords: coordsReducer,
    startDate: dateReducer,
    endDate: endDateReducer
  },
});



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Explore() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
      <Stack.Screen name="BookingRequest" component={BookingRequestScreen} />
    </Stack.Navigator>
  );
}

function Profile() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
      <Stack.Screen name="Listing" component={ListBikeScreen} />
      <Stack.Screen name="Listing2" component={ListBikePhotoScreen} />
      <Stack.Screen name="BookingRequest" component={BookingRequestScreen} />
    </Stack.Navigator>
  );
}

const BottomNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;
        if (route.name === 'Map') {
          iconName = 'map-outline'     
        } else if (route.name === 'Messages') {
          iconName = 'chatbubbles-outline'
        }else if (route.name === 'Profile') {
          iconName = 'person-outline'
        }
        return <Ionicons name={iconName} size={25} color={color} />;
      },
     })}
     
     tabBarOptions={{
      activeTintColor: '#F472B6',
      inactiveTintColor: '#dfe6e9',
      style: {
        backgroundColor: '#004282',
      }
     }}
    >
    <Tab.Screen name="Map" component={Explore} />
    <Tab.Screen name="Messages" component={MessageScreen} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
  
  )
}

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    

  );
}
