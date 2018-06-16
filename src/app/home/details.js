import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');
export default class DetailScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.customHeader}>
                </View>
                <View style ={ styles.secondScreen }>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('DetailScreen')}
                    style={styles.button}> <Text> Click Me </Text> </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'skyblue',
        padding: 15,
        borderRadius: 4,
    },
    customHeader: {
        backgroundColor: 'pink',
        height: 80,
        width,
    },
    secondScreen:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    }
}