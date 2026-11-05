import React from "react";
import { View,Text,Button } from "react-native";

export default function Personalscreen({navigation}){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Personal screen</Text>
            <Button 
            title="Ir al stack personal"
            onPress={()=>navigation.navigate('Personal2')}/>
        </View>
    )
}