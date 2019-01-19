import React , { Component } from 'react';
import { View, Text } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

export default class Teste extends Component {

    constructor(props) {
        super(props);        
        alert('xxxxx');
    }

    render () {
        return (
            
                <SwitchSelector
                    initial={0}
                    //onPress={value => this.setState({ gender: value })}
                    textColor='#7a44cf'
                    selectedColor='#FFF'
                    buttonColor='#7a44cf'
                    borderColor='#7a44cf'
                    hasPadding
                    options={[
                        { label: 'Produto', value: 'f'}, //images.feminino = require('./path_to/assets/img/feminino.png')
                        { label: 'Serviço', value: 'm'} //images.masculino = require('./path_to/assets/img/masculino.png')
                ]} />
            
        );
    }
}