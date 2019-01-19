import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  AppState,
} from 'react-native';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { doShowLogin } from './src/redux/action/AppActions';

//import { pushNotifications } from './src/services';
import InitialNavigator from './src/views/navigator/InitialNavigator';
import reducers from './src/redux/reducers';

//pushNotifications.configure();
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
type Props = {};

function handleActive() {
  console.log("The application is now active!");
}

function handleBackground() {
  console.log("The application is now in the background!");
}

function handleInactive() {
  console.log("The application is now inactive!");
}

var connection;
var proxy;
var _username;
var self;


export default class App extends Component<Props> {
  
  self = this;

  state = {
    appState: AppState.currentState,
    messageCount: 0,
    lastConnId: '',
    showMessage: false,
    lastMessage: '',
    selectedScreen: ''
  }

  componentDidMount() {
    console.log('DID MOUNT');
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    console.log('DID UNMOUNT');
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    console.log(nextAppState);
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
      if(connection != null)
      {
        this.createHub(this._username);
      }      
    }
    this.setState({appState: nextAppState});
  }
  
  setSelectedScreen(screen)
  {
    this.setState({selectedScreen: screen});
  }

  sendUserName(username)
  {
    this.createHub(username);
  }

  sendMessageToServer(obj)
  {
    
    proxy.invoke('send', this._username, obj.text, this.state.lastConnId)
        .done((directResponse) => {
          //console.log('direct-response-from-server', directResponse);
        }).fail(() => {
          console.warn('Something went wrong when calling server, it might not be up and running?')
    });
  }
  
  

  addMessage(text)
  {
    this.setState({messageCount: this.state.messageCount++});
    var msg = {
            _id: new Date(),
            text: text,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Server',
              avatar: 'https://relayfm.s3.amazonaws.com/uploads/user/avatar/68/user_avatar_Davidsmith_artwork.png',
            },
          };
    this.home.addMessage(msg);
  }
  
  render() {
    return (
      <Provider store={store}>
        < InitialNavigator />
      </Provider>

    );
  }
}