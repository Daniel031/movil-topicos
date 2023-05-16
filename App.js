import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignUpDataScreen from './screens/SignUpScreenData';
import LoginScreenCamera from './screens/LoginScreenCamera';
import SignUpScreenCamera from './screens/SignUpScreenCamera';
import HomeUserScreen from './screens/HomeUserScreen';
import HttpClient from './services/HttpClient';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginScreen}/>
        <Stack.Screen name="Login" component={LoginScreenCamera}/>
        <Stack.Screen name="SignUp" component={SignUpScreenCamera}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
