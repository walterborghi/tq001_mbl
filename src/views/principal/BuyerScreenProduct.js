import React, { Component } from 'react';
import {
  Image,
  Dimensions,
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import Carousel  from 'react-native-snap-carousel';
import stylesL from './stylesL';
import CompSellItem  from './CompSellItem';
const bkApp = require('../../../images/backgroundApp.png');

const window = Dimensions.get('window');
const ImgHeight = Dimensions.get('window').height;
const ImgWidth = Dimensions.get('window').width;
const self = null;

class BuyerScreenProduct extends Component {
  
  constructor(props) {
    super(props);    
    self = this; 
    
    this.state = {
      errors: []
    }

    this.props = props;
    this._carousel = {};
    this.init();
  }
  
 

  init() {
    this.state = {
      videos: [
        {
          id: "WpIAc9by5iU",
          thumbnail: "https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg",
          title: ""
        }, {
          id: "sNPnbI1arSE",
          thumbnail: "https://img.youtube.com/vi/sNPnbI1arSE/hqdefault.jpg",
          title: ""
        }, {
          id: "VOgFZfRVaww",
          thumbnail: "https://img.youtube.com/vi/VOgFZfRVaww/hqdefault.jpg",
          title: ""
        }
      ],
      locals: [
        {
          id: '1',
          local: "Doces do 32",
          classf: 3,
          resumo: "Doces mais doces...",
          logo: ""
        },
        {
          id: '2',
          local: "Gelinhos 11",
          classf: 2,
          resumo: "Gelados cremosos",
          logo: ""
        },
        {
          id: '5',
          local: "Lanches e Salgados Inês",
          classf: 1,
          resumo: "Oleosos e gordurentos",
          logo: ""
        },
        {
          id: '4',
          local: "H tem pão",
          classf: 5,
          resumo: "Pães frescos",
          logo: ""
        },
        {
          id: '3',
          local: "Bolos Caseiros da P",
          classf: 3,
          resumo: "Fubá e mais",
          logo: ""
        },
        {
          id: '8',
          local: "Batata Doce & Cia do 11X",
          classf: 3,
          resumo: "Marmitas Fit",
          logo: ""
        },
        {
          id: '10',
          local: "Gorduramas do 13C",
          classf: 2,
          resumo: "Lanches gordurentos e suculentos",
          logo: ""
        },
      ]
    };
    console.log("ThumbnailCarousel Props: ", this.props)
  }

  handleSnapToItem(index){
    console.log("snapped to ", index)
  }

  _renderItemPhotos = ( {item, index} ) => {
    console.log("rendering,", index, item)
    return (
        <View style={styles.ThumbnailBackgroundView}>
          <TouchableOpacity
             onPress={ () => { 
                console.log("clicked to index", index)
                this._carousel.snapToItem(index);
              }}
          >
            <Image style={styles.CurrentVideoImage} source={{ uri: item.thumbnail }} />
          </TouchableOpacity>
            {/*<NextVideoImage source={{ uri: this.state.currentVideo.nextVideoId }}/>*/}
            <Text style={styles.VideoTitleText}>{item.title}</Text>
        </View>
    );
  }

  _renderItemSale ({item, index}) {                
    return (
        <CompSellItem screenProps={self.props} itemDetail={item} />
    );   
  }
 
 
  render () {

    const values = self.props.userData;
    const valores = self.props.processFilter;

    var user_id = self.props.user_id;    
    
    if(user_id == 0) {
      user_id = self.props.navigation.state.params.user_id;
    }

    if(values != null)
    { 
        return (
          <View style={stylesL.scene}>
            <Text>SecreenHome</Text>
          </View>
        );
      }
      else
      {
          return (
            <ImageBackground source={bkApp} style={{ width: ImgWidth, height: ImgHeight}}>
              <View style={styles.CarouselBackgroundView}>                
                <Carousel
                  ref={ (c) => { this._carousel = c; } }
                  data={this.state.videos}
                  renderItem={this._renderItemPhotos.bind(this)}
                  onSnapToItem={this.handleSnapToItem.bind(this)}
                  sliderWidth={360}
                  itemWidth={156}
                  layout={'default'}
                  firstItem={1}
                />
              </View>
              <View style={{ width: '100%', marginTop: 20, backgroundColor: '#e6b33e' }}>
                <Text style={{ marginLeft: 10, fontSize: 16, color: 'black' }}>Locais de Venda</Text>              
              </View>
              <View style={styles.containerList}>
                  <View style={{ height: 300, marginTop: 5 }}>
                      <FlatList 
                      data = {this.state.locals}
                      refreshing={false}
                      //ListHeaderComponent={this._renderItemProcesso()}
                      //onRefresh={() => this.props.getData(user_id)}
                      keyExtractor={item => item.id}
                      renderItem={this._renderItemSale}
                      />
                  </View>
              </View>
            </ImageBackground>
          );        
      }
    
    }
}

const styles = StyleSheet.create({
  top: {
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    marginLeft: 1
  },
  containerList: {    
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lupa: {
    height: 30,
    width: 30,
    padding: 10,
    marginLeft: 10,
    marginTop: 15,
    marginRight: 5
  },
  add: {
    height: 27,
    width: 27,
    padding: 10,
    marginLeft: 10,
    marginTop: 15,
    marginRight: 5
  },
  container: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',    
  },


  CarouselBackgroundView : {
    marginTop: 5,
    backgroundColor: 'transparent',
    height: 100,
    width: window.width
  },
  VideoTitleText : {
    color: 'white',
    top: 28,
    justifyContent: 'center'
  },
  CurrentVideoImage: {
    top: 0,
    width: 156,
    height: 114,
    borderRadius: 30
  },
  ThumbnailBackgroundView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 156
  }
});



const mapStateToProps = state => (
  {
    userData: state.HomeReducer.userData,
    loading: state.HomeReducer.loading,
    user_id: state.HomeReducer.user_id,
    itemDetail: state.HomeReducer.itemDetail,
    processFilter: state.HomeReducer.processFilter
  }
)

export default connect(mapStateToProps, { })(BuyerScreenProduct);