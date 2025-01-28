import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import {HomeScreen} from '../screens/Home/HomeScreen';
import {AddTask} from '../screens/AddTask/AddTask';
import {LoginScreen} from '../screens/LoginScreen/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen/RegisterScreen';

const Stack = createStackNavigator();

// Näkymä, jossa käyttäjä ei ole kirjautunut
export const NonAuthenticated = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={LoginScreen} />
      <Stack.Screen name={Routes.Register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

// Näkymä, jossa käyttäjä on kirjautunut
export const Authenticated = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={HomeScreen} />
      <Stack.Screen name={Routes.AddTask} component={AddTask} />
    </Stack.Navigator>
  );
};
