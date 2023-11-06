import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image ,TextInput,TouchableOpacity,ImageBackground,FlatList,SectionList,ScrollView,SafeAreaView} from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const images = [
  require('../imgs/image/khuyen-mai-chuyen-bay.jpg'),
  require('../imgs/image/khuyen-mai-data.jpg'),
  require('../imgs/image/khuyen-mai-du-lich-da-lat.jpg'),
  require('../imgs/image/khuyen-mai-du-lich-ha-noi.jpg'),
  require('../imgs/image/khuyen-mai-thanh-toan-cuoc.jpg'),
];
const banner=[
  require('../imgs/image/banner1.jpg'),
  require('../imgs/image/banner2.jpg'),
  require('../imgs/image/banner3.jpg')
]
const menu = [
  {id:1,name:'Ăn uống gần bạn',icon:require('../imgs/icon/an-uong-gan-ban.png')},
  {id:2,name:'Dịch vụ tiện ích',icon:require('../imgs/icon/dich-vu-tien-ich.png')},
  {id:3,name:'Ăn uống gần bạn',icon:require('../imgs/icon/an-uong-gan-ban.png')},
  {id:4,name:'Du lịch & Giải trí',icon:require('../imgs/icon/du-lich-giai-tri.png')},
  {id:5,name:'Thương mại điện tử',icon:require('../imgs/icon/doi-tac-lien-ket.png')},
  {id:6,name:'Tài chính bảo hiểm',icon:require('../imgs/icon/dich-vu-khac.png')},


]
const data_all=[
  {id:1,name:'Data 3G/4G',icon:require('../imgs/icon/mua-nap-4g.jpg'),image:require('../imgs/image/kh_giam50max15.jpg'),title:'Giảm 50%',des:'Tối đa 15.0000đ cho đơn từ 0 đ'},
  {id:2,name:'Combo Nghe gọi + Data',icon:require('../imgs/icon/combo-goi.jpg'),image:require('../imgs/image/kh_giam20max30.jpg'),title:'Giảm 20%',des:'Tối đa 35.0000đ cho đơn từ 0 đ'},
  {id:3,name:'Sim Vinaphone',icon:require('../imgs/icon/viettel.jpg'),image:require('../imgs/image/giam20max50.jpg'),title:'Giảm 20%',des:'Tối đa 50.0000đ cho đơn từ 0 đ'},
  {id:4,name:'Sim Viettel',icon:require('../imgs/icon/viettel.jpg'),image:require('../imgs/image/giam20max50Viettel.jpg'),title:'Giảm 20%',des:'Tối đa 50.0000đ cho đơn từ 0 đ'},
  {id:5,name:'Sim VietNamMobile',icon:require('../imgs/icon/viettel.jpg'),image:require('../imgs/image/giam15max50vietnammobile.jpg'),title:'Giảm 15%',des:'Tối đa 50.0000đ cho đơn từ 0 đ'},
  {id:6,name:'Shang-chi',icon:require('../imgs/icon/shang-chi.jpg'),image:require('../imgs/image/kh_nu_shangchi.jpg'),title:'Giảm 100k',des:'Cho đơn từ 500.000đ'},
    {id:7,name:'KOMBO-Cơm niêu singpore',icon:require('../imgs/icon/komno.jpg'),image:require('../imgs/image/kh_nu_kombo.jpg'),title:'Giảm 50%',des:'Giảm tối đa 30.000đ cho đơn từ 0đ'},
      {id:8,name:'Đặt GoFood trên MoMo',icon:require('../imgs/icon/gofood.jpg'),image:require('../imgs/image/kh_nu_giam15max30.jpg'),title:'Giảm 15%%',des:'Tối đa 40.000đ cho đơn từ 220.000đ'},
      {id:9,name:'Shang-chi',icon:require('../imgs/icon/shang-chi.jpg'),image:require('../imgs/image/kh_nu_shangchi.jpg'),title:'Giảm 100k',des:'Cho đơn từ 500.000đ'},
      {id:10,name:'yakimono',icon:require('../imgs/icon/yakimono.jpg'),image:require('../imgs/image/yakimono.jpg'),title:'Giảm 50k',des:'cho đơn từ 100.000đ'},
      {id:11,name:'Đặt GoFood trên MoMo',icon:require('../imgs/icon/gofood.jpg'),image:require('../imgs/image/kh_nu_giam30toida20.jpg'),title:'Giảm 30%',des:'Tối đa 40.000đ cho đơn từ 220.000đ'},
  
]
const AllDataTab = ({ data }) => (
  <View>
    {data.map((item) => (
      <TouchableOpacity
        style={{
          width: '90%',
          height: 120,
          flexDirection: 'row',
          borderRadius: 5,
          marginBottom: 10,
          backgroundColor: 'white',
          alignSelf: 'center',
        }}
        key={item.id}
      >
        <Image source={item.image} style={{ width: '30%', height: '100%', resizeMode: 'contain' }} />
        <View style={{ width: '70%', height: '100%', flexDirection: 'column', justifyContent: 'space-evenly', paddingLeft: 5 }}>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Image source={item.icon} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
            <Text style={{ color: 'gray' }}>{item.name}</Text>
          </View>
          <Text style={{ fontWeight: 'bold', width: '100%' }}>{item.title}</Text>
          <Text style={{ fontSize: 12, width: '100%' }}>{item.des}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

const data=[
  {
    id:1,
    type:'Ưu đãi ăn data',
    data:[
        {id:1,name:'Data 3G/4G',icon:require('../imgs/icon/mua-nap-4g.jpg'),image:require('../imgs/image/kh_giam50max15.jpg'),title:'Giảm 50%',des:'Tối đa 15.0000đ cho đơn từ 0 đ'},
        {id:2,name:'Combo Nghe gọi + Data',icon:require('../imgs/icon/combo-goi.jpg'),image:require('../imgs/image/kh_giam20max30.jpg'),title:'Giảm 20%',des:'Tối đa 35.0000đ cho đơn từ 0 đ'},
        {id:3,name:'Sim Vinaphone',icon:require('../imgs/icon/viettel.jpg'),image:require('../imgs/image/giam20max50.jpg'),title:'Giảm 20%',des:'Tối đa 50.0000đ cho đơn từ 0 đ'},
        {id:4,name:'Sim Viettel',icon:require('../imgs/icon/viettel.jpg'),image:require('../imgs/image/giam20max50Viettel.jpg'),title:'Giảm 20%',des:'Tối đa 50.0000đ cho đơn từ 0 đ'},
        {id:5,name:'Sim VietNamMobile',icon:require('../imgs/icon/viettel.jpg'),image:require('../imgs/image/giam15max50vietnammobile.jpg'),title:'Giảm 15%',des:'Tối đa 50.0000đ cho đơn từ 0 đ'},
  
    ]
 },
 {
  id:2,
  type:'Dành cho phái nữ',
  data:[
    
      {id:6,name:'Shang-chi',icon:require('../imgs/icon/shang-chi.jpg'),image:require('../imgs/image/kh_nu_shangchi.jpg'),title:'Giảm 100k',des:'Cho đơn từ 500.000đ'},
      {id:7,name:'KOMBO-Cơm niêu singpore',icon:require('../imgs/icon/komno.jpg'),image:require('../imgs/image/kh_nu_kombo.jpg'),title:'Giảm 50%',des:'Giảm tối đa 30.000đ cho đơn từ 0đ'},
      {id:8,name:'Đặt GoFood trên MoMo',icon:require('../imgs/icon/gofood.jpg'),image:require('../imgs/image/kh_nu_giam15max30.jpg'),title:'Giảm 15%%',des:'Tối đa 40.000đ cho đơn từ 220.000đ'},
      {id:9,name:'Shang-chi',icon:require('../imgs/icon/shang-chi.jpg'),image:require('../imgs/image/kh_nu_shangchi.jpg'),title:'Giảm 100k',des:'Cho đơn từ 500.000đ'},
      {id:10,name:'yakimono',icon:require('../imgs/icon/yakimono.jpg'),image:require('../imgs/image/yakimono.jpg'),title:'Giảm 50k',des:'cho đơn từ 100.000đ'},
      {id:11,name:'Đặt GoFood trên MoMo',icon:require('../imgs/icon/gofood.jpg'),image:require('../imgs/image/kh_nu_giam30toida20.jpg'),title:'Giảm 30%',des:'Tối đa 40.000đ cho đơn từ 220.000đ'},
    
  ]
 },
 {
  id:3,
  type:'Ưu đãi dành cho bạn',
  data:[
    
      {id:12,name:'Shang-chi',icon:require('../imgs/icon/shang-chi.jpg'),image:require('../imgs/image/kh_nu_shangchi.jpg'),title:'Giảm 100k',des:'Cho đơn từ 500.000đ'},
      {id:13,name:'KOMBO-Cơm niêu singpore',icon:require('../imgs/icon/komno.jpg'),image:require('../imgs/image/kh_nu_kombo.jpg'),title:'Giảm 50%',des:'Giảm tối đa 30.000đ cho đơn từ 0đ'},
      {id:14,name:'Đặt GoFood trên MoMo',icon:require('../imgs/icon/gofood.jpg'),image:require('../imgs/image/kh_nu_giam15max30.jpg'),title:'Giảm 15%%',des:'Tối đa 40.000đ cho đơn từ 220.000đ'},
      {id:15,name:'Shang-chi',icon:require('../imgs/icon/shang-chi.jpg'),image:require('../imgs/image/kh_nu_shangchi.jpg'),title:'Giảm 100k',des:'Cho đơn từ 500.000đ'},
      {id:16,name:'yakimono',icon:require('../imgs/icon/yakimono.jpg'),image:require('../imgs/image/yakimono.jpg'),title:'Giảm 50k',des:'cho đơn từ 100.000đ'},
      {id:17,name:'Đặt GoFood trên MoMo',icon:require('../imgs/icon/gofood.jpg'),image:require('../imgs/image/kh_nu_giam30toida20.jpg'),title:'Giảm 30%',des:'Tối đa 40.000đ cho đơn từ 220.000đ'},
    
  ]
 }
]
const discount_data=[
  {id:1,name:'Data 3G/4G',icon:require('../imgs/icon/mua-nap-4g.jpg'),image:require('../imgs/image/kh_giam50max15.jpg'),title:'Giảm 50%',des:'Tối đa 15.0000đ cho đơn từ 0 đ'},
  {id:2,name:'Combo Nghe gọi + Data',icon:require('../imgs/icon/combo-goi.jpg'),image:require('../imgs/image/kh_giam20max30.jpg'),title:'Giảm 20%',des:'Tối đa 35.0000đ cho đơn từ 0 đ'},
  {id:3,name:'Sim Vinaphone',icon:require('../imgs/icon/viettel.jpg'),image:require('../imgs/image/giam20max50.jpg'),title:'Giảm 20%',des:'Tối đa 50.0000đ cho đơn từ 0 đ'},
  {id:4,name:'Sim Viettel',icon:require('../imgs/icon/viettel.jpg'),image:require('../imgs/image/giam20max50Viettel.jpg'),title:'Giảm 20%',des:'Tối đa 50.0000đ cho đơn từ 0 đ'},
  {id:5,name:'Sim VietNamMobile',icon:require('../imgs/icon/viettel.jpg'),image:require('../imgs/image/giam15max50vietnammobile.jpg'),title:'Giảm 15%',des:'Tối đa 50.0000đ cho đơn từ 0 đ'},

]
const your_gift=[
  {id:1,name:'Đặt KFC trêm MoMo',icon:require('../imgs/icon/kfc.jpg'),title:'Giảm 40K',des:'KFC Miniapp - Giảm 40k',date:'HSD: 30/09/2021'},
  {id:2,name:'Rau Má Mix',icon:require('../imgs/icon/rau-ma-mix.jpg'),title:'Giảm 40K',des:'Rau má mix - Giảm 40k',date:'HSD: 30/09/2021'},
  {id:3,name:'Thanh toán hóa đơn',icon:require('../imgs/icon/thanh-toan-hoa-don.png'),title:'Giảm 40K',des:'thanh toán hóa đơn - Giảm 40k',date:'HSD: 30/09/2021'},
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default function Discount() {
  const [imgActive, setImgActive] = useState(0);
  const [bannerActive, setBannerActive] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);
  const [autoBannerInterval, setAutoBannerInterval] = useState(null);
  const scrollViewRef = useRef(null);
  const scrollViewRefBanner = useRef(null);
  const [activeTab, setActiveTab] = useState(1);
  const startAutoSlide = () => {
    const interval = setInterval(() => {
      const nextSlide = (imgActive + 1) % images.length;
      setImgActive(nextSlide);
      scrollViewRef.current.scrollTo({ animated: true, x: WIDTH * nextSlide });
    }, 3000);
  
    setAutoSlideInterval(interval);
  };
  const startAutoSlideBanner = () => {
    const interval = setInterval(() => {
      const nextSlide = (bannerActive + 1) % banner.length;
      setBannerActive(nextSlide);
      scrollViewRefBanner.current.scrollTo({ animated: true, x: WIDTH * nextSlide });
    }, 2000);
  
    setAutoBannerInterval(interval);
  };
  
  useEffect(() => {
    startAutoSlide();
  
    return () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
      }
    };
  }, [imgActive]);
  useEffect(() => {
    startAutoSlideBanner();
    return () => {
      if (autoBannerInterval) {
        clearInterval(autoBannerInterval);
      }
    }
  }, [bannerActive]);
  const onChange = (event) => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
    if (slide !== imgActive) {
      setImgActive(slide);
    }
  };
  const onChangeBanner = (event) => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
    if (slide !== bannerActive) {
      setBannerActive(slide);
    }
  }
  
  return (
      <View style={styles.container}>
        <ScrollView style={{width:'100%'}} > 
          <View style={[styles.header]}>
                      <View style={styles.input_search}>
                        <Image
                          source={require('../imgs/icon/kinh-lup.png')}
                          style={{ height: '60%', width: '10%' ,resizeMode:'contain'}}          
                        />
                        <TextInput placeholder={'Tìm kiếm ưu đãi...'} style={{height:'100%',width:'95%'}} />    
                      </View>                           
                      <ScrollView
                                        ref={scrollViewRef}
                                        onScroll={(event) => onChange(event)}
                                        showsVerticalScrollIndicator={false}
                                        pagingEnabled
                                        horizontal
                                        style={styles.wrap}
                                        onTouchStart={() => clearInterval(autoSlideInterval)}
                                        onScrollBeginDrag={() => clearInterval(autoSlideInterval)}
                                        onMomentumScrollEnd={() => startAutoSlide()}
                                        scrollEventThrottle={16}
                                >
                                  {images.map((image, index) => (
                                    <Image
                                      key={index}
                                      resizeMode='stretch'
                                      style={{ width: WIDTH, height: HEIGHT * 0.25 }}
                                      source={image}
                                    />
                                  ))}
                        </ScrollView>                      
          </View>
          <View style={styles.body}>
               <View style={styles.gift_container}>
                      <TouchableOpacity style={styles.gift_code_input}>
                              <Image source={require('../imgs/icon/nhap-ma.png')} style={styles.gift_icon}/>
                              <View style={[styles.gift_text_container]}>
                                  <Text style={{fontWeight:'bold'}}>Nhập mã</Text>
                                  <Text style={{fontSize:10}}>Mã ưu đãi,mã giới thiệu</Text>
                              </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.gift_code_input}>
                              <Image source={require('../imgs/icon/qua-cua-ban.png')} style={styles.gift_icon}/>
                              <View style={[styles.gift_text_container]}>
                                  <Text style={{fontWeight:'bold'}}>Quà của bạn</Text>
                                  <Text  style={{fontSize:10}} >có 8 ưu đãi</Text>
                              </View>
                      </TouchableOpacity>
                </View>
                <View style={[styles.menu_category]}>
                    <View   style={{width:'100%'}}>
                    <FlatList
                          data={menu}
                          horizontal
                          keyExtractor={(item) => item.id.toString()}
                          renderItem={({ item }) => (
                            <TouchableOpacity style={styles.menu_item}>
                              <Image source={item.icon} style={styles.menu_icon} />
                              <Text style={[styles.menu_text, { fontSize: 10, textAlign: 'center' }]}>{item.name}</Text>
                            </TouchableOpacity>
                      )}
                    />
                            
                    </View>
                </View>
                <ImageBackground source={require('../imgs/image/background.jpg')} style={[styles.main_event]}>
                    <View style={[styles.kh_data_container]}>
                        <View style={{flexDirection:'row',width:'100%'}}>
                            <Text style={{fontSize:20,fontWeight:'bold',color:'white',marginLeft:10}}>Trạm sạc data </Text>
                            <Image source={require('../imgs/icon/arrow.png')} style={{height:'100%',resizeMode:'contain'}}></Image>
                       </View>
                    </View>
                    <View    style={{position:'absolute',top:'40%'}} >
                    <ScrollView style={{ flexDirection: 'row', flexWrap: 'wrap' }} horizontal>
                          {discount_data.map((item) => (
                            <TouchableOpacity style={styles.data_item} key={item.id}>
                              <Image source={item.image} style={styles.image_data} />
                              <View style={{ width: '100%', height: '40%', paddingLeft: 5 }}>
                                <View style={{ flexDirection: 'row', width: '100%', height: '20%', alignItems: 'center' }}>
                                  <Image source={item.icon} style={{ width: '10%', height: '80%' }}></Image>
                                  <Text style={[styles.menu_text, { fontSize: 12, textAlign: 'center', marginLeft: 5, color: 'grey' }]}>{item.name}</Text>
                                </View>
                                <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 15 }}>{item.title}</Text>
                                <Text style={{ width: '100%', fontSize: 14 }}>{item.des}</Text>
                                <View style={{ width: '100%', height: 30, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                  <TouchableOpacity style={{ padding: 5, borderWidth: 1, borderColor: '#eb2d9d', borderRadius: 5, marginRight: 10 }}>
                                    <Text style={{ color: '#eb2d9d', fontWeight: 'bold' }}>Thu thập</Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </TouchableOpacity>
                          ))}
                        </ScrollView>

                    </View>
                </ImageBackground>
                <View style={{width:'100%'}}>
                <View style={{ backgroundColor: '#F1F1F3' }}>
                        {data.map((item) => (
                          <View key={item.id} style={[styles.kh_male_container]}>
                            <View style={{ width: '100%', flexDirection: 'row', marginLeft: 20 }}>
                              <Image source={require('../imgs/icon/hoa-dao.jpg')} style={{ height: '100%', resizeMode: 'contain' }} />
                              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: -15 }}>{item.type}</Text>
                              <Image source={require('../imgs/icon/arrow.png')} style={{ height: '100%', resizeMode: 'contain' }} />
                            </View>
                            <SafeAreaView>
                              <ScrollView horizontal style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {item.data.map((dataItem) => (
                                  <TouchableOpacity style={styles.data_item} key={dataItem.id}>
                                    <Image source={dataItem.image} style={styles.image_data} />
                                    <View style={{ width: '100%', height: '40%', paddingLeft: 5 }}>
                                      <View style={{ flexDirection: 'row', width: '100%', height: '20%', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <Image source={dataItem.icon} style={{ width: '10%', height: '80%' }} />
                                        <Text style={[styles.menu_text, { fontSize: 10, textAlign: 'center', marginLeft: 5, color: 'grey' }]}>{dataItem.name}</Text>
                                      </View>
                                      <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 15 }}>{dataItem.title}</Text>
                                      <Text style={{ width: '100%', fontSize: 14, height: 30 }}>
                                        {dataItem.des}
                                      </Text>
                                      <View style={{ width: '100%', height: 30, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 10 }}>
                                        <TouchableOpacity style={{ padding: 5, borderWidth: 1, borderColor: '#eb2d9d', borderRadius: 5, marginRight: 10 }}>
                                          <Text style={{ color: '#eb2d9d', fontWeight: 'bold' }}>Thu thập</Text>
                                        </TouchableOpacity>
                                      </View>
                                    </View>
                                  </TouchableOpacity>
                                ))}
                              </ScrollView>
                            </SafeAreaView>
                          </View>
                        ))}
                    </View>

                </View>
                <View style={{width:'100%',height:150,backgroundColor:'#F1F1F3'}}>
                  <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginLeft:15}}>Quà Của bạn</Text>
                  <SafeAreaView 
                  
                  >
                      <FlatList 
                      data={your_gift}
                      keyExtractor={(item) => item.id.toString()}
                      horizontal={true}
                      renderItem={({ item }) => (
                        <TouchableOpacity style={{width:WIDTH*0.6,height:120,borderRadius:5,backgroundColor:'#F1F1F3',marginRight:5}} key={item.id}>
                            <View style={{width:'100%',height:'70%',flexDirection:'row',borderRadius:10,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderBottomEndRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}>
                                  <View style={{width:'90%',height:'100%',justifyContent:'center',alignItems:'center',borderBottomWidth:5,borderStyle:'dashed',borderColor:'#F1F1F3'}}>
                                      <View style={{width:'100%',height:'50%',backgroundColor:'#F1F1F3',marginTop:5,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                                            <Image style={{width:20,height:20,resizeMode:'contain'}} source={item.icon}></Image>
                                            <Text style={{color:'gray'}}>{item.name}</Text>
                                      </View>
                                      <View style={{width:'100%',height:'50%'}}>
                                            <Text style={{fontWeight:'bold',width:'100%'}}>{item.title}</Text>
                                            <Text style={{fontSize:12,width:'100%'}}>{item.des}</Text>
                                      </View>
                                  </View>
                            </View>
                            <View style={{width:'100%',height:'30%',flexDirection:'row',borderRadius:10,backgroundColor:'white',borderTopLeftRadius:10,borderTopRightRadius:10}}>
                                <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                    <Text style={{fontSize:12,color:'gray'}}>{item.date}</Text>
                                    <TouchableOpacity><Text style={{color:'#EE4EAC',fontWeight:'bold'}}>Dùng ngay</Text></TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                      )}
                      >
                      </FlatList>
                  </SafeAreaView>
                </View>
                <SafeAreaView style={{width:'100%',height:HEIGHT*0.25,backgroundColor:'#F1F1F3'}}>
                <ScrollView
                                        ref={scrollViewRefBanner}
                                        onScroll={(event) => onChangeBanner(event)}
                                        showsVerticalScrollIndicator={false}
                                        pagingEnabled
                                        horizontal
                                        style={styles.wrap}
                                        onTouchStart={() => clearInterval(autoBannerInterval)}
                                        onScrollBeginDrag={() => clearInterval(autoBannerInterval)}
                                        onMomentumScrollEnd={() => startAutoSlideBanner()}
                                        scrollEventThrottle={16}
                                >
                                  {banner.map((image, index) => (
                                    <Image
                                      key={index}
                                      resizeMode='stretch'
                                      style={{ width: WIDTH, height: HEIGHT * 0.25 }}
                                      source={image}
                                    />
                                  ))}
                        </ScrollView>      
                </SafeAreaView>
                <SafeAreaView style={{width:'100%'}}>

                      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>
                        <TouchableOpacity onPress={() => setActiveTab(1)} style={{width:'50%',height:'100%',alignItems:'center',justifyContent:'center',borderBottomWidth: activeTab===1?2:0,borderColor:'#EE4EAC'} }>
                          <Text style={{ paddingHorizontal: 20, fontWeight: activeTab === 1 ? 'bold' : 'normal' }}>Tất cả</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setActiveTab(2)} style={{width:'50%',height:'100%',alignItems:'center',justifyContent:'center',borderBottomWidth: activeTab===2?2:0,borderColor:'#EE4EAC'}}>
                          <Text style={{ paddingHorizontal: 20, fontWeight: activeTab === 2 ? 'bold' : 'normal' }}>Mới nhất</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{backgroundColor:'#F1F1F3',justifyContent:'center',width:'100%'}}>
                      {activeTab === 1 && <AllDataTab data={data_all}/>}
                      {activeTab === 2 && <AllDataTab data={data_all} />}
                      </View>
                      
                      
                </SafeAreaView>
               
                                
          </View>         
          </ScrollView>
          
      </View>
      
      
    
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F1F1F3',
    alignItems: 'center',
    justifyContent: 'space-between',
   width:'100%'

  },
  header:{
    width:'100%',
    backgroundColor: '#F1F1F3',
    justifyContent:'flex-start',
    alignItems:'center',
    height:200,
    
  
  },
  wrap: {    width: '100%',
    height: '100%',
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  doActive: {
    margin: 3,
    color: 'black',
  },
  dot: {
    margin: 3,
    color: '#888',
  },
  input_search:{
    position: 'absolute',
    top: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 10,
    width: '90%',  
    zIndex: 1,
    backgroundColor:'#fff',    
    borderRadius:20
  },
  body:{
  flex:1,
    width:'100%',    
    alignItems:'center',
    justifyContent:'flex-start',
    
    height:'30%'

  },
  gift_container:{
    width:'90%',height:80,
    marginTop:-30,
    flexDirection:'row',
    justifyContent:'space-between',
    
   
    
  },
  gift_code_input:{
    width:'50%',
    height:'80%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#888',
    borderRadius:15
  },
  gift_icon:{
    width:'20%',
    height:'100%',
    resizeMode:'contain'
  },
  gift_text_container:{
    width:'80%',
    height:'100%',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    
  },
  menu_category:{
    marginTop:-5,
    width:'90%',
    height:100,
    alignItems:'space-between',
    justifyContent:'center',

    
  },
  menu_item:{
    width:60,
    height:60,
    marginLeft:10
    
  },
  menu_icon:{
    width:'100%',
    height:'80%',
    resizeMode:'contain'
  },
  container_type:{
    width:'100%',
    height:HEIGHT*0.45,
    backgroundImage:require('../imgs/image/background.jpg'),
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  container_type_gift:{
    width:'100%',
    height:HEIGHT*0.4
    
  },
  main_event:{
    width:'100%',
    height:500,
    borderWidth:1,
    backgroundImage:require('../imgs/image/background.jpg')
  },
  kh_data_container:{
    width:'100%',
    position:'absolute',
    top:'30%',
   
  },
  kh_male_container:{
    width:'100%',
  
   
  },
  
  data_item:{
    width:WIDTH*0.4,
    height:HEIGHT*0.45,
    backgroundColor:'#ffffff',
    margin:5,
    marginTop:0,
    borderRadius:20,
    justifyContent:'flex-start',
    alignItems:'center',
    paddingHorizontal:1,
    paddingBottom:30
    
  },
  
  image_data:{
    width:'100%',
    height:'68%',
    resizeMode:'contain',
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    borderRadius:20
   
  },
 
  
});

