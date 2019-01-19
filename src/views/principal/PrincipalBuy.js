import React, { Component } from 'react';
import {
  Image,
  Dimensions,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';





export default class ScreenPrincipal extends Component {
    constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation, screenProps }) => ({


      backgroundColor: '#0f5380',
      headerTintColor: '#000000',
      headerTitleStyle: { color: '#000000', },

      headerTitle: (
        <Image 
          style={{ height: 45, 
          resizeMode: 'contain', 
          alignSelf: 'center' }} 
          source={ImgLogoBlue} 
        />
      ),

      headerStyle: {

        backgroundColor: '#0f5380',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,

      },
      
    });

  render() {    
    return (
      <TabBarView />
    );
  }

}
