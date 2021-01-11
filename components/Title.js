import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function Title(){
    
    return(
        <Text style={styles.title}>To-Do List</Text>
    )
    
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'blue',
    }
})