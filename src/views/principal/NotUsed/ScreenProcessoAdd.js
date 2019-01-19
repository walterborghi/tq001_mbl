import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Image, FlatList,
  TouchableOpacity,
  TextInput,  
  ScrollView,
  Dimensions
  } from 'react-native';
import PopupDialog, {
  DialogTitle,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
  FadeAnimation,
} from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
const scaleAnimation = new ScaleAnimation();
const fadeAnimation = new FadeAnimation({ animationDuration: 150 });

import stylesL from '../stylesL';
import Comp_ItemProcessoAdd  from './Comp_ItemProcessoAdd';

const lupa = require('../../../images/loupe.png');
const editCli = require('../../../images/editPencil.png');
const add = require('../../../images/round-add-button.png');

const window = Dimensions.get('window');
const self = null;

const getData = null;
const setSelectedCobranca = null;

class ScreenProcessoAdd extends Component {

  static navigationOptions = ({navigation }) => {  
      
      const {params = {}} = navigation.state;
      return {
      backgroundColor: '#0f5380',
      headerTintColor: '#FFF',
      headerTitleStyle: { color: '#FFF', },

      headerTitle: (
          <Text style={stylesL.textoHeader}>Pesquisar/Adicionar Processos</Text>
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
    searchScreenShow: true,
    textClientButton: 'Selecione um cliente',
    clienteId: 0,

    processo: '',
    parte: '',
    listProcessos: null  
  };  

  showScaleAnimationDialog = () => {
    this.scaleAnimationDialog.show();
  }

  showSlideAnimationDialog = () => {
    this.slideAnimationDialog.show();
  }

  showFadeAnimationDialog = () => {
    this.fadeAnimationDialog.show();
  }

  _changeTextClient(nome, id) {
    this.setState( {textClientButton : nome});
    this.setState( {clienteId : id});

    this.slideAnimationDialog.dismiss();
  }

  _renderItemCliente ({item, index}) {  

    let idRow = item.codigo;
    let nameRow = item.cliente;    

    return (
      <View>
        <TouchableOpacity
            onPress={(row) => self._changeTextClient(nameRow, idRow) }            
            >
          <Text style={styles.client}>{ nameRow }</Text>
        </TouchableOpacity>
      </View>
        
      );   
  }

  _renderProcessSearch(idCli, processo, parte) {
    if(idCli == 0 && processo == '' && parte == '') {
      alert('Preencha ao menos um dos campos de pesquisa.');
      return false;
    } else {
      //alert('carregando lista');
      this._fetchProcessos();
    }    
  }

  _renderItemProcesso ({item, index}) {
    //console.log(propsValues);
    return (
          <Comp_ItemProcessoAdd screenProps={self.props} itemDetail={item} />
        );   
  }

  _fetchProcessos() {
    let xList = null;

    fetch('https://lt94jam68c.execute-api.us-east-2.amazonaws.com/Prod/api/processo/ListarMeusProcessos',
    {
      method: 'POST', 
      timeout: 500000, 
      headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json' 
              },
      body: JSON.stringify({
        'codigo': "1"
      }),
    })    
    .then((response) => response.json())
    .then((responseJson) => {          
      this.setState({ listProcessos: responseJson.data })   
      
      if(this.state.listProcessos != null)
      {
        const { navigate } = self.props.navigation;
        navigate('ScreenListaProcessosPsq', {teste: this.state.listProcessos, teste2: 'porra' } );   
      }
    })
    .catch((error) => {
      console.error(error);
    });

    

  }

  render() {
    const values = this.props.userData;

    return (
      <View style={stylesL.scene}>
        <View>
          <View style={stylesL.topo}>   
            <View style={{ marginTop: 5, marginLeft: 8 }}>
              <Text style={{fontFamily: 'Myriad Pro',color: '#757575', marginTop: 5 }}>Cliente</Text>
              <TextInput
                //placeholder="Selecione o cliente no botão ao lado"
                style={styles.inputWithImage}
                underlineColorAndroid='transparent' 
                placeholderTextColor='#c7c7c7' 
                autoCapitalize={'none'}
                //editable={false}               
                value={this.state.textClientButton}              
                autoCorrect={false}
              />                 
            </View>
              <TouchableOpacity              
                onPress={this.showSlideAnimationDialog}
                >
                <Image source={editCli} style={styles.add} />
              </TouchableOpacity>
              <PopupDialog              
                  ref={(popupDialog) => {
                      this.slideAnimationDialog = popupDialog;
                    }
                  }
                  dialogAnimation={slideAnimation}
                  dialogTitle={<DialogTitle title="Clientes" titleTextStyle={{ fontSize: 20 }} />}
                  actions={
                    [
                      <DialogButton
                        text="Cancelar"
                        textStyle={{ fontSize: 16 }}
                        onPress={() => {
                          this._changeTextClient('Selecione um cliente', '-1')
                          //this.slideAnimationDialog.dismiss();
                        }}
                        key="button-1"
                      />,
                    ]
                  }              
                >   
                <FlatList                     
                  data = {values.listProcesso}
                  refreshing={false}
                  //ListHeaderComponent={this._renderItemProcesso()}
                  //onRefresh={() => this.props.getData(user_id)}
                  keyExtractor={item => item.codigo}
                  renderItem={this._renderItemCliente}
                />
              </PopupDialog>

          </View>
                    
          <View style={{ marginTop: 5, marginLeft: 8 }}>
              <Text style={{fontFamily: 'Myriad Pro',color: '#757575'}}>Processo</Text>
              <TextInput
                placeholder="Insira o número de processo"
                style={styles.input}
                underlineColorAndroid='transparent' 
                placeholderTextColor='#c7c7c7' 
                autoCapitalize={'none'}
                onChangeText={processo => this.setState({ processo })}
                //value={this.state.processo}
                //type={'money'}
                autoCorrect={false}
              />
          </View>

          <View style={{ marginTop: 5, marginLeft: 8 }}>
              <Text style={{fontFamily: 'Myriad Pro',color: '#757575'}}>Parte</Text>
              <TextInput
                        placeholder="Insira o nome da parte contrária"
                        style={styles.input}
                        underlineColorAndroid='transparent' 
                        placeholderTextColor='#c7c7c7' 
                        autoCapitalize={'none'}
                        onChangeText={parte => this.setState({ parte })}
                        //value={this.state.valor_entrada}
                        //type={'money'}
                        autoCorrect={false}
                      />
          </View>
          <TouchableOpacity 
              onPress={() => this._renderProcessSearch(this.state.clienteId, this.state.processo, this.state.parte) }>
              <View style={stylesL.button}>
                <Text style={stylesL.btnSearch}>Pesquisar</Text>              
              </View>
          </TouchableOpacity>
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
  },
  imgEdit: {
    height: 30,
    width: 30,
    flex: 1,
    padding: 10,
    marginLeft: 10,
    marginTop: 5,
    marginRight: 5
  },
  add: {
    height: 27,
    width: 27,
    padding: 10,
    marginLeft: 10,
    marginTop: 40,
    marginRight: 5
  },
  input: {
    borderColor: '#c7c7c7',
    borderWidth: 1,
    borderRadius: 3,    
    padding: 5,    
    marginTop: 5,
    marginRight: 8,
    fontFamily: 'Myriad Pro',
  },
  inputWithImage: {
    width: window.width - 50,
    borderColor: '#c7c7c7',
    borderWidth: 1,
    borderRadius: 3,    
    padding: 5,    
    marginTop: 5,
    fontFamily: 'Myriad Pro',
  },
  client: {
    fontFamily: 'Myriad Pro',
    alignItems: 'center',
    backgroundColor: '#dbeaf9',
    flex: 1,
    flexGrow: 1,
    margin: 4,
    padding: 20
  },

container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
  },
  navigationTitle: {
    padding: 10,
  },
  navigationButton: {
    padding: 10,
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40,
  },
  navigator: {
    flex: 1,
    // backgroundColor: '#000000',
  },


});

const mapStateToProps = state => (
  {
    userData: state.HomeReducer.userData,
    loading: state.HomeReducer.loading,
    user_id: state.HomeReducer.user_id
  }
)

export default connect(mapStateToProps, { getData, setSelectedCobranca })(ScreenProcessoAdd);