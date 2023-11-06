import { StatusBar } from 'expo-status-bar';
import MainView from './src/views/MainView';
import Home from './src/views/Home';
import Discount from './src/views/Discounts';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllServicesView from './src/views/allServiceViews/AllServiceView';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator screenOptions={{headerShown: false }} initialRouteName='DiscountScreen'> 
        <Stack.Screen name="MainView" component = {MainView} /> 
        <Stack.Screen name="HomeScreen" component = {Home} />
        <Stack.Screen name="AllServicesScreen" component={AllServicesView}/>
        <Stack.Screen name="DiscountScreen" component={Discount}/>
      </Stack.Navigator> 
    </NavigationContainer> 
  );
}
