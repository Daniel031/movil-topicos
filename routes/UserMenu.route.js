import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfile from '../screens/UI/HomeUI/UserProfile';
import InitScreen from '../screens/UI/HomeUI/InitScreen';
import Report from './Report.route';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReportCreateScreen from '../screens/UI/HomeUI/Reports/ReportCreateScreen';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ReportNav = ()=>{
    return (
        <Stack.Navigator>
          <Stack.Screen name="ini" component={InitScreen} options={{ headerShown:false }}/>
          <Stack.Screen name="CreateReport" options={{headerShown:false}} component={ReportCreateScreen} />
        </Stack.Navigator> 
    );
  }

export default function UserMenu(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={ReportNav} options={{ headerTitleAlign:'center' }}/>
            <Tab.Screen name="Historial" component={Report} options={{ headerTitleAlign:'center' }}/>
            <Tab.Screen name="Mi perfil" component={UserProfile} options={{ headerTitleAlign:'center' }}/>
        </Tab.Navigator>
    );
}