import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Personalscreen2 from './Personalscreen2'
import Personalscreen from "./Personalscreen";

const Stack=createNativeStackNavigator();

export default function Profilestack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Personal" component={Personalscreen}/>
            <Stack.Screen name="Personal2" component={Personalscreen2}/>
        </Stack.Navigator>
    )
}