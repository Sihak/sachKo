//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Card extends Component {
    render() {
    const { weight } = this.props;
    const { card, header, active, round  } = styles;
        return (
            <View style={card}>
                <View style = {header}>
                    <View style = {active}>
                        <View style = {round}>
                        </View>
                    </View>
                    <View>
                        <Text >
                            {weight}
                        </Text>
                    </View>
                </View>
                <View>

                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 10,
        backgroundColor: '#FDFDFD',
        width: 150,
        height: 250,
        
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,

    },
    active: {
        backgroundColor: '#FDFDFD',
        borderWidth: 1,
        borderColor: '#80D135',
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    round: {
        backgroundColor: '#80D135',
        width: 10,
        height: 10,
        borderRadius: 5,

    },
});

//make this component available to the app
export default Card;
