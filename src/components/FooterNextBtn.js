import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
//import LinearGradient from "react-native-linear-gradient";

const pinSmall = require('./images/pin.png');

const FooterNext = props => {

  return (
    <View
      style={{
        height: 56,
        marginBottom: 0
      }}
    >
    
        <View style={Styles.footer}>                 
                <View style={Styles.container}>                
                <TouchableOpacity
                onPress={() => alert('Clicado')}
                >
                    <Text style={Styles.textAdress}>  PROSSEGUIR </Text>
                    </TouchableOpacity>
                </View>          
                   
        </View>
      
    </View>
  );
};

const Styles = StyleSheet.create({
    footer: {        
        height: 40,
        backgroundColor: '#32cd32',
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

export default FooterNext;