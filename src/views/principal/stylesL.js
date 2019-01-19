import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 4;
export const IMAGE_HEIGHT_SMALL = window.width / 10;



export default StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#f2f2f2'
  },
  topo: {    
    flexDirection: 'row'
  },
  topoFilter: {
    flex: 5
  },
  topoSintetico: {
    marginTop: 6,
    height: 50,
    borderRadius:15,
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: '#0080ff'
  },
  container: {
    flex: 8,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerFilter: {
    flex: 8,
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f5380'
  },
  inputSearch: {
    height: 40,
    marginHorizontal: 5,
    marginVertical: 5,
    width: window.width - 120,
    backgroundColor: '#FFF',
    color: '#000',
    fontWeight: '100',
    padding:14,
    paddingTop: 10,    
    borderRadius:15,
    fontFamily: 'Myriad Pro',
    borderColor: '#D9D9D9',
    borderWidth: 1    
  },
  textoLabel: {
    fontSize: 14,
    fontFamily: 'Palatino Linotype',
  },
  textoLabelRight: {
    fontSize: 14,
    fontFamily: 'Palatino Linotype',
    marginLeft: 40
  },
  textoValor: {
    fontSize: 15,
    fontFamily: 'Palatino Linotype',  
    color: '#0f5380'
  },
  textoLabelSint: {
    fontSize: 15,
    fontFamily: 'Calibri',
    height: 17,
    marginBottom: 0,
    paddingLeft: 10,    
    width: window.width - 95,
    borderWidth: 0.5,
    borderColor: '#FFF',
    color: 'white'
  },  
  textoValorSint: {
    fontSize: 15,
    marginBottom: 0,
    fontFamily: 'Calibri',   
    height: 17,
    color: '#0f5380',
    width: window.width - 310,
    borderWidth: 0.5,
    borderColor: '#FFF',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  textoHeader: {
    fontFamily: 'Calibri',   
    fontSize: 18,
    marginLeft: 8,
    fontWeight: 'bold',
    textAlign:'center',    
    color: 'white'
  },
  textoDeslize: {
    color: '#d4d3d3',
    fontSize: 13,
    fontFamily: 'Palatino Linotype'
  },
  button: {
    backgroundColor: '#067702',
    width: window.width - 16,
    height: 40,
    marginTop: 15,
    marginLeft: 8,    
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnSearch: {
    color:'#FFF',
    textAlign:'center',
    fontFamily: 'Myriad Pro',
    fontSize: 18,
    marginTop:12,
    marginBottom:15,
  }
});