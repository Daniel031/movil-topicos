import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreenCamera from '../screens/UI/SignUpScreenCamera';
import LoginScreen from '../screens/UI/LoginScreen';
import UserMenu from './UserMenu.route';
import AuthenticationRoute from './Authentication.route';

const Stack = createNativeStackNavigator();

const userAuthenticated = ()=>{
    return true;
};

export default function InitRoute() {
  return (
      <Stack.Navigator>
         <Stack.Screen name="NoLoguedado" options={{headerShown:false}} component={AuthenticationRoute} />
         <Stack.Screen name="HomeUser" component={UserMenu} options={{headerShown:false}}/>
      </Stack.Navigator> 
  );
}
 