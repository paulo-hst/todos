import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { colors } from '../utils/index'
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function Title(){
    
    let [fontsLoaded] = useFonts({
        Inter_900Black,
    })

    return(
        <View style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Minhas Tarefas</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        backgroundColor: colors.PRIMARY_COLOR,
    },
    container: {
        width: '100%',
        backgroundColor: colors.SECONDARY_COLOR,
        borderBottomLeftRadius: 80,
    },
    title: {
        marginTop: 50,
        marginBottom: 30,

        fontFamily: 'Inter_900Black',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.EXTRA_COLOR,        
        textTransform: 'uppercase',
        
    }
})