import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class HomePage extends Component {
  static navigationOptions = {
    title: 'Home',
    headerBackTitle: '返回标题', // android不支持, 长度有限制
  };
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'blue', paddingTop: 30}}>
        <Text style={styles.text}>欢迎来到HomePage</Text>
        <Button
          title="顶部导航器"
          onPress={() => {
            navigation.navigate('MaterialTopTabNavigator');
          }}
        />
        <Button
          title="底部导航器"
          onPress={() => {
            navigation.navigate('ButtomTabNavigator');
          }}
        />
        <Button
          title="切换导航器"
          onPress={() => {
            navigation.navigate('SwitchNavigators');
          }}
        />
        <Button
          title="抽屉导航器"
          onPress={() => {
            navigation.navigate('DrawerNav');
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

export default HomePage;
