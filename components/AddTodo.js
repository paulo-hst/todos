import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity,  } from 'react-native'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { colors } from '../utils/index'


export default function AddTodo(){
    return(
        <View style={styles.container}>
         <TextInput style={styles.input} value='Digite aqui o to-do' />
         <TouchableOpacity style={styles.button} >
             <MaterialCommunityIcons name='plus-circle' size={35} color={colors.EXTRA_COLOR} />
         </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
    },

    input: {
        width: '75%',
        height: 50,
        padding: 10,

        backgroundColor: colors.PRIMARY_COLOR,
        
        borderWidth: 1,
        borderColor: colors.EXTRA_COLOR,
        borderRadius: 5,

    },  

    button: {
        justifyContent: 'center'
    },  
})