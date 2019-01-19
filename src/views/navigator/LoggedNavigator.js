import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheer,
	Image,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import ScreenPrincipal from '../principal/ScreenPrincipal';
import ScreenListaProcessosPsq from '../principal/ScreenListaProcessosPsq';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

let scenes = {	
    ScreenPrincipal: { 
      screen: CompTabLogged 
    },
    ScreenListaProcessosPsq: {
      screen: ScreenListaProcessosPsq
    }
};

const ThisNavigator = StackNavigator(scenes, {
    initialRouteName: 'ScreenPrincipal',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);



export default class LoggedNavigator extends Component {

  render() {    
    return (
      <ThisNavigator />      
    );
  }
}
