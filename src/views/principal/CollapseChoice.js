import React, { Component } from 'react';
import {
    ImageBackground,
    Dimensions,
    Text,
    StyleSheet,
    ScrollView,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import HeaderApp from '../../components/HeaderApp';

const bkApp = require('../../components/images/backgroundApp.png');
const btnBuy = require('../../components/images/btnChoiceBuy.png');
const btnSell = require('../../components/images/btnChoiceSell.png');
const ImgHeight = Dimensions.get('window').height;
const ImgWidth = Dimensions.get('window').width;

let self = null;

export default class ChoiceProfile extends Component {
    
    static navigationOptions = {
        header: null,         
    }

    constructor(props) {

        super(props);
        
        this.state = {
            isHiddenSell: true,
            isHiddenBuy: true,
            valueOperation: '0',            
        };

        self = this;    
    }
    
    ShowHideSellTextComponentView = () => {        
        
        if(this.state.isHiddenSell == false)
        {
            this.setState({isHiddenBuy: true});
            this.setState({isHiddenSell: true});  
            this.setState({ valueOperation: '0' });          
        }
        else
        {
            this.setState({ valueOperation: 'sp' });
            this.setState({isHiddenBuy: true});
            this.setState({isHiddenSell: false});
        }
    }

    ShowHideBuyTextComponentView = () => {        
        
        if(this.state.isHiddenBuy == false)
        {            
            this.setState({isHiddenSell: true});            
            this.setState({isHiddenBuy: true});
            this.setState({ valueOperation: '0' });                      
        }
        else
        {            
            this.setState({ valueOperation: 'bp' });
            this.setState({isHiddenSell: true})            
            this.setState({isHiddenBuy: false})
        }
    }

    GoToAnotherScene = () => {
        if( this.state.valueOperation == '0') {
            alert('Informe se deseja vender ou comprar Produtos ou Serviços.');
        } else {            
            
            
            if(this.state.valueOperation.substr(0, 1) == 'b'){
                alert('comprar');
                self.props.navigation.navigate(
                    'TabBuyer', { user_id : 1 }
                  );
            } else {
                self.props.navigation.navigate(
                    'TabSeller', { user_id : 1 }
                  );
            }
        

            
        }

    }

    render() {
        let { fadeAnim } = this.state;

        return (
            <ImageBackground source={bkApp} style={{ width: ImgWidth, height: ImgHeight}}>
                <HeaderApp/>
                <ScrollView style={{ height: '100%' }}>
                    <View style={{ flex: 1, marginTop: 15  }}>                    
                        <View style={Styles.blueColumn}>
                            <TouchableOpacity
                                onPress={this.ShowHideSellTextComponentView} 
                            >
                                <Image 
                                    source={btnSell}
                                    style= {Styles.imageBlock} />
                            </TouchableOpacity>
                        </View>                        
                        <View style={Styles.greenColumn}>
                            <TouchableOpacity
                                onPress={this.ShowHideBuyTextComponentView} 
                            >
                                <Image 
                                    source={btnBuy} 
                                    style= {Styles.imageBlock} />
                            </TouchableOpacity>
                        </View>                        
                        {
                            !this.state.isHiddenSell ?                             
                                <SwitchSelector
                                    initial={0}
                                    onPress={value => this.setState({ valueOperation: value })}
                                    textColor='#1919f9'
                                    selectedColor='#FFF'
                                    buttonColor='#1919f9'                                                      
                                    bold = 'true'                                          
                                    style={{ width: '110%', alignSelf: 'center', marginTop: 10 }}                                
                                    options={[
                                        { label: 'Produto', value: 'sp'}, //venda-produto
                                        { label: 'Serviço', value: 'ss'}  //venda-serviço
                                    ]} /> : null                                                                
                        }
                        {
                            !this.state.isHiddenBuy ?                             
                            <SwitchSelector
                                initial={0}
                                onPress={value => this.setState({ valueOperation: value })}
                                textColor='#f3720a'
                                selectedColor='#FFF'
                                buttonColor='#f3720a'                                                      
                                bold = 'true'                                          
                                style={{ width: '110%', alignSelf: 'center', marginTop: 10 }}                                
                                options={[
                                    { label: 'Produto', value: 'bp'}, //compra-produto
                                    { label: 'Serviço', value: 'bs'}  //compra-serviço
                                ]} /> : null 
                        }
                    </View>                                        
                </ScrollView>                  
                <View style={Styles.footer}>                 
                        <View style={Styles.containerDown}>                
                        <TouchableOpacity                        
                        onPress={this.GoToAnotherScene} 
                        >
                            <Text style={Styles.textAdress}>  PROSSEGUIR </Text>
                            </TouchableOpacity>
                        </View>                                  
                </View> 
            </ImageBackground>                
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: 1
    },
    block: {        
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
        height: Dimensions.get('window').height / 3
    },
    blueColumn: {
        alignItems: 'center',          
          justifyContent: 'center',
          height: Dimensions.get('window').height / 3
    },      
    greenColumn: {
        alignItems: 'center',        
        justifyContent: 'center',
        height: Dimensions.get('window').height / 3
    },
    imageBlock: {
        width: ImgWidth * 0.50,
        height: ImgWidth * 0.50
    },
    footer: {        
        height: 60,
        marginBottom: 0,
        backgroundColor: '#32cd32',
        flexDirection: 'row'
    },
    containerDown: {
        flex: 1,        
        alignItems: 'center'
      },
    textAdress : {
        marginTop: 5,
        fontSize: 15,
        color: '#FFF'
    },
    pin : {
        marginTop: 5,
        marginLeft: 5,
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:8,
        paddingRight:8        
    }

});