import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

//const logo = require('../../Imagens/article_icon.png');
const logo = require('../../../images/end-user-icon.jpg');

const Comp_TopoLogged = props => (
    
	<View style={styles.principal}>
      <View>
        <Image source={logo} style={styles.logoImg} />
      </View>		
	</View>
);

const styles = StyleSheet.create({
	principal: {
      justifyContent: 'center',
      flex: 1
	},
	texto: {
		color: 'blue',
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold'
	}
});

export default Comp_TopoLogged;
