import React, { Component } from 'react';
import {
  Image,
  Dimensions,
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import stylesL from './stylesL';
//import Comp_ItemMeusProcs  from './NotUsed/Comp_ItemMeusProcs';

const window = Dimensions.get('window');
const self = null;

const getData = null;
const setSelectedCobranca = null;


class SellerScreenService extends Component {
  
  constructor(props) {
    super(props);    
    self = this; 
  }
  
  state = {
    userData: null,
    isLoading: false,
    fill: 75,
  }
  
  _pesquisarProcesso() {
    alert('pesquisar');
  }
  
  _adicionarProcesso() {
    alert('adicionar');
  }
  
  _renderItemProcesso () {
    //console.log(propsValues);
    return (
          //<Comp_ItemMeusProcs screenProps={this.props} />
          <Text>Retorno</Text>
        );   
  }
  
  
  render () {
    const values = null; //this.props.userData;       
    
    return (
      <View style={stylesL.scene}>
        <Text>Fuck</Text>
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    userData: state.HomeReducer.userData,
    loading: state.HomeReducer.loading,
    user_id: state.HomeReducer.user_id
  }
)

export default connect(mapStateToProps, { getData, setSelectedCobranca })(SellerScreenService);