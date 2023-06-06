import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationRoute from './routes/Authentication.route';
import InitRoute from './routes/Init.route';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>  
        <Stack.Screen name="ShowReport" options={{headerShown:false}} component={InitRoute} /> 
      </Stack.Navigator> 
    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  header: {
    textAlign: 'center'
  },
}); 


/* <Stack.Screen name="HomeUser" component={UserMenu} options={{ headerShown:false, headerTitleAlign:'center' }}/> */