import React from "react";
import { View, Platform, StyleSheet, TouchableOpacity, Image } from "react-native";
//import LinearGradient from "react-native-linear-gradient";

const logoSmall = require('./images/smallWhiteLogo.png');

const HeaderApp = props => {

  return (
    <View
      style={{
        height: 56,
        marginTop: Platform.OS == "ios" ? 20 : 0
      }}
    >
      
        <View style={Styles.Header}>
          <TouchableOpacity 
              onPress={() => alert('teste')}>
              
              <Image 
                source={logoSmall}
                style={Styles.LogoImage}
              />
          </TouchableOpacity>  
        </View>
      
    </View>
  );
};

const Styles = StyleSheet.create({
    Header: {
        height: 40,
        backgroundColor: '#32cd32'
    },
    LogoImage : {
      marginTop: Platform.OS == "ios" ? 20 : 5,
      marginLeft: 10
    }
})

export default HeaderApp;