import * as React from 'react';
import { View ,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUpScreenCamera from './SignUpScreenCamera';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

export default function HomeUserScreen(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name ="SignUp" component={SignUpScreenCamera} />
        </Tab.Navigator>
    );
}