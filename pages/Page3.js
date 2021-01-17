import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

class Page3 extends Component {
  render() {
    const {navigation} = this.props;
    const {state, setParams} = navigation;
    const {params} = state;
    const showText = params && params.mode === 'edit' ? '正在编辑' : '编辑完成';
    return (
      <View>
        <Text>欢迎来到Page3</Text>
        <Text style={styles.showText}>{showText}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setParams({name: text});
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    marginTop: 10,
    borderColor: 'black',
  },
  showText: {
    marginTop: 20,
    fontSize: 20,
    color: 'red',
  },
});

export default Page3;
