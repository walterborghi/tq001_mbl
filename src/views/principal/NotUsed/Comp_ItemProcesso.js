import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Moment from 'moment';

import stylesL from '../stylesL';

const params = null;
const itemProc = null;
const self = null;

class  Comp_ItemProcesso extends Component {
  
  
  constructor(props) {
        super(props);     
        self = this;
  }
  
  componentDidMount() {
    
  }
  
  navegar() {
    alert('xxxx');
  }
  
  _showDetailsProc(paramItem) {    	    
    const { navigate } = self.props.screenProps.navigation;         
    navigate('ScreenAndamentosProc', {paramItem})
  }
  
  render () {
    itemProc = this.props.itemDetail;
    const idProcesso = itemProc.codigo;
    
    return (
      <View> 
        <TouchableOpacity
              onPress={(row) => this._showDetailsProc(idProcesso)}
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
            <Text style={stylesL.textoValor}>{itemProc.parteContraria}</Text>
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
  }
});

const mapStateToProps = state => (
  {
    userData: state.HomeReducer.userData,
    loading: state.HomeReducer.loading,
    user_id: state.HomeReducer.user_id
  }
)

export default connect(mapStateToProps)(Comp_ItemProcesso);
