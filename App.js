import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class App extends Component {
  render() {
    return (
      <View>
        <Ionicons name="ios-analytics" size={50} color="red" />
        <Ionicons name="ios-apps" size={50} color="cyan" />
      </View>
    );
  }
}

export default App;
