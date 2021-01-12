import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import Title from './components/Title';
import { colors } from './utils/index'

export default function App() {
  
  return (

    <ScrollView style={styles.scrollViewContainer} >
        <View style={styles.container}>
          
          <Title/>
          <View style={styles.background}>

            <AddTodo />

            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>

            <StatusBar style="auto" />
          </View>

        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: colors.PRIMARY_COLOR,
    
    
  },
  background: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY_COLOR,
    borderTopRightRadius: 80,
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.SECONDARY_COLOR,
  },
});
