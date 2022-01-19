import { StatusBar } from 'expo-status-bar';
import {ImageBackground, Text} from 'react-native'
import styled from "styled-components"

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

import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Explore() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
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
    <Tab.Screen name="Maps" component={Explore} />
    <Tab.Screen name="Messages" component={MessageScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
  
  )
}

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  </NavigationContainer>

    // <StyledBackground source={require('./assets/background.jpg')}>
    // <Circle>
    //   <Text>Vello</Text>
    // </Circle>
    // <StyledText>Hello World!</StyledText>
    // </StyledBackground>
  );
}

const StyledView = styled.View`
  background-color: papayawhip;
  height: 100%
`

const StyledText = styled.Text`
  color: red;
`

const StyledBackground = styled.ImageBackground`
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: center
`

const Circle = styled.View`
height: 200px;
width: 200px;
background-color: #004282;
opacity: 0.8;
border-radius: 100;
align-items: center;
justify-content: center

`

