import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image  } from 'react-native';
import { connect } from 'react-redux';
import Moment from 'moment';

const params = null;
const self = null;

class  CompSellItem extends Component {
    
  constructor(props) {
        super(props);
        self = this;
  }
  
  navegar() {
    alert('xxxx');
  }
  
  _showDetailsProc(cod) {
      alert('aaa_Cod: ' + cod);
  }
  
  render () {
    itemProc = this.props.itemDetail;
    
    console.log('itemProc');
    console.log(itemProc);
    
    let idProcesso = itemProc.id;
    console.log('idProcesso');
    console.log(idProcesso);

    return (
      <View> 
        <TouchableOpacity
              onPress={() => this._showDetailsProc(idProcesso)}
              >
        <View style={styles.itemPrincipal}>
          <View>
            <View style={{ marginRight: 70 }} >
              <Text>Cliente:</Text>
              <Text>{itemProc.local}</Text>
            </View>
            <View>
              <Text>Data:</Text>
              <Text>{itemProc.resumo}</Text>
            </View>
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

export default connect(mapStateToProps)(CompSellItem);
