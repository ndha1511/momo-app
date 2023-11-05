import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, Image ,TextInput,TouchableOpacity,ImageBackground} from 'react-native';
import { useState, useEffect, useRef } from 'react';

const images = [
  require('./src/imgs/image/khuyen-mai-chuyen-bay.jpg'),
  require('./src/imgs/image/khuyen-mai-data.jpg'),
  require('./src/imgs/image/khuyen-mai-du-lich-da-lat.jpg'),
  require('./src/imgs/image/khuyen-mai-du-lich-ha-noi.jpg'),
  require('./src/imgs/image/khuyen-mai-thanh-toan-cuoc.jpg'),
];
const menu = [
  {id:1,name:'Ăn uống gần bạn',icon:require('./src/imgs/icon/an-uong-gan-ban.png')},
  {id:2,name:'Dịch vụ tiện ích',icon:require('./src/imgs/icon/dich-vu-tien-ich.png')},
  {id:3,name:'Ăn uống gần bạn',icon:require('./src/imgs/icon/an-uong-gan-ban.png')},
  {id:4,name:'Du lịch & Giải trí',icon:require('./src/imgs/icon/du-lich-giai-tri.png')},
  {id:5,name:'Thương mại điện tử',icon:require('./src/imgs/icon/doi-tac-lien-ket.png')},
  {id:6,name:'Tài chính bảo hiểm',icon:require('./src/imgs/icon/dich-vu-khac.png')},


]
const discount_data=[
  {id:1,name:'Data 3G/4G',icon:require('./src/imgs/icon/mua-nap-4g.jpg'),image:require('./src/imgs/image/kh_giam50max15.jpg'),title:'Giảm 50%',des:'Tối đa 15.0000đ cho đơn từ 0 đ'},
  {id:2,name:'Combo Nghe gọi + Data',icon:require('./src/imgs/icon/combo-goi.jpg'),image:require('./src/imgs/image/kh_giam20max30.jpg'),title:'Giảm 20%',des:'Tối đa 35.0000đ cho đơn từ 0 đ'},
  {id:3,name:'Sim Vinaphone',icon:require('./src/imgs/icon/viettel.jpg'),image:require('./src/imgs/image/giam20max50.jpg'),title:'Giảm 20%',des:'Tối đa 50.0000đ cho đơn từ 0 đ'},
  {id:4,name:'Sim Viettel',icon:require('./src/imgs/icon/viettel.jpg'),image:require('./src/imgs/image/giam20max50Viettel.jpg'),title:'Giảm 20%',des:'Tối đa 50.0000đ cho đơn từ 0 đ'},
  {id:5,name:'Sim VietNamMobile',icon:require('./src/imgs/icon/viettel.jpg'),image:require('./src/imgs/image/giam15max50vietnammobile.jpg'),title:'Giảm 15%',des:'Tối đa 50.0000đ cho đơn từ 0 đ'},

]
const discount_female=[
  {id:1,name:'Shang-chi',icon:require('./src/imgs/icon/shang-chi.jpg'),image:require('./src/imgs/image/kh_nu_shangchi.jpg'),title:'Giảm 100k',des:'Cho đơn từ 500.000đ'},
  {id:2,name:'KOMBO-Cơm niêu singpore',icon:require('./src/imgs/icon/komno.jpg'),image:require('./src/imgs/image/kh_nu_kombo.jpg'),title:'Giảm 50%',des:'Giảm tối đa 30.000đ cho đơn từ 0đ'},
  {id:3,name:'Đặt GoFood trên MoMo',icon:require('./src/imgs/icon/gofood.jpg'),image:require('./src/imgs/image/kh_nu_giam15max30.jpg'),title:'Giảm 15%%',des:'Tối đa 40.000đ cho đơn từ 220.000đ'},
  {id:4,name:'Shang-chi',icon:require('./src/imgs/icon/shang-chi.jpg'),image:require('./src/imgs/image/kh_nu_shangchi.jpg'),title:'Giảm 100k',des:'Cho đơn từ 500.000đ'},
  {id:5,name:'yakimono',icon:require('./src/imgs/icon/yakimono.jpg'),image:require('./src/imgs/image/yakimono.jpg'),title:'Giảm 50k',des:'cho đơn từ 100.000đ'},
  {id:6,name:'Đặt GoFood trên MoMo',icon:require('./src/imgs/icon/gofood.jpg'),image:require('./src/imgs/image/kh_nu_giam30toida20.jpg'),title:'Giảm 30%',des:'Tối đa 40.000đ cho đơn từ 220.000đ'},
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function App() {
  const [imgActive, setImgActive] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);
  const scrollViewRef = useRef(null);

  const startAutoSlide = () => {
    const interval = setInterval(() => {
      const nextSlide = (imgActive + 1) % images.length;
      setImgActive(nextSlide);
      scrollViewRef.current.scrollTo({ animated: true, x: WIDTH * nextSlide });
    }, 3000);
  
    setAutoSlideInterval(interval);
  };
  
  useEffect(() => {
    startAutoSlide();
  
    return () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
      }
    };
  }, [imgActive]);

  const onChange = (event) => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
    if (slide !== imgActive) {
      setImgActive(slide);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>

       <View style={[styles.header]}>
                  <View style={styles.input_search}>
                    <Image
                      source={require('./src/imgs/icon/kinh-lup.png')}
                      style={{ height: '60%', width: '10%' ,resizeMode:'contain'}}          
                    />
                    <TextInput placeholder={'Tìm kiếm ưu đãi...'} style={{height:'100%',width:'95%'}} />
                      
                  
                  </View> 

                  <View style={styles.slide_container}>
                          
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
                                   // scrollEventThrottle={16} // Specify the throttle value
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

      </View>
      <View   style={[styles.body]}>
        <View style={styles.gift_container}>

               <TouchableOpacity style={styles.gift_code_input}>
                      <Image source={require('./src/imgs/icon/nhap-ma.png')} style={styles.gift_icon}/>
                      <View style={[styles.gift_text_container]}>
                          <Text style={{fontWeight:'bold'}}>Nhập mã</Text>
                          <Text style={{fontSize:10}}>Mã ưu đãi,mã giới thiệu</Text>
                      </View>
               </TouchableOpacity>
               <TouchableOpacity style={styles.gift_code_input}>
                      <Image source={require('./src/imgs/icon/qua-cua-ban.png')} style={styles.gift_icon}/>
                      <View style={[styles.gift_text_container]}>
                          <Text style={{fontWeight:'bold'}}>Quà của bạn</Text>
                          <Text  style={{fontSize:10}} >có 8 ưu đãi</Text>
                      </View>
               </TouchableOpacity>
        </View>
        <View style={[styles.menu_category]}>
           <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
                     {menu.map((item, index) => (
                        <TouchableOpacity style={styles.menu_item} key={item.id}>
                            <Image source={item.icon} style={styles.menu_icon}/>
                            <Text style={[styles.menu_text,{fontSize:10,textAlign:'center'}]}>{item.name}</Text>
                        </TouchableOpacity>
                      ))}
                  
          </ScrollView>
        </View>
        <ImageBackground source={require('./src/imgs/image/background.jpg')} style={[styles.main_event]}>
                 <View style={[styles.kh_data_container]}>
                  <View style={{flexDirection:'row',width:'100%'}}>
                      <Text style={{fontSize:20,fontWeight:'bold',color:'white',marginLeft:10}}>Trạm sạc data </Text>
                      <Image source={require('./src/imgs/icon/arrow.png')} style={{height:'100%',resizeMode:'contain'}}></Image>

                  </View>

                      <ScrollView   pagingEnabled
                                    horizontal>
                              {discount_data.map((item, index) => (
                              <TouchableOpacity style={styles.data_item} key={item.id}>
                                  <Image source={item.image} style={styles.image_data}/>
                                  <View style={{width:'100%',height:'40%',paddingLeft:5}}>

                                  <View style={{flexDirection:'row',width:'100%',height:'20%',alignItems:'center'}}>
                                        <Image source={item.icon} style={{width:'10%',height:'80%'}}></Image>
                                        
                                       
                                        <Text style={[styles.menu_text,{fontSize:12,textAlign:'center',marginLeft:5,color:'grey'}]}>{item.name}</Text>
                                        
                                  </View>
                                  <Text style={{width:'100%',fontWeight:'bold',fontSize:15}}>{item.title}</Text>
                                  <Text style={{width:'100%',fontSize:14}}>
                                    {item.des}
                                  </Text>
                                  <View style={{width:'100%',height:30,justifyContent:'flex-end',alignItems:'flex-end'}}>
                                      <TouchableOpacity style={{padding:5,borderWidth:1,borderColor:'#eb2d9d',borderRadius:5,marginRight:10}}>
                                          <Text style={{color:'#eb2d9d',fontWeight:'bold'}}>Thu thập</Text>
                                      </TouchableOpacity>
                                  </View>
                                  </View>
                                 
                                  
                              </TouchableOpacity>
                      ))}
                      </ScrollView>
                 </View>
        </ImageBackground>
        <View  style={[styles.container_type]}>
                 <View style={[styles.kh_male_container]}>
                      <View style={{width:'100%',flexDirection:'row',paddingVertical:20}}>
                           <Image source={require('./src/imgs/icon/hoa-dao.jpg')} style={{height:'100%',resizeMode:'contain'}}></Image>
                          <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginLeft:-15}}>Deal dành cho phái nữ</Text>
                              <Image source={require('./src/imgs/icon/arrow.png')} style={{height:'100%',resizeMode:'contain'}}></Image>
                      </View>
                      <ScrollView   pagingEnabled
                                    horizontal>
                              {discount_female.map((item, index) => (
                              <TouchableOpacity style={styles.data_item} key={item.id}>
                                  <Image source={item.image} style={styles.image_data}/>
                                  <View style={{width:'100%',height:'40%',paddingLeft:5}}>

                                  <View style={{flexDirection:'row',width:'100%',height:'20%',alignItems:'center'}}>
                                        <Image source={item.icon} style={{width:'10%',height:'80%'}}></Image>
                                        
                                       
                                        <Text style={[styles.menu_text,{fontSize:12,textAlign:'center',marginLeft:5,color:'grey'}]}>{item.name}</Text>
                                        
                                  </View>
                                  <Text style={{width:'100%',fontWeight:'bold',fontSize:15}}>{item.title}</Text>
                                  <Text style={{width:'100%',fontSize:14}}>
                                    {item.des}
                                  </Text>
                                  <View style={{width:'100%',height:30,justifyContent:'flex-end',alignItems:'flex-end'}}>
                                      <TouchableOpacity style={{padding:5,borderWidth:1,borderColor:'#eb2d9d',borderRadius:5,marginRight:10}}>
                                          <Text style={{color:'#eb2d9d',fontWeight:'bold'}}>Thu thập</Text>
                                      </TouchableOpacity>
                                  </View>
                                  </View>
                                 
                                  
                              </TouchableOpacity>
                      ))}
                      </ScrollView>
                 </View>
        </View>
        <View  style={[styles.container_type]}>
                 <View style={[styles.kh_male_container]}>
                      <View style={{width:'100%',flexDirection:'row',paddingVertical:20}}>
                          <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginLeft:30}}>Ưu đãi ăn uống</Text>
                              <Image source={require('./src/imgs/icon/arrow.png')} style={{height:'100%',resizeMode:'contain'}}></Image>
                      </View>
                      <ScrollView   pagingEnabled
                                    horizontal>
                              {discount_female.map((item, index) => (
                              <TouchableOpacity style={styles.data_item} key={item.id}>
                                  <Image source={item.image} style={styles.image_data}/>
                                  <View style={{width:'100%',height:'40%',paddingLeft:5}}>

                                  <View style={{flexDirection:'row',width:'100%',height:'20%',alignItems:'center'}}>
                                        <Image source={item.icon} style={{width:'10%',height:'80%'}}></Image>
                                        
                                       
                                        <Text style={[styles.menu_text,{fontSize:12,textAlign:'center',marginLeft:5,color:'grey'}]}>{item.name}</Text>
                                        
                                  </View>
                                  <Text style={{width:'100%',fontWeight:'bold',fontSize:15}}>{item.title}</Text>
                                  <Text style={{width:'100%',fontSize:14}}>
                                    {item.des}
                                  </Text>
                                  <View style={{width:'100%',height:30,justifyContent:'flex-end',alignItems:'flex-end'}}>
                                      <TouchableOpacity style={{padding:5,borderWidth:1,borderColor:'#eb2d9d',borderRadius:5,marginRight:10}}>
                                          <Text style={{color:'#eb2d9d',fontWeight:'bold'}}>Thu thập</Text>
                                      </TouchableOpacity>
                                  </View>
                                  </View>
                                 
                                  
                              </TouchableOpacity>
                      ))}
                      </ScrollView>
                 </View>
                 
        </View>
        <View  style={[styles.container_type]}>
                 <View style={[styles.kh_male_container]}>
                      <View style={{width:'100%',flexDirection:'row',paddingVertical:20}}>
                          <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginLeft:30}}>Ưu đãi dành cho bạn</Text>
                              <Image source={require('./src/imgs/icon/arrow.png')} style={{height:'100%',resizeMode:'contain'}}></Image>
                      </View>
                      <ScrollView   pagingEnabled
                                    horizontal>
                              {discount_female.map((item, index) => (
                              <TouchableOpacity style={styles.data_item} key={item.id}>
                                  <Image source={item.image} style={styles.image_data}/>
                                  <View style={{width:'100%',height:'40%',paddingLeft:5}}>

                                  <View style={{flexDirection:'row',width:'100%',height:'20%',alignItems:'center'}}>
                                        <Image source={item.icon} style={{width:'10%',height:'80%'}}></Image>
                                        
                                       
                                        <Text style={[styles.menu_text,{fontSize:12,textAlign:'center',marginLeft:5,color:'grey'}]}>{item.name}</Text>
                                        
                                  </View>
                                  <Text style={{width:'100%',fontWeight:'bold',fontSize:15}}>{item.title}</Text>
                                  <Text style={{width:'100%',fontSize:14}}>
                                    {item.des}
                                  </Text>
                                  <View style={{width:'100%',height:30,justifyContent:'flex-end',alignItems:'flex-end'}}>
                                      <TouchableOpacity style={{padding:5,borderWidth:1,borderColor:'#eb2d9d',borderRadius:5,marginRight:10}}>
                                          <Text style={{color:'#eb2d9d',fontWeight:'bold'}}>Thu thập</Text>
                                      </TouchableOpacity>
                                  </View>
                                  </View>
                                 
                                  
                              </TouchableOpacity>
                      ))}
                      </ScrollView>
                 </View>
                 
        </View>
        <View  style={[styles.container_type_gift]}>
                 <View style={[styles.kh_male_container]}>
                      <View style={{width:'100%',flexDirection:'row',paddingVertical:20}}>
                          <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginLeft:30}}>Quà của bạn</Text>
                              <Image source={require('./src/imgs/icon/arrow.png')} style={{height:'100%',resizeMode:'contain'}}></Image>
                      </View>
                      <ScrollView   pagingEnabled
                                    horizontal>
                              {discount_female.map((item, index) => (
                              <TouchableOpacity style={styles.data_gift} key={item.id}>
                                  <Image source={item.image} style={styles.image_data}/>
                                  <View style={{width:'100%',height:'40%',paddingLeft:5}}>

                                  <View style={{flexDirection:'row',width:'100%',height:'20%',alignItems:'center'}}>
                                        <Image source={item.icon} style={{width:'10%',height:'80%'}}></Image>
                                        
                                       
                                        <Text style={[styles.menu_text,{fontSize:12,textAlign:'center',marginLeft:5,color:'grey'}]}>{item.name}</Text>
                                        
                                  </View>
                                  <Text style={{width:'100%',fontWeight:'bold',fontSize:15}}>{item.title}</Text>
                                  <Text style={{width:'100%',fontSize:14}}>
                                    {item.des}
                                  </Text>
                                  <View style={{width:'100%',height:30,justifyContent:'flex-end',alignItems:'flex-end'}}>
                                      <TouchableOpacity style={{padding:5,borderWidth:1,borderColor:'#eb2d9d',borderRadius:5,marginRight:10}}>
                                          <Text style={{color:'#eb2d9d',fontWeight:'bold'}}>Thu thập</Text>
                                      </TouchableOpacity>
                                  </View>
                                  </View>
                                 
                                  
                              </TouchableOpacity>
                      ))}
                      </ScrollView>
                 </View>
                 
        </View>                          
      </View>
     
      </View>
  
      
      
    </ScrollView>
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
    justifyContent: 'flex-start',
   width:'100%'

  },
  header:{
   flex:1,
    width:'100%',
    backgroundColor: '#F1F1F3',
    justifyContent:'flex-start',
    alignItems:'center',
    height:HEIGHT*0.3
    
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
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
  slide_container:{
  },
  body:{
  flex:1,
    width:'100%',    
    alignItems:'center',
    justifyContent:'flex-start',
    backgroundColor: '#F1F1F3',


  },
  gift_container:{
    width:'90%',height:80,
    marginTop:-55,
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
    backgroundImage:require('./src/imgs/image/background.jpg'),
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  container_type_gift:{
    width:'100%',
    height:HEIGHT*0.4
    
  },
  main_event:{
    width:'100%',
    height:HEIGHT*0.7,
    borderWidth:1,
    backgroundImage:require('./src/imgs/image/background.jpg')
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
    height:HEIGHT*0.35,
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
