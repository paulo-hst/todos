import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
// import { PRIMARY_COLOR, SECONDARY_COLOR, EXTRA_COLOR } from '../utils/index'
import { colors } from '../utils/index'

export default function Title(){
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>To-Do List</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.SECONDARY_COLOR,
    },
    title: {
        marginTop: 40,
        marginBottom: 30,

        fontSize: 65,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.PRIMARY_COLOR,        
        textTransform: 'uppercase',
        
    }
})