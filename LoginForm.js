import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TextInput} from 'react-native';

export default class LoginForm extends Component{
  render(){
    return (
      <View style=(styles.container)>
        <TextInput
          style = {styles.input}
            />
        <TextInput
          style = {styles.input}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{

  },
  input:{
    height:40,
    backgroundColor: 'red'
  }
})
