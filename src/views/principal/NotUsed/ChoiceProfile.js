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

import HeaderApp from '../../../components/HeaderApp';
import FooterApp from '../../../components/FooterApp';

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
            isHidden: true,
        };

        self = this;    
    }

    ShowHideTextComponentView = () =>{
        
        
        if(this.state.isHidden == false)
        {
          this.setState({isHidden: true})
        }
        else
        {
          this.setState({isHidden: false})
        }
      }

    render() {
        return (
            <ImageBackground source={bkApp} style={{ width: ImgWidth, height: ImgHeight}}>
                <HeaderApp/>
                <ScrollView style={{ height: '100%' }}>
                    <View style={{ flex: 1, marginTop: 15  }}>                    
                        <View style={Styles.blueColumn}>
                            <TouchableOpacity
                                onPress={this.ShowHideTextComponentView} 
                            >
                                <Image source={btnSell} />
                            </TouchableOpacity>
                        </View>
                        {
                            !this.state.isHidden ? 
                            <SwitchSelector
                                initial={0}
                                onPress={value => this.setState({ gender: value })}
                                textColor='#7a44cf'
                                selectedColor='#FFF'
                                buttonColor='#7a44cf'
                                borderColor='#7a44cf'
                                hasPadding
                                options={[
                                    { label: 'Produto', value: 'f'}, //images.feminino = require('./path_to/assets/img/feminino.png')
                                    { label: 'Serviço', value: 'm'} //images.masculino = require('./path_to/assets/img/masculino.png')
                                ]} /> : null
                        }
                        <View style={Styles.greenColumn}>
                            <TouchableOpacity
                                onPress={this.ShowHideTextComponentView} 
                            >
                                <Image source={btnBuy} />
                            </TouchableOpacity>
                        </View>
                    </View>                    
                </ScrollView>                
                <FooterApp/>
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
      }
});