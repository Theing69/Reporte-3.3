import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profilescreen from './Profilescreen'
import Profiledetailsscreen from './Profiledetailsscreen'
import Personalscreen2 from './Personalscreen2'

const Stack=createNativeStackNavigator();

export default function Profilestack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profilescreen}/>
            <Stack.Screen name="Profiledetails" component={Profiledetailsscreen}/> 
        </Stack.Navigator>
    )
}