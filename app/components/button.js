import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
export default class Button extends Component {
  render() {
    const { func, name, nameClass } = this.props
    return (
        <TouchableHighlight
        style={styles.button}
        onPress={() => func()}
        className={nameClass}
        >
        <Text style={styles.buttonText}>{name}</Text>
        </TouchableHighlight>
    )
  }
}

var styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        width: 250,
        height: 50,
        backgroundColor: '#c06c84',
    },
    buttonText: {
        color: '#fff',
        textTransform: 'uppercase',
        alignSelf: 'center',
    },
    clear: {
        borderRadius: 20,
        width: 250,
        height: 50,
        color: 'white',
        backgroundColor: '#c06c84',
    }
})


