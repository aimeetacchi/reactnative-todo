import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';


export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Text style={styles.AppHeader}>{this.props.title}</Text>
        <Text style={styles.h2}>Do you need a todo list, well here you go fill this in</Text>
      </React.Fragment>
      
    )
  }
}

const styles = StyleSheet.create({
    AppHeader: {
        color: '#c06c84',
        fontSize: 30,
        borderWidth: 1,
    },
    h2: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        padding: 20,
    }
}) 
