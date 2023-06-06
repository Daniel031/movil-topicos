import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryScreen from '../screens/UI/HomeUI/HistoryScreen';
import ReportShowScreen from '../screens/UI/HomeUI/Reports/ReportShowScreen';
import ReportEditScreen from '../screens/UI/HomeUI/Reports/ReportEditScreen';


const Stack = createNativeStackNavigator();

export default function Report() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="HistoryScreen" options={{headerShown:false}} component={HistoryScreen} />
        <Stack.Screen name="ShowReport" options={{headerShown:false}} component={ReportShowScreen} />
        <Stack.Screen name="EditReport" options={{headerShown:false}} component={ReportEditScreen} />
      </Stack.Navigator> 
  );
}
