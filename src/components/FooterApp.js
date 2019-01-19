import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
//import LinearGradient from "react-native-linear-gradient";

const pinSmall = require('./images/pin.png');

const HeaderApp = props => {

  return (
    <View
      style={{
        height: 56,
        marginBottom: 0
      }}
    >
    
        <View style={Styles.footer}>
            <Image
                source={pinSmall}
                style={Styles.pin}
            />                
            <View style={Styles.container}>                
                <Text style={Styles.textAdress}> Teste </Text>
            </View>          
        </View>
      
    </View>
  );
};

const Styles = StyleSheet.create({
    footer: {        
        height: 40,
        backgroundColor: '#ff3300',
        flexDirection: 'row'
    },
    container: {
        flex: 1,        
        alignItems: 'center'
      },
    textAdress : {
        marginTop: 5,
        fontSize: 15,
        color: '#FFF'
    },
    pin : {
        marginTop: 5,
        marginLeft: 5,
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:8,
        paddingRight:8        
    }
})

export default HeaderApp;