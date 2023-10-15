import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import MainView from './src/views/MainView';
import Home from './src/views/Home';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllServicesView from './src/views/AllServiceView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator screenOptions={{headerShown: false}}> 
        <Stack.Screen name="MainView" component = {MainView} /> 
        <Stack.Screen name="HomeScreen" component = {Home} />
        <Stack.Screen name="AllServicesScreen" component={AllServicesView}/>
      </Stack.Navigator> 
    </NavigationContainer> 
  );
}


