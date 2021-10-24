/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StandardScreenStyle } from './components/standard-screen-style';
import Datastore from './components/Datastore';
import Home from './components/Home';
import ShoppingList from './components/ShoppingList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import {
  useColorScheme,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();
const datastore = new Datastore();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <StandardScreenStyle.Provider value={ backgroundStyle }>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ShoppingList" component={ShoppingList} />
        </Stack.Navigator>
      </StandardScreenStyle.Provider>
    </NavigationContainer>
  );
};

export default App;
