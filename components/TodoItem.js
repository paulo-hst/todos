import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { colors } from '../utils/index'


export default function TodoItem(){
    
    return(
        <View style={styles.container}>
                <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <MaterialCommunityIcons name='delete-outline' size={35} color={colors.EXTRA_COLOR} />
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
        textAlign: 'justify',
        backgroundColor: colors.PRIMARY_COLOR,
        padding: 10,

        borderWidth: 1,
        borderColor: colors.EXTRA_COLOR,
        borderRadius: 5,

    },

    button: {
        justifyContent: 'center',
    }

})