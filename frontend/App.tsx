import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home} from './screens/Home/Home';
import {Routes} from './navigation/Routes';
import {AddTask} from './screens/AddTask/AddTask';
import {Provider} from 'react-redux';
import store from './redux/store/store';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Routes.Home}
          screenOptions={{header: () => null, headerShown: false}}>
          <Stack.Screen name={Routes.Home} component={Home} />
          <Stack.Screen name={Routes.AddTask} component={AddTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
