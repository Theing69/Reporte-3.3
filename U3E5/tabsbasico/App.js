import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import Homescreen from './screens/Homescreen';
import Settingsscreen from './screens/Settingssreen';
import Newscreen from './screens/Newscreen'
import Login from './screens/Login'
import {Ionicons} from '@expo/vector-icons'

const Tab=createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({color,size})=>{
          let iconName;
          if(route.name==='Home'){
            iconName='home';
          }else if(route.name==='Settings'){
            iconName='settings';
          }else if(route.name==='New'){
            iconName='help-circle'
          }else if(route.name==='Login'){
            iconName="log-in"
          }
          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor:'tomato',
        tabBarInactiveTintColor:'gray'
      })}>
        <Tab.Screen name="Home" component={Homescreen}/>
        <Tab.Screen name="Settings" component={Settingsscreen}/>
        <Tab.Screen name="New" component={Newscreen}/>
        <Tab.Screen name="Login" component={Login}/>
      </Tab.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
