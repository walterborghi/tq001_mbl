import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { connect } from 'react-redux';
import stylesL from '../stylesL';

const params = null;
const imgDelete = require('../../../images/delete.png');


  let swipeBtns = [{
      text: 'Remover',
      backgroundColor: 'red',
      onPress: () => { alert('excluído]'); }
  }];
  

class  Comp_ItemMeusProcs extends Component {
  
  
  constructor(props) {
        super(props);        
        self = this;
  }
  
  navegar() {
    alert('xxxx');
  }
  
  _showDetailsProc() {
    
	//const { navigate } = this.props.navigation;	
     const { navigate } = this.props.screenProps.navigation;
	 navigate('ScreenAndamentosProc');    
  }
  
  
  render () {
    return (
      <View> 
        <Swipeout right={swipeBtns}
        
        backgroundColor= 'transparent'>
          <TouchableOpacity
                onPress={() => this._showDetailsProc()}
                >
          <View style={styles.itemPrincipal}>
            <View style={{ flexDirection: 'row'}}>
              <View style={{ marginRight: 70 }} >
                <Text style={stylesL.textoLabel}>Cliente:</Text>
                <Text style={stylesL.textoValor}>Banco BananAmericano</Text>
              </View>
              <View>
                <Text style={stylesL.textoLabel}>Qtd. Publics.:</Text>
                <Text style={styles.textoSintValor}>14</Text>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={stylesL.textoLabel}>Processo:</Text>
              <Text style={stylesL.textoValor}>220098.10938372.12384-0927</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={stylesL.textoLabel}>Parte contrária:</Text>                          
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
              <Text style={styles.textoValorLocal}>Walter Borghi Junior</Text>              
              <Text style={styles.textoDeslize}>deslize para excluir</Text>            
            </View>
          </View>
          </TouchableOpacity>
        </Swipeout>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    itemPrincipal: {        
    backgroundColor: '#FFF',
    height: 170, padding: 10,
    width: Dimensions.get('window').width - 30, margin: 5, marginTop: 20,
    borderRadius: 15,
    borderColor: '#EBEBEB',
    borderWidth: 1
  },
   textoSintValor: {
    fontSize: 15,
    fontFamily: 'Calibri',  
    color: '#0f5380',
    marginLeft: 60
  },
  textoDeslize: {
    color: '#d4d3d3',
    fontSize: 13,
    fontFamily: 'Palatino Linotype',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'                  
  },
  textoValorLocal: {
    fontSize: 15,
    fontFamily: 'Palatino Linotype',  
    color: '#0f5380',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});

const mapStateToProps = state => (
  {
    userData: state.HomeReducer.userData,
    loading: state.HomeReducer.loading,
    user_id: state.HomeReducer.user_id
  }
)

export default connect(mapStateToProps)(Comp_ItemMeusProcs);
