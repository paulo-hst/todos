import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity,  } from 'react-native'
import { MaterialCommunityIcons } from 'react-native-vector-icons'

export default function AddTodo(){
    return(
        <View style={styles.container}>
         <TextInput style={styles.input} value='Digite aqui o to-do' />
         <TouchableOpacity style={styles.button} >
             <MaterialCommunityIcons name='plus-circle' size={50} color='#000000' />
         </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },

    input: {
        width: '72%',
        height: 50,
        padding: 10,

        backgroundColor: 'white',
        
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,

    },  

    button: {

    },  
})