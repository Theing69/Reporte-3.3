import React from "react";
import { View,Text,StyleSheet,TextInput } from "react-native";

export default function Settingsscreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Dudas y preguntas</Text>
            <TextInput style={styles.input}
            placeholder="Agregar mensaje"/>
        </View>
    )
}
const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
text:{
    fontSize:24
},
input:{
     width: "100%",
    height: 50,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#1f2937",
    marginBottom: 14,
    // Sombra sutil
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
}
})