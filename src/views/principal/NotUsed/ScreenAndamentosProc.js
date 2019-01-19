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
import Moment from 'moment';
import { connect } from 'react-redux';
import stylesL from '../stylesL';

const window = Dimensions.get('window');
const self = null;

const andsList = null;
const getData = null;
const ImgLogoBlue = require('../../../images/blueLegal2.png');


class ScreenAndamentosProc extends Component {
  

  static navigationOptions = ({navigation, screenProps}) => {
      
      const {params = {}} = navigation.state;
      console.log('a');  
    
      return {
          headerStyle: {
          backgroundColor: '#0f5380',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0,
          shadowRadius: 0,
          elevation: 0
        },         
        headerLeft: null,
        headerTitle:(
          <Image style={{height: 60, flex: 1, resizeMode:'contain', alignSelf: 'center'}} source={ImgLogoBlue}/>
        )      
    };
  }
  
  constructor(props) {
    super(props);
    self = this; 
    
    this.state = { 
      listAndamento: null
    };
    console.log('constructor' + self);  
  }
  
  state = {
    userData: null,
    isLoading: false,
    fill: 75,
    teste: '',
    listAndamento: ''
  }
  

  componentDidMount() {    

    this.setState({ teste: 'fuck'})
    
    fetch('https://lt94jam68c.execute-api.us-east-2.amazonaws.com/Prod/api/andamento/ListarAndamentos?codProcesso=2')
      .then((response) => response.json())
      .then((responseJson) => {      
      //listAndamento = responseJson.data;
      this.setState({ listAndamento: responseJson.data })
      //console.log(listAndamento);
    })
    .catch((error) => {
      console.error(error);
    });
    
    //console.log(this.getAndamentos);
    
    
  }
  
  _renderAndamentosProcesso ({ item, index }) {    
    return (
      <View style={{ backgroundColor: '#FFF', padding: 5, marginBottom: 3 }}>
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <Text style={stylesL.textoLabel}>Data:</Text>
            <Text style={stylesL.textoValor}>{Moment(item.data).format('DD/MM/YYYY')}</Text>
            <Text style={stylesL.textoLabelRight}>Tipo:</Text>
            <Text style={stylesL.textoValor}>{item.tipo}</Text>
        </View>        
        <View style={{ marginTop: 10 }}>
          <Text style={stylesL.textoValor}>{item.texto}</Text>
        </View>        
      </View>
    );   
  }
  
  render () {
    const values = null; //this.props.userData;    
    console.log('lista: ');
    //console.log(values);
    console.log(this.state.listAndamento);
    //console.log(listAndamento);
      
    
    return (
      <View style={stylesL.scene}>
        <View style={stylesL.container}>
          <View style={{ flex: 1 }}>
            <FlatList 
              style={{flex: 1}}              
              data = {this.state.listAndamento}
              refreshing={false}
              //ListHeaderComponent={this._renderAndamentosProcesso()}
              onRefresh={() => this.props.getData(user_id)}
              keyExtractor={item => item.codigo}
              renderItem={this._renderAndamentosProcesso}
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

export default connect(mapStateToProps, { getData })(ScreenAndamentosProc);