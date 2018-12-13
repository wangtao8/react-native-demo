import React, { Component } from 'react'
import {View,Text,Button} from 'react-native';

export default class IndexPage extends Component {
    static navigationOptions = {
        title: 'Index'
      }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Indexpage</Text>
                <Button
                title="Go to Register"
                onPress={() => this.props.navigation.navigate('Register')}
                />
            </View>
        )
    }
}
