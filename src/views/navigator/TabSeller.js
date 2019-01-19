import React, { Component, } from 'react'
import { View, Dimensions, Image } from 'react-native'
import { TabNavigator } from 'react-navigation';

import ScreenHome from '../principal/ScreenHome';
import ScreenProcess from '../principal/ScreenMeusProcessos';

const ImgHomeOn = require('../../components/images/tabbar_home_on3x.png');
const ImgHomeOff = require('../../components/images/tabbar_home_off3x.png');

const ImgProcessOn = require('../../components/images/tabbar_historico_on3x.png');
const ImgProcessOff = require('../../components/images/tabbar_historico_off3x.png');

const ImgPublicsOn = require('../../components/images/tabbar_debitos_on3x.png');
const ImgPublicsOff = require('../../components/images/tabbar_debitos_off3x.png');

const ImgAccountOn = require('../../components/images/tabbar_conta_on3x.png');
const ImgAccountOff = require('../../components/images/tabbar_conta_off3x.png');




const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const TabSeller = TabNavigator({
  ScreenHome: { 
    screen: ScreenHome, 
    navigationOptions: {
      showLabel: true,
      showIcon: true,
      headerLeft: null,
      title: 'Produtos',
      selectedIcon: <Image
        source={ImgHomeOn}
        style={{ height: 20, width: 20 }}
        resizeMode="cover"
      />,
      tabBarIcon: <Image
        source={ImgHomeOff}
        style={{ height: 20, width: 20 }}
        resizeMode="cover" 
      />   
    }
  },
  ScreenProcess: { 
    screen: ScreenProcess, 
    navigationOptions: {
      showLabel: true,
      showIcon: true,
      title: 'Serviços.',
      selectedIcon: <Image 
        source={ImgProcessOn} 
        style={{ height: 20, width: 20 }} 
        resizeMode="cover" 
      />, 
      tabBarIcon: <Image 
        source={ImgProcessOff} 
        style={{ height: 20, width: 20 }} 
        resizeMode="cover" 
      />
      
    }
  }
} ,
  {
      tabBarPosition: 'bottom',         
      swipeEnabled: false,
      animationEnabled: false,
      lazy: true,
      tabBarOptions: {      
        showLabel: true,
        showIcon: true,
        style: {
          backgroundColor: '#0f5380',
        }
      }
  }
);

// topo - navegação 

TabSeller.navigationOptions = ({ navigation, screenProps}) => ({          
      headerStyle: {
        backgroundColor: '#32cd32',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0
      },         
      headerLeft: null,
      headerTitle:(
        <Image style={{height: 60, flex: 1, resizeMode:'contain', alignSelf: 'center'}} />
      )
})


export default TabSeller;