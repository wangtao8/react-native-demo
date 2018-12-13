import React, { Component } from 'react'
import {View,Text} from 'react-native';

export default class Buttons extends Component {
  render() {
    return (
      <View style={{width:200, height:40, lineHeight: 40, textAlign: 'center', backfrounColor: 'red',}}>
        <Text style={{ color: '#f0f0f0'}}>点我</Text>
      </View>
    )
  }
}
