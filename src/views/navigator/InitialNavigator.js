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
import { connect } from 'react-redux';
import { doShowLogin } from '../../redux/action/AppActions';
//import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';


import TabBuyer from './TabBuyer';
import TabSeller from './TabSeller';
import ScreenLogin from '../login/ScreenLogin';
import CollapseChoice from '../principal/CollapseChoice';
import PrincipalBuy from '../principal/PrincipalBuy';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const fromToptoBottom = (index, position) => {
    const inputRange = [0, index, index + 1, index + 1];
    const opacity = position.interpolate({
      inputRange,
      outputRange: [1,1,1,1]
    })
    const translateY = position.interpolate({
      inputRange,
      outputRange: [2 * height, 0, 0, 0]
    })
  
    return {
      opacity,
      transform: [
        {translateY}
      ]
    }
  }

  const transitionConfig = () => {
    return {
      transitionSpec: {
        duration: 400,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
      },
      screenInterpolator: sceneProps => {
          const { position, layout, scene, index, scenes } = sceneProps
          const toIndex = index
          const thisSceneIndex = scene.index
          const height = layout.initHeight
          const width = layout.initWidth
    
          const translateX = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
            outputRange: [width, 0, 0]
          })
    
          // Since we want the card to take the same amount of time
          // to animate downwards no matter if it's 3rd on the stack
          // or 53rd, we interpolate over the entire range from 0 - thisSceneIndex
          const translateY = position.interpolate({
            inputRange: [0, thisSceneIndex],
            outputRange: [height, 0]
          })
    
          const slideFromRight = { transform: [{ translateX }] }
          const slideFromBottom = { transform: [{ translateY }] }
    
          const lastSceneIndex = scenes[scenes.length - 1].index
          
          // Test whether we're skipping back more than one screen
          if (lastSceneIndex - toIndex > 1) {
            // Do not transoform the screen being navigated to
            if (scene.index === toIndex) return
            // Hide all screens in between
            if (scene.index !== lastSceneIndex) return { opacity: 0 }
            // Slide top screen down
            return slideFromBottom
          }
    
          return slideFromRight
        },
}}

let scenes = {
  ScreenLogin: { screen: ScreenLogin },
  CollapseChoice : { screen: CollapseChoice },
  TabBuyer : { screen: TabBuyer },
  TabSeller : { screen: TabSeller }
}

/*
const InitNavigator = createStackNavigator (scenes, {        
    //transitionConfig: transConfig,
    initialRouteName: 'Login',
    navigationOptions: {
        gesturesEnabled: false
    }
});*/

const InitNavigator = StackNavigator(scenes, {
    initialRouteName: 'ScreenLogin',
    navigationOptions: {
        gesturesEnabled: false
      },
    transitionConfig: transitionConfig
  }
);



export default class InitialNavigator extends Component {
    
    constructor(props) {
        super(props);
    }
    
    
    render() {    
        return (
            <InitNavigator screenProps={this.props}></InitNavigator>
        );
      }
}