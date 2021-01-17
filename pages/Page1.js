import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class Page1 extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
        <Text style={styles.text}>欢迎来到Page1</Text>
        <Button
          title="Go Back"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Button
          title="Go to Page2"
          onPress={() => {
            navigation.navigate('Page2');
          }}
        />
        <Button
          title="Go to Page3"
          onPress={() => {
            navigation.navigate('Page3', {name: 'Devio'});
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default Page1;
