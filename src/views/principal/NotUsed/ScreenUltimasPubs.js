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
import stylesL from '../stylesL';

const window = Dimensions.get('window');
const self = null;

const getData = null;
const setSelectedCobranca = null;


class ScreenUltimasPubs extends Component {
  
  static navigationOptions = ({navigation}) => {
      
      const {params = {}} = navigation.state;

      
      return {
      backgroundColor: '#0f5380',
      headerTintColor: '#FFF',
      headerTitleStyle: { color: '#FFF', },

      headerTitle: (
          <Image style={{height: 45, resizeMode: 'contain', alignSelf: 'center'}} source={require("../../../images/blueLegal2.png")}/>
      ),

      headerStyle: {
        backgroundColor: '#0f5380',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.0,
        shadowRadius: 0,
        elevation: 0
      }      
    };
  }
  
  constructor(props) {
    super(props);
    self = this; 
  }
  
  state = {
    userData: null,
    isLoading: false,
    fill: 75,
  }
  
  _renderUltimasPublicacoes () {
    //console.log(propsValues);
    return (
      <View style={{ backgroundColor: '#FFF' }}>
        <View style={{ flexDirection: 'row' }}>
            <Text style={stylesL.textoLabel}>Data:</Text>
            <Text style={stylesL.textoValor}>Teste</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={stylesL.textoValor}>Andamento aandas dasda dadsa dad     dasd as das dsad ad as d ad  dsa da d  s da d a s ds dasdsadasdasdada  s adadsa   dasdas d</Text>
        </View>
      </View>
    );   
  }
  
  render () {
    const values = null; //this.props.userData;
    
    return (
      <View style={stylesL.scene}>
        <View style={stylesL.container}>
          <View style={{ flex: 1 }}>
            <FlatList 
              style={{flex: 1}}
              //data = {values.listCobrancas}
              data = {values}
              //refreshing={false}
              ListHeaderComponent={this._renderUltimasPublicacoes()}
              //onRefresh={() => this.props.getData(user_id)}
              //keyExtractor={item => item.identificador}
              //renderItem={this._renderItemCobranca}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    marginLeft: 1
  }
});

const mapStateToProps = state => (
  {
    userData: state.HomeReducer.userData,
    loading: state.HomeReducer.loading,
    user_id: state.HomeReducer.user_id
  }
)

export default connect(mapStateToProps, { getData, setSelectedCobranca })(ScreenUltimasPubs);