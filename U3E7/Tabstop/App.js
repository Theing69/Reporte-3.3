import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Importar el Drawer Navigator
import { createDrawerNavigator } from '@react-navigation/drawer';
import Homescreen from './screens/Homescreen';
import Settingscreen from './screens/Settingscreen';
import Infoscreen from './screens/Infoscreen';
import Profilescreen from './screens/Profilescreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home" screenOptions={{headerTintColor: '#007AFF',drawerActiveTintColor: 'tomato',
        }}
      >
        <Drawer.Screen
          name="Home" component={Homescreen} options={{ title: 'Inicio Principal' }}
        />
        <Drawer.Screen
          name="Settings" component={Settingscreen} options={{ title: 'Ajustes' }}
        />
        <Drawer.Screen name="Info" component={Infoscreen} options={{title:'Informacion de ejercicio'}}/>
      <Drawer.Screen name="Profile" component={Profilescreen} options={{title:'Informacion de la cuenta'}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
