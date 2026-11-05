import React from "react";
import { View,Text, TextInput } from "react-native";
export default function Personalscreen2(){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Stack personal </Text>
            <TextInput style={{borderWidth:5}}
            placeholder="Escribe tu nombre"/>

        </View>
    )
}