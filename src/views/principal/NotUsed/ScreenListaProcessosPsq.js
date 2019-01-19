import React, { Component } from 'react';
import { View, Text, FlatList  } from 'react-native';
import { connect } from 'react-redux';

import stylesL from '../stylesL';
import Comp_ItemProcessoAdd  from './Comp_ItemProcessoAdd';

const listagemProcessos = [];

class ScreenListaProcessosPsq extends Component {

    constructor(props) {
        super(props);
        self = this; 
    }

    state = {        
        listaPesquisada: ''
    };

    componentWillMount() {
        console.log('abrindo psq');        
        console.log(this.props);
        console.log(this.props.navigation.state.params.teste);

        

        console.log('array:' + this.state.listaPesquisada);

    };
      

    

    _renderItemProcesso ({item, index}) {
                
        return (
            <Comp_ItemProcessoAdd screenProps={self.props} itemDetail={item} />
        );   
    }

    componentDidMount () {        
        listagemProcessos = this.props.navigation.state.params.teste;
        console.log('stateNav: ' + this.props.navigation.state.params.teste);
        console.log('varListagem: ' + listagemProcessos);
    }

    static navigationOptions = ({navigation, screenProps }) => {  
      
        const {params = {}} = navigation.state;
        
        return {
        backgroundColor: '#0f5380',
        headerTintColor: '#FFF',
        headerTitleStyle: { color: '#FFF', },
  
        headerTitle: (
            <Text style={stylesL.textoHeader}> Processos encontrados </Text>
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

    render () {
        const values = this.props.navigation.state.params;

        return (
            <View style={stylesL.scene}>
                <View style={stylesL.container}>
                    <View style={{ flex: 1 }}>
                        <FlatList 
                        style={{flex: 1,}}
                        data = {values.teste}
                        refreshing={false}
                        //ListHeaderComponent={this._renderItemProcesso()}
                        //onRefresh={() => this.props.getData(user_id)}
                        keyExtractor={item => item.codigo}
                        renderItem={this._renderItemProcesso}
                        />
                    </View>
                </View>
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
  
  export default connect(mapStateToProps)(ScreenListaProcessosPsq);