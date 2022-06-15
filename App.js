import * as React from 'react';
import { View, Text ,AppRegistry, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';

//Screen Import
import HomeScreen from './screens/homeScreen';
import CreateWalletScreen from './screens/createWalletScreen';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='CreateWallet' component={CreateWalletScreen} options={{title:'Create Wallet'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;