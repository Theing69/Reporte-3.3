import React from "react";
import { View,Text,Button } from "react-native";

export default function Profilescreen({navigation}){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Profile screen</Text>
            <Button
            title="Go to profile details"
            onPress={()=>navigation.navigate('Profiledetails')}/>
        </View>
    )
}