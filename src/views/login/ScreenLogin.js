import React, { Component } from 'react';
import {
    View,
	Text,
	Image,
	StyleSheet,
	CheckBox,
	TouchableOpacity,
	Dimensions,
    TextInput,
    KeyboardAvoidingView,
    Animated,
    Platform,
    Keyboard,
    AsyncStorage,
    ImageBackground
} from 'react-native';

import CookieManager from 'react-native-cookies';
import deviceSize from 'react-native-device-size';

const ImgHeight = Dimensions.get('window').height;
const ImgWidth = Dimensions.get('window').width;
const bkLogin = require('../../../images/background_login.png');
const btnLogin = require('../../../images/btnLogin.png');

let self = null;

const IMAGE_HEIGHT = (deviceSize == 'small' || deviceSize == 'xsmall' ? 90 : 144) //144;
const IMAGE_HEIGHT_SMALL = 0;
const PADDING_TOP = ((window.height - 350) / 2) - 40;
const PADDING_TOP2 = 40;

class ScreenLogin extends Component {
    
    static navigationOptions = {
        header: null,        
    }

    state = {
        opacity: 0,        
        username: '',
        password: '',
        message: null,
        called: false,        
    }

    constructor(props) {
        
        super(props);

        //this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
        //this.paddingTop = new Animated.Value(PADDING_TOP);
    
        self = this;    
    }

    doLogin(email, password) {
        
        CookieManager.clearAll()
        .then((res) => {
          console.log('CookieManager.clearAll =>', res);
        });
        
        Keyboard.dismiss; 
        //alert('email:' + email + " - pass: " + password);
        
        //const { navigate } = this.props.navigation; 
        this.setState({message : null, isLoading : true});
        let multi_set_pairs = [
          ['u', ''],
          ['p', ''],  
        ];
        
       // self.clearSearch();
        AsyncStorage.multiSet(multi_set_pairs, (err) => {
                        
            self.setState({message : null, isLoading : false});
            console.log('>>>>> indo para navegar');
            self.props.navigation.navigate(
              'CollapseChoice', { user_id : 1 }
            );
            
        });
  
        /*  
        if(email != '' && password != '')
        {  
            fetch('https://lt94jam68c.execute-api.us-east-2.amazonaws.com/Prod/api/usuario/ValidaUser',                   
            { 
                method: 'POST', 
                timeout: 500000, 
                headers: {
                        'Accept': 'application/json', 
                        'Content-Type': 'application/json' 
                        },
                body: JSON.stringify({
                  'login': email,
                  'pass' : password
                }),
            })
            .then((response) => response.json())
            .then((responseJson) => {
  
                console.log(responseJson);
  
                var token;
  
                CookieManager.get('https://lt94jam68c.execute-api.us-east-2.amazonaws.com/Prod')
                    .then((res) => {
                    token = res['.usr_ba'];
                    console.log('CookieManager.get =>', res['.usr_ba']); // => 'user_session=abcdefg; path=/;'
                });
              
                if(responseJson.error == null)
                {  
                    var _u = b64.encode(email);
                    var _p = b64.encode(password);
    
                    console.log("email:" + email);
                    console.log("password:" + password);
    
                    
                    let multi_set_pairs = [
                                        ['u', _u],
                                        ['p', _p],
                    ];
                    
                    
                    AsyncStorage.multiSet(multi_set_pairs, (err) => {
                        
                        self.setState({message : null, isLoading : false});
                        console.log('>>>>> indo para navegar');
                        self.props.navigation.navigate(
                            'ScreenPrincipal', { user_id : responseJson.data.codigo }
                        );  
                    });  
                }
                else
                {
                    console.log('nao achou');
                    this.setState({message : responseJson.error.mensagem, isLoading: false});
                }            
            });              
        } */
    }

    setOpacity() {
        clearInterval(this.interval2);
        this.interval = setInterval(() => self.changeOpacity(), 20);    
    }
    
    
    changeOpacity()
    {
        console.log('opacity>> ' + this.state.opacity);    
        if(this.state.opacity < 1)
        {
          var op = this.state.opacity;
    
          this.setState({opacity: op + 0.05});
        }
        else
        {
           clearInterval(this.interval);
        }
    }
    
    unsetOpacity() {    
        this.interval2 = setInterval(() => self.changeOpacity2(), 20);    
    }
    
    
    changeOpacity2()
    {
        console.log('opacity<< ' + this.state.opacity);    
        if(this.state.opacity > 0)
        {
          var op = this.state.opacity;
    
          this.setState({opacity: op - 0.05});
        }
        else
        {
           clearInterval(this.interval2);
        }
    }

    render () {
        
        return (
            <ImageBackground source={bkLogin} style={{ flex: 1, width: '100%', height: '100%', alignItems: 'stretch', justifyContent: 'center', }}>
                <View style={{ flex: 1, alignItems: 'stretch' }}>                        
                        <View style={{ height: 300}} />
                        <View style={{ height: 220, backgroundColor: 'transparent' }}>
                            <View style={styles.inputContainer}>
        	                    <TextInput
                                    placeholder="Usuário"
                                    style={styles.input}
                                    underlineColorAndroid='transparent'    
                                    placeholderTextColor='green'                                    
                                    keyboardType={'email-address'} 
                                    autoCapitalize={'none'}
                                    autoCorrect={false}
                                    onEndEditing={() => this.unsetOpacity()}
                                    onChangeText={(text) => this.setState({username : text})}
                                    onFocus={() => this.setOpacity()}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                              <TextInput
                                placeholder="Senha"                                
                                style={styles.input}
                                underlineColorAndroid='transparent'    
                                placeholderTextColor='green'                                    
                                onFocus={() => this.setOpacity()}
                                onEndEditing={() => this.unsetOpacity()}
                                onChangeText={(text) => this.setState({password : text})}
                                autoCapitalize={'none'}                                 
                                secureTextEntry={true}
                              />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <CheckBox
                                    value={this.state.checked}
                                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                                    />
                                    <Text style={styles.forgotPass}> esqueci a senha</Text>
                            </View>  
                            <TouchableOpacity 
                                onPress={() => this.doLogin(this.state.username, this.state.password)} 
                                style={styles.entrar} 
                                disabled={this.state.isLoading}>  

                                <Image source={btnLogin}  style={{                                
                                    alignSelf: 'center',                                    
                                    borderWidth: 1,
                                    marginTop: 20,
                                    borderRadius: 15
                                }} />

                            </TouchableOpacity>
                            <View style={{ 
                                flexDirection: 'row',
                                marginTop: 5,
                                alignItems: 'center',
                                justifyContent: 'center',                            
                            }}>                            
                                <Text style={styles.forgotPass}> Cadastre-se </Text>
                            </View>  
                            
                        </View>
                    </View>
            </ImageBackground>
            
        );
    }
}

var styles = StyleSheet.create({

    inputContainer: {
        width: window.width - 100,
        backgroundColor: '#FFF',
        height: 40,
        marginTop: 20,
        borderRadius: 5,
    },
    input: {
        backgroundColor: 'transparent',
        opacity: 0.7,
        padding: 10,
        width: window.width - 100,
        borderRadius: 5,
        paddingLeft: 20, 
        paddingRight: 20,
        flex: 1,
    },  
    loginForm: {
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    forgotPass: {
        width: window.width - 100,                
        marginTop: 8,
        borderRadius: 5,
    },
    loginImg: {
        alignItems: 'center',
        justifyContent: 'center',  
        marginTop: 20,        
    }
});

export default ScreenLogin;