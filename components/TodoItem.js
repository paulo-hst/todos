import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { colors } from '../utils/index'


export default function TodoItem(){

    const todos = [ 'Estudar React Native', 'Estudar JavaScript', 'Estudar HTML', 'Estudar CSS', 'Estudar Python', 'Estudar React.js', 'Estudar Node.js', 'Estudar Java', 'Estudar Git' ]

    const teste = Math.floor(Math.random() * todos.length)

    todos.forEach(element => {
        console.log(element)
    })

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {todos[teste]}
            </Text>
            <TouchableOpacity style={styles.button}>
                <MaterialCommunityIcons name='delete-outline' size={35} color={colors.SECONDARY_COLOR} />
            </TouchableOpacity>

        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flexDirection: 'row',
    },

    text: {
        width: '75%',
        padding: 10,
        textAlign: 'justify',
        fontSize: 20,

        backgroundColor: colors.PRIMARY_COLOR,
        color: colors.EXTRA_COLOR,

        borderWidth: 1,
        borderColor: colors.SECONDARY_COLOR,
        borderRadius: 5,

    },

    button: {
        justifyContent: 'center',
    }

})