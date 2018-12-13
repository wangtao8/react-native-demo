import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TextInput,Image } from 'react-native'
import ImageShow from './ImageShow'

export default class Login extends Component {
  static navigationOptions = {
    title: 'Hello React Native!!!'
  }
  constructor(){
    super()
    this.state = {
      language: '',
      text: '',
      pass: ''
    }
  }
  changeVal(itemValue, itemIndex){
    this.setState({language: itemValue})
    alert(itemValue)
  }
  changeText(text, name){
    this.setState({[name]: text})
  }
  onPressLearnMore(name){
    if (name == 'login'){
      this.props.navigation.navigate('Index')
    } else {
      this.props.navigation.navigate('Register')
    }
  }
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageShow/>
              {/* <Image
                style={{width: 100,height:100, marginBottom: 80}}
                source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544688258390&di=3bec0483b2dedc9cc6f4249b88fe642e&imgtype=0&src=http%3A%2F%2Fstatic.open-open.com%2Flib%2FuploadImg%2F20160117%2F20160117152222_31.png'}}
              /> */}
            <View style={{height: 200}}>
                <View style={{flex:1, flexDirection: 'row'}}>
                  <Text style={{width: 60, height:40, lineHeight: 40}}>
                      用户名：
                    </Text>
                    <TextInput
                      placeholder={'请输入用户名'}
                      style={{width:220 ,height: 40, borderColor: 'gray', borderWidth: 1}}
                      onChangeText={(text) => this.changeText(text, 'text')}
                      value={this.state.text}
                    />
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={{width: 60, height:40, lineHeight: 40}}>
                      密&emsp;码：
                    </Text>
                    <TextInput
                      placeholder={'请输入密码'}
                      secureTextEntry={true}
                      style={{width:220 ,height: 40, borderColor: 'gray', borderWidth: 1}}
                      onChangeText={(pass) => this.changeText(pass, 'pass')}
                      value={this.state.pass}
                    />
                </View>
                <View style={{flex: 1,flexDirection: 'row', justifyContent: 'space-around', height: 200, alignItems: 'center'}}>
                  <View style={{flex: 2}}>
                    <Button
                      activeOpacity={0.5}
                      onPress={()=>this.onPressLearnMore('login')}
                      title="提   交"
                      color="#841584"
                      accessibilityLabel="Learn more about this purple button"
                    />
                  </View>
                  <View style={{flex:1}}>
                    <Button
                      activeOpacity={0.5}
                      onPress={()=>this.onPressLearnMore('register')}
                      title="注   册"
                      color="#87ceeb"
                      accessibilityLabel="Learn more about this purple button"
                    />
                  </View>
                  
                </View>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({})