import React from 'react';
import {Button, Text, View, ScrollView} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {SafeAreaView} from 'react-navigation';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import HomePage from '../pages/HomePage';
import {
  createDrawerNavigator,
  DrawerNavigatorItems,
} from 'react-navigation-drawer';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';
import SwitchNavigators from './SwitchNavigators';

const DrawerNav = createDrawerNavigator(
  {
    Page4: {
      screen: Page4,
      navigationOptions: {
        drawerLabel: 'Page4',
        drawerIcon: ({tintColor, focused}) => (
          <MaterialIcons name="drafts" size={24} style={{color: tintColor}} />
        ),
      },
    },
    Page5: {
      screen: Page5,
      navigationOptions: {
        drawerLabel: 'Page5',
        drawerIcon: ({tintColor, focused}) => (
          <MaterialIcons
            name="move-to-inbox"
            size={24}
            style={{color: tintColor}}
          />
        ),
      },
    },
  },
  {
    contentComponent: (props) => (
      <ScrollView style={{backgroundColor: '#098', felx: 1}}>
        <SafeAreaView forceInset={{top: 'always'}}>
          <DrawerNavigatorItems {...props} />
        </SafeAreaView>
      </ScrollView>
    ), // 自定义侧拉抽屉
    contentOptions: {
      activeTintColor: 'white',
    },
  },
);

const ButtomTabNavigator = createBottomTabNavigator(
  {
    // 配置页面的路由
    Page1: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: 'Page1', // string 或者 组件
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons name="ios-home" size={26} style={{color: tintColor}} />
        ),
      },
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <Text style={{color: focused ? 'cyan' : 'gray', textAlign: 'center'}}>
            Page2
          </Text>
        ), // 自定义组件
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name="ios-people"
            size={26}
            style={{color: focused ? 'cyan' : 'gray'}}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
    },
  },
);

const MaterialTopTabNavigator = createMaterialTopTabNavigator(
  {
    // 配置页面的路由
    Page1: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: 'Page1', // string 或者 组件
      },
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name="ios-people"
              size={16}
              style={{color: tintColor, marginRight: 5}}
            />
            <Text
              style={{color: focused ? 'cyan' : 'yellow', textAlign: 'center'}}>
              Page2
            </Text>
          </View>
        ), // 自定义组件
      },
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        tabBarLabel: 'Page3', // string 或者 组件
      },
    },
  },
  {
    tabBarOptions: {
      // activeTintColor: 'red',
      tabStyle: {
        minWidth: 50,
      },
      upperCaseLabel: false, // 是否大写
      style: {
        backgroundColor: '#879',
      },
      indicatorStyle: {
        height: 2,
        backgroundColor: 'white',
      },
      labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
      },
    },
  },
);

export const AppStackNavigator = createStackNavigator(
  {
    HomePage: {
      screen: HomePage,
    },
    DrawerNav: {
      screen: DrawerNav,
    },
    SwitchNavigators: {
      screen: SwitchNavigators,
    },
    MaterialTopTabNavigator: {
      screen: MaterialTopTabNavigator,
      navigationOptions: {
        title: '顶部导航器',
      },
    },
    ButtomTabNavigator: {
      screen: ButtomTabNavigator,
      navigationOptions: {
        title: '底部导航器',
        header: null,
      },
    },
    Page1: {
      screen: Page1,
      navigationOptions: ({navigation}) => ({
        title: `${
          navigation.state.params && navigation.state.params.name
        }页面名`,
      }),
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        title: 'Page2',
        header: null, // 是否展示顶部标题栏
      },
    },
    Page3: {
      screen: Page3,
      navigationOptions: (props) => {
        const {navigation} = props;
        const {state, setParams} = navigation;
        const {params = {}} = state;
        return {
          title: params.name ? params.name : 'This is Page3',
          headerRight: (
            <Button
              title={params.mode === 'edit' ? '保存' : '编辑'}
              onPress={() => {
                setParams({mode: params.mode === 'edit' ? '' : 'edit'});
              }}
            />
          ),
        };
      },
    },
  },
  {
    defaultNavigationOptions: {
      // 全局默认属性,对当前导航器所有页面有效
      // headerShown: false, // 是否展示顶部标题栏
      // header: null, // 是否展示顶部标题栏
    },
  },
);
