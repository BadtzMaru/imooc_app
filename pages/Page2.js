import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Page2 extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text>欢迎来到Page2</Text>
        <Button
          title="Go Back"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Button
          title="Go to Page1"
          onPress={() => {
            navigation.navigate('Page1');
          }}
        />
      </View>
    );
  }
}

export default Page2;
