import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class Page5 extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'cyan', paddingTop: 30}}>
        <Text style={styles.text}>欢迎来到Page5</Text>
        <Button
          title="Open Page4"
          onPress={() => {
            navigation.navigate('Page4');
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

export default Page5;
