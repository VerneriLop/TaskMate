import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home} from './screens/Home';
import {Routes} from './navigation/Routes';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.Home}
        screenOptions={{header: () => null, headerShown: false}}>
        <Stack.Screen name={Routes.Home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
