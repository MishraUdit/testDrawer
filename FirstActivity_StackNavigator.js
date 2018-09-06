import React, { Component } from 'react';
import {
  View, 
  Image, 
  TouchableOpacity
} from 'react-native';
import MainActivity from './MainActivity1';
import Filter1 from './Filter1';
import Filter2 from './Filter2';
import Filter3 from './Filter3';
import Filter4 from './Filter4';
import { StackNavigator } from 'react-navigation';

class HamburgerIcon extends Component {
  toggleDrawer=()=>{
    console.log(this.props.navigationProps);
    this.props.navigationProps.toggleDrawer();
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
        <Image
            source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png'}}
            style={{ width: 25, height: 25, marginLeft: 15}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const FirstActivity_StackNavigator = StackNavigator({
    First: {
      screen: MainActivity, 
      navigationOptions: ({ navigation }) => ({
        title: 'Time2Staff',
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
        headerStyle: {
          backgroundColor: '#FF9800'
        },
        headerTintColor: '#fff',
      })
    },
    Filter1: {
      screen: Filter1, 
      navigationOptions:{
        title: 'Filter1',
        headerStyle: {
          backgroundColor: '#FF9800'
        },
        headerTintColor: '#fff',
      }
    },
    Filter2: {
      screen: Filter2, 
      navigationOptions: {
        title: 'Filter2',
        headerStyle: {
          backgroundColor: '#FF9800'
        },
        headerTintColor: '#fff',
      }
    },
    Filter3: {
      screen: Filter3, 
      navigationOptions: {
        title: 'Filter3',
        headerStyle: {
          backgroundColor: '#FF9800'
        },
        headerTintColor: '#fff',
      }
    },
    Filter4: {
      screen: Filter4, 
      navigationOptions: {
        title: 'Filter4',
        headerStyle: {
          backgroundColor: '#FF9800'
        },
        headerTintColor: '#fff',
      }
    },
  },
    {
      initialRouteName: 'First',
    });

  export default FirstActivity_StackNavigator ;