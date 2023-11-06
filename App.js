import { StatusBar } from 'expo-status-bar';
import Home from './src/views/Home';
import Discount from './src/views/Discounts';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllServicesView from './src/views/allServiceViews/AllServiceView';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
function MyTab() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#99116f',
      tabBarLabelStyle: {
        fontSize: 15
      },
      tabBarStyle: {
        paddingVertical: 10
      }
    }}>
        <Tab.Screen name='MoMo' component={Home} options={{
          tabBarIcon: ({focused}) => {
            const iconSource =  focused ? require('./src/imgs/icon/momo.png') : require('./src/imgs/icon/momo-unfocus.png')
            return(
            <Image source={iconSource}
              style={{width: 30, height: 30}}/>
            )
          }
        }}></Tab.Screen>
        <Tab.Screen name='discount' component={Discount} options={{
          tabBarIcon: ({focused}) => {
            const iconSource =  focused ? require('./src/imgs/icon/uudaifocus.png') : require('./src/imgs/icon/uu-dai.png')
            return(
            <Image source={iconSource}
              style={{width: 30, height: 30}}/>
            )
          }
        }}></Tab.Screen>
        <Tab.Screen name='Lịch sử GD' component={AllServicesView} options={{
          tabBarIcon: ({focused}) => {
            const iconSource =  focused ? require('./src/imgs/icon/lsgdfocus.png') : require('./src/imgs/icon/lich-su-gd.png')
            return(
            <Image source={iconSource}
              style={{width: 30, height: 30}}/>
            )
          }
        }}></Tab.Screen>
        <Tab.Screen name='Cộng đồng' component={AllServicesView} options={{
          tabBarIcon: ({focused}) => {
            const iconSource =  focused ? require('./src/imgs/icon/congdongfocus.png') : require('./src/imgs/icon/cong-dong.png')
            return(
            <Image source={iconSource}
              style={{width: 30, height: 30}}/>
            )
          }
        }}></Tab.Screen>
        <Tab.Screen name='Tôi' component={AllServicesView} options={{
          tabBarIcon: ({focused}) => {
            const iconSource =  focused ? require('./src/imgs/icon/toifocus.png') : require('./src/imgs/icon/toi.png')
            return(
            <Image source={iconSource}
              style={{width: 30, height: 30}}/>
            )
          }
        }}></Tab.Screen> 
      </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator screenOptions={{headerShown: false}}> 
        <Stack.Screen name="HomeScreen" component = {MyTab} />
        <Stack.Screen name="AllServicesScreen" component={AllServicesView}/>
        <Stack.Screen name="DiscountScreen" component={Discount}/>
      </Stack.Navigator> 
      
    </NavigationContainer> 
  );
}
