import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList
} from "react-native";
import Card from "./card";

const { width, height } = Dimensions.get("window");

export default class HomeScreen extends Component {
  state = {
    users: [
      {
        name: "Proxima Midnight",
        email: "proxima@appdividend.com"
      },
      {
        name: "Ebony Maw",
        email: "ebony@appdividend.com"
      },
      {
        name: "Black Dwarf",
        email: "dwarf@appdividend.com"
      },
      {
        name: "Mad Titan",
        email: "thanos@appdividend.com"
      },
      {
        name: "Supergiant",
        email: "supergiant@appdividend.com"
      },
      {
        name: "Loki",
        email: "loki@appdividend.com"
      },
      {
        name: "corvus",
        email: "corvus@appdividend.com"
      },
      {
        name: "Proxima Midnight",
        email: "proxima1@appdividend.com"
      },
      {
        name: "Ebony Maw",
        email: "ebony1@appdividend.com"
      },
      {
        name: "Black Dwarf",
        email: "dwarf1@appdividend.com"
      },
      {
        name: "Mad Titan",
        email: "thanos1@appdividend.com"
      },
      {
        name: "Supergiant",
        email: "supergiant1@appdividend.com"
      },
      {
        name: "Loki",
        email: "loki1@appdividend.com"
      },
      {
        name: "corvus",
        email: "corvus1@appdividend.com"
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.customHeader}>
          
          
        </View>
        <FlatList
            data={this.state.users}
            showsVerticalScrollIndicator={false}
            numColumns = {2}
            renderItem={({ item }) => (
              <Card 
              weight = {item.name}/>
            )}
            keyExtractor={item => item.email}
          />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  button: {
    backgroundColor: "skyblue",
    padding: 15,
    borderRadius: 4
  },
  customHeader: {
    backgroundColor: "pink",
    height: 80,
    width
  }
};
