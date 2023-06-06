import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreenCamera from '../screens/UI/SignUpScreenCamera';
import LoginScreen from '../screens/UI/LoginScreen';
import HomeScreen from '../screens/UI/HomeScreen';

const Stack = createNativeStackNavigator();

export default function AuthenticationRoute() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Main" options={{headerShown:false}} component={HomeScreen} />
        <Stack.Screen name="Registrate" component={SignUpScreenCamera} />
        <Stack.Screen name="Iniciar Sesion" component={LoginScreen} /> 
      </Stack.Navigator> 
  );
}
