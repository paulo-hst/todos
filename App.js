import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import Title from './components/Title';

export default function App() {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        

        <Title/>

        <AddTodo/>

        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>

        <StatusBar style="auto" />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: '#fff',
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
});
