import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  FlatList
} 
from "react-native";

export default class EditTodo extends React.Component {
    state = {
      text: "",
      done: false,
      shouldRemind: false,
    };
  
    async componentWillMount() {
      const item = this.props.navigation.state.params["item"];
    }

   render() {
        const textInputStyleOnAndroid =
          Platform.OS === "android" ? { paddingBottom: 7, paddingLeft: 7 } : {};
        return (
          <View style={{ backgroundColor: "#E9E9EF", flex: 1 }}>
            <View style={[styles.todowrapper, { padding: 15 }]}>
              <TextInput
                style={[textInputStyleOnAndroid, styles.label]}
                placeholder="Name of the item"
                autoFocus
                underlineColorAndroid={TINT_COLOR}
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
              />
            </View>
            <View style={styles.todowrapper}>
              <View style={styles.remindRow}>
                <Text style={styles.label}>Remind me</Text>
                <Switch
                  onTintColor={TINT_COLOR}
                  onValueChange={value => this.setState({ shouldRemind: value })}
                  value={this.state.shouldRemind}
                />
              </View>
              </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    todowrapper: {
      marginTop: 30,
      paddingHorizontal: 10,
      backgroundColor: "white"
    },
    
    remindRow: {
      borderBottomWidth: 1,
      borderBottomColor: "#dddddd",
      paddingVertical: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    label: {
      fontSize: 18
    }
  });