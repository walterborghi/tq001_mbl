import React, { Component, } from 'react'
import { Text, Dimensions, Image } from 'react-native'
import { TabNavigator } from 'react-navigation';

import BuyerScreenProduct from '../principal/BuyerScreenProduct';
import BuyerScreenService from '../principal/BuyerScreenService';

const ImgProdOn = require('../../../images/tabBar_buy_prod_on.png');
const ImgProdOff = require('../../../images/tabBar_buy_prod_off.png');


const ImgServOn = require('../../../images/tabBar_buy_serv_on.png');
const ImgServOff = require('../../../images/tabBar_buy_serv_off.png');

const ImgPublicsOn = require('../../../images/tabbar_debitos_on3x.png');
const ImgPublicsOff = require('../../../images/tabbar_debitos_off3x.png');

const ImgAccountOn = require('../../../images/tabbar_conta_on3x.png');
const ImgAccountOff = require('../../../images/tabbar_conta_off3x.png');

const sizeHeight = Dimensions.get('window').height;
const sizeWidth = Dimensions.get('window').width;

const TabBuyer = TabNavigator({
  BuyerScreenProduct: { 
    screen: BuyerScreenProduct, 
    navigationOptions: {
      showLabel: true,
      showIcon: true,
      headerLeft: null,      
      title: 'Produtos',
      selectedIcon: <Image
        source={ImgProdOn}
        style={{ height: 25, width: 25 }}
        resizeMode="cover"
      />,
    tabBarIcon: <Image
      source={ImgProdOff}
      style={{ height: 25, width: 25 }}
      resizeMode="cover" 
    />   
    }
  },
  BuyerScreenService: { 
    screen: BuyerScreenService, 
    navigationOptions: {
      showLabel: true,
      showIcon: true,
      title: 'Serviços.',
      selectedIcon: <Image 
        source={ImgServOn} 
        style={{ height: 25, width: 25 }} 
        resizeMode="cover" 
      />, 
      tabBarIcon: <Image 
        source={ImgServOff} 
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
      backgroundColor: '#f3720a',
      //height: 60
      height: sizeHeight / 10
    }
  }
});

// topo - navegação 
TabBuyer.navigationOptions = ({ navigation, screenProps}) => ({          
      headerStyle: {
        backgroundColor: '#f3720a',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        height: 40        
      },         
      headerLeft: null,
      headerTitle:(
        <Text style={{ marginLeft: 5, fontSize: 15, color: '#FFF', fontWeight: 'bold' }}>Meu Endereço, 123 - Casa</Text>
      )
})


export default TabBuyer;
