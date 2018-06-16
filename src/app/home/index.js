import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <TouchableOpacity
        onPress = {() => this.props.navigation.navigate('DetailScreen')}
         style = {styles.button}> <Text> Click Me </Text> </TouchableOpacity>
      </View>
    )
  }
}


const styles = {
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    button:{
        backgroundColor: 'skyblue',
        padding:15,
        borderRadius: 4,
    }
}