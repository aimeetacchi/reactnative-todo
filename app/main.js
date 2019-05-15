import React, { Component } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import FormComponent from './components/form';
import Header from './components/header';

export default class main extends Component {
  render() {

    const headerToDo = 'To Do List';

    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
        <Header title={headerToDo}/>
        <FormComponent />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      paddingTop: 40,
      // justifyContent: 'center',
    },
  });
