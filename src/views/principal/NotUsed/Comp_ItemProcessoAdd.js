import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image  } from 'react-native';
import { connect } from 'react-redux';
import Moment from 'moment';
import stylesL from '../stylesL';

const params = null;
const self = null;

const add = require('../../../images/add_process.png');

class  Comp_ItemProcessoAdd extends Component {
  
  
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
  
  _adicionarProcesso(id) {
    console.log('iiiiiid:' + id);
    alert('Adicionado:' + id);
  }

  render () {
    itemProc = this.props.itemDetail;
    console.log('itemProc');
    console.log(itemProc);
    
    let idProcesso = itemProc.codigo;
    console.log('idProcesso');
    console.log(idProcesso);

    return (
      <View> 
        <TouchableOpacity
              onPress={() => this._showDetailsProc()}
              >
        <View style={styles.itemPrincipal}>
          <View style={{ flexDirection: 'row'}}>
            <View style={{ marginRight: 70 }} >
              <Text style={stylesL.textoLabel}>Cliente:</Text>
              <Text style={stylesL.textoValor}>{itemProc.cliente}</Text>
            </View>
            <View>
              <Text style={stylesL.textoLabel}>Data:</Text>
              <Text style={stylesL.textoValor}>{Moment(itemProc.data).format("DD/MM/YYYY")}</Text>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={stylesL.textoLabel}>Processo:</Text>
            <Text style={stylesL.textoValor}>{itemProc.numProcesso}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={stylesL.textoLabel}>Parte contrária:</Text>
          </View>          
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
            <Text style={stylesL.textoValorLocal}>{itemProc.parteContraria}</Text>
            <TouchableOpacity
                onPress={()=> self._adicionarProcesso(idProcesso)}                
              >
              <Image
                source={add} 
                style={{ 
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end'                  
                 }}
                />
            </TouchableOpacity>
          </View>          
        </View>
        </TouchableOpacity>
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
  textoValorLocal: {
    fontSize: 15,
    fontFamily: 'Palatino Linotype',  
    color: '#0f5380',
    flex: 3,
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

export default connect(mapStateToProps)(Comp_ItemProcessoAdd);
