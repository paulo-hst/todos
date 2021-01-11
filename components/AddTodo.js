import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function AddTodo(){
    return(
        <View>
         <TextInput style={styles.input} value='Digite aqui o to-do' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '60%',
        height: 50,
        padding: 10,

        backgroundColor: 'blue',
        
        borderColor: 'black',
        borderRadius: 5,

    },  
})