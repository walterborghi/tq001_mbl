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

const window = Dimensions.get('window');
const self = null;
const getData = null;
const getProcesso = null;

class ScreenHome extends Component {
  
  constructor(props) {
    super(props);    
    self = this; 
  }
  
  state = {
    userData: null,
    isLoading: false,
    fill: 75,
    itemDetail: null,
    procSearch: '',
    teste: '',
    listaProcessoState: [],
    processFilter: null,
    usuId: ''
  }

  
  _pesquisarProcesso() {

    const obj = {
      'idUser': this.state.usuId,
      'procSearch': this.state.procSearch
    }

    //self.props.getProcesso(self.props.user_id, this.state.procSearch);
    self.props.getProcesso(obj);

  }

    
  _adicionarProcesso() {    
    const { navigate } = this.props.navigation;
    navigate('ScreenProcessoAdd');      
  }
  
  _renderItemProcesso ({item, index}) {        
    return (
          <Comp_ItemProcesso screenProps={self.props} itemDetail={item} />
      );   
  }
  
  componentWillUnmount() {
  }
  
  componentWillMount() {
    //const x = self.props.getProcesso(2);
    //console.log('valor de x:');
    //console.log(x);
  };
  
  componentDidMount () {

    //var user_id = self.props.user_id;
/*
    if(user_id == 0) {
      user_id = self.props.navigation.state.params.user_id;
      this.setState({usuId: user_id});
    }        

    self.props.getData(user_id);  
    
    const obj = {
      'idUser': '1',
      'procSearch': '1'
    }

    self.props.getProcesso(obj);
*/
    var token;
    var os;

  }
  
  

  render () {

    const values = self.props.userData;
    const valores = self.props.processFilter;

    var user_id = self.props.user_id;    
    
    if(user_id == 0) {
      user_id = self.props.navigation.state.params.user_id;
    }

    if(values != null)
    { 
        return (
          <View style={stylesL.scene}>
            <Text>SecreenHome</Text>
          </View>
        );
      }
      else
      {
          return (
            <Text>bllllaaaa</Text>
          );        
      }
    
    }
}

const styles = StyleSheet.create({
  top: {
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    marginLeft: 1
  },
  lupa: {
    height: 30,
    width: 30,
    padding: 10,
    marginLeft: 10,
    marginTop: 15,
    marginRight: 5
  },
  add: {
    height: 27,
    width: 27,
    padding: 10,
    marginLeft: 10,
    marginTop: 15,
    marginRight: 5
  }
});

const mapStateToProps = state => (
  {
    userData: state.HomeReducer.userData,
    loading: state.HomeReducer.loading,
    user_id: state.HomeReducer.user_id,
    itemDetail: state.HomeReducer.itemDetail,
    processFilter: state.HomeReducer.processFilter
  }
)

export default connect(mapStateToProps, { getData, getProcesso })(ScreenHome);