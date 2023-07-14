import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfile from '../screens/UI/HomeUI/UserProfile';
import InitScreen from '../screens/UI/HomeUI/InitScreen';
import Report from './Report.route';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReportCreateScreen from '../screens/UI/HomeUI/Reports/ReportCreateScreen';
import { useEffect } from 'react';
import * as Notifications from "expo-notifications"
import getNotifications from './../ExpoNotifications';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ReportNav = ()=>{

    const { registerForPushNotificationsAsync, handleNotificationResponse } = getNotifications;
    useEffect(() => { 
      registerForPushNotificationsAsync();
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: true
          ,
        }),
      });
  
      const responseListener = 
      Notifications.addNotificationResponseReceivedListener(
        handleNotificationResponse
        );
  
        /*return () => {
          Notifications.removeNotificationSubscription(responseListener);
        }*/
  
    },[]);

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