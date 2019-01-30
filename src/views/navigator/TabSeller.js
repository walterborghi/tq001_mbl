import React, { Component, } from 'react'
import { View, Dimensions, Image } from 'react-native'
import { TabNavigator } from 'react-navigation';

import SellerScreenProduct from '../principal/SellerScreenProduct';
import SellerScreenService from '../principal/SellerScreenService';

const ImgHomeOn = require('../../../images/tabbar_home_on3x.png');
const ImgHomeOff = require('../../../images/tabbar_home_off3x.png');

const ImgProcessOn = require('../../../images/tabbar_historico_on3x.png');
const ImgProcessOff = require('../../../images/tabbar_historico_off3x.png');

const ImgPublicsOn = require('../../../images/tabbar_debitos_on3x.png');
const ImgPublicsOff = require('../../../images/tabbar_debitos_off3x.png');

const ImgAccountOn = require('../../../images/tabbar_conta_on3x.png');
const ImgAccountOff = require('../../../images/tabbar_conta_off3x.png');




const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const TabSeller = TabNavigator({
  SellerScreenProduct: { 
    screen: SellerScreenProduct, 
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
  SellerScreenService: { 
    screen: SellerScreenService, 
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
