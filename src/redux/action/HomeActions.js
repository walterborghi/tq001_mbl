import { AsyncStorage } from 'react-native';

import {
	GET_DATA,
	GET_DATA_RECEIVED,
  GET_DATA_STARTED,
  GET_COBRANCA,
  GET_COBRANCA_RECEIVED,
  GET_COBRANCA_STARTED,
  SET_COBRANCA,
  URL_ROOT,
  GET_PROCESS,
  GET_PROCESS_RECEIVED,
  GET_PROCESS_STARTED
} from '../constants/HomeConstants'

const dataReceived = (data, dispatch) => {
  dispatch({ type: GET_DATA_RECEIVED, data});  
}

const dataStarted = (data, dispatch) => {
  dispatch({ type: GET_DATA_STARTED, data});
}

const dataProcReceived = (data, dispatch) => {
  dispatch({ type: GET_PROCESS_RECEIVED, data});  
}

const dataProcStarted = (data, dispatch) => {
  dispatch({ type: GET_PROCESS_STARTED, data});
}


export const getData = (id) => {
  return dispatch => {
    
    dataStarted(id, dispatch);       
    fetch('https://lt94jam68c.execute-api.us-east-2.amazonaws.com/Prod/api/usuario/getData?id='+id)
    
      .then((response) => response.json())
      .then((responseJson) => {

      if(responseJson.error == null)
      {
        if(responseJson.data == null)
        {              
        }
        else
        {
          var result = responseJson.data;
          dataReceived(result, dispatch);             
        }
      }
    })
    .catch((error) => {
      console.error(error);
      this.setState({loadingCode : false});
    });  
  }  
}


export const getProcesso = (jObject) => {

  //console.log('getProcessoAction <<<<<<<<<>>>>>>>>>>>>>>>>> id: -> ' + id.idUser);
  //console.log('getProcessoAction <<<<<<<<<>>>>>>>>>>>>>>>>> search: -> ' + id.procSearch);

  return dispatch => {
    
    dataProcStarted(jObject, dispatch);       
    //fetch('https://lt94jam68c.execute-api.us-east-2.amazonaws.com/Prod/api/usuario/getData?id='+jObject.procSearch)
    fetch('https://lt94jam68c.execute-api.us-east-2.amazonaws.com/Prod/api/processo/PesquisarMeusProcessos?idUser='+jObject.idUser+'&nroProcesso='+jObject.procSearch)
    
      .then((response) => response.json())
      .then((responseJson) => {

      if(responseJson.error == null)
      {
        if(responseJson.data == null)
        {              
        }
        else
        {
          var result = responseJson.data;          
          dataProcReceived(result, dispatch);             
        }
      }
    })
    .catch((error) => {
      console.error(error);
      this.setState({loadingCode : false});
    });  
  }  
}




