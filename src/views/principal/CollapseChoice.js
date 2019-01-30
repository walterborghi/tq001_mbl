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

const bkApp = require('../../../images/backgroundApp.png');
const btnBuy = require('../../../images/btnChoiceBuy.png');
const btnSell = require('../../../images/btnChoiceSell.png');
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
    
    GoToSellComponentView = () => {        

        self.props.navigation.navigate(
            'TabSeller', { user_id : 1 }
        );        
    }

    GoToBuyComponentView = () => {        

        self.props.navigation.navigate(
            'TabBuyer', { user_id : 1 }
          );
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
                                onPress={this.GoToSellComponentView} 
                            >
                                <Image 
                                    source={btnSell}
                                    style= {Styles.imageBlock} />
                            </TouchableOpacity>
                        </View>                        
                        <View style={Styles.greenColumn}>
                            <TouchableOpacity
                                onPress={this.GoToBuyComponentView} 
                            >
                                <Image 
                                    source={btnBuy} 
                                    style= {Styles.imageBlock} />
                            </TouchableOpacity>
                        </View>                        
                    </View>                                        
                </ScrollView>                                 
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
          height: Dimensions.get('window').height / 3,
          marginTop: Dimensions.get('window').height / 13
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