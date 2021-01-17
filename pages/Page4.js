import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';

class Page4 extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'blue', paddingTop: 30}}>
        <Text style={styles.text}>欢迎来到Page4</Text>
        <Button
          title="Open Drawer"
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        <Button
          title="Togle Drawer"
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        />
        <Button
          title="Open Page5"
          onPress={() => {
            navigation.navigate('Page5');
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

export default Page4;
