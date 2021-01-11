import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { colors } from '../utils/index'

export default function AddTodo(){
    // cria o valor inicial do todo e a função que realiza alterações neste todo
    const [ todo, setTodo ] = useState('')

    function newTodo(){
        // recebe o valor digitado no input (novo todo) e atribui na variável valor
        // const valor = todo
        console.log(todo)
    }

    return(
        <View style={styles.container}>
         <TextInput 
            style={styles.input} 
            placeholder='Digite aqui o to-do'
            // atualiza o valor do todo com o que está sendi digitado
            onChangeText={todo => setTodo(todo)}
            defaultValue={todo} 
         />
         <TouchableOpacity style={styles.button} onPress={newTodo}>
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