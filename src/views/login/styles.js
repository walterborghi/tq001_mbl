import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 4;
export const IMAGE_HEIGHT_SMALL = window.width / 10;



export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 0,
    backgroundColor: '#FFF',
  },
  input: {
    height: 40,
    marginHorizontal: 10,
    marginVertical: 5,
    width: window.width - 70,
    backgroundColor: '#FFF',
    color: '#000',
    fontWeight: '100',
    padding:14,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius:15,
    fontFamily: 'Myriad Pro',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    
  },
  input2: {
    height: 40,
    marginHorizontal: 10,
    marginVertical: 5,
    width: window.width - 50,
    backgroundColor: '#0e6f8c',
    color: '#d1d1d1',
    padding:5,
    paddingLeft:10,
    paddingRight:10,
    borderRadius:5,
    fontFamily: 'Myriad Pro',
    
  },
  input3: {
    height: 40,
    marginHorizontal: 10,
    marginVertical: 5,
    width: window.width - 60,
    backgroundColor: '#FFF',
    color: '#000',
    fontWeight: '100',
    padding:14,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius:15,
    fontFamily: 'Myriad Pro',
    borderColor: '#D9D9D9',
    borderWidth: 1,
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding:10,
    marginTop:40,
  },
  register:{
    marginBottom:20, 
    width:window.width -100,
    alignItems:'center',
    justifyContent:'center',
    height:50,
  },
  backgroundContainer: {
    position: 'absolute',
    height: window.height,
    width: window.width,
  },
  backgroundContainer2: {
    position: 'absolute',
    height: window.height,
    width: window.width,
    opacity: 0.4,
  },
  btnred: {
    backgroundColor: '#e8623c',
    opacity: 0.9,
    borderRadius:10,
    height: 40,
    marginHorizontal: 10,
    marginVertical: 5,
   // paddingVertical: 5,
    // paddingHorizontal: 15,
    width: window.width - 50,
  },
  btnblue: {
    backgroundColor: '#3BB5EB',
    opacity: 0.9,
    borderRadius:20,
    marginHorizontal: 10,
    marginVertical: 5,
   // paddingVertical: 5,
    // paddingHorizontal: 15,
    width: window.width - 50,
  },
  btnblue2: {
    backgroundColor: '#FFF',
    opacity: 0.9,
    borderRadius:20,
    marginHorizontal: 10,
    marginVertical: 5,
   // paddingVertical: 5,
    // paddingHorizontal: 15,
    width: window.width - 30,
  },
  btntext: {
    color:'#0e6f8c',
    textAlign:'center',
    fontFamily: 'Myriad Pro',
    marginTop:12,
    marginBottom:15,
  },
  entrar: {
    marginTop:4,
  },
  entrar2: {
    marginTop:4,
    opacity: 0.8,
  }
  ,textPrincipal: {
    backgroundColor:'transparent',
    alignItems:'center',
    color:'#FFFFFF',
    textAlign: 'center',
    fontSize: 19,
    width:280,
    fontWeight:'bold',
    marginTop:15,
    marginLeft:10,
    marginBottom:30,
    fontFamily: 'AvenirNext-Regular'
  },
  socialImage: {
    width: 50,
    height: 50,
    margin: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#d2d2d2',
    marginTop:20,
    marginBottom:20,
    width: window.width - 50,
    opacity: 0.22,
  },
  button: {
    backgroundColor: '#3BB5EB',
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 37,
    paddingRight: 37,
    borderRadius: 15,
    marginTop: 10,
    width: window.width - 70,
  },
  button3: {
    backgroundColor: '#3BB5EB',
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 37,
    paddingRight: 37,
    borderRadius: 15,
    marginTop: 10,
    width: window.width - 60,
    marginLeft: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Myriad Pro',

  },




  btnblue2: {
    backgroundColor: '#1fa4cc',
    opacity: 0.9,
    borderRadius:15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: '#1fa4cc',
    width: 150,
  },
  btntext2: {
    color:'#FFF',
    textAlign:'center',
    marginTop:12,
    marginBottom:15,
    fontFamily: 'Montserrat'
  },
});

