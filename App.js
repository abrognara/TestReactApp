/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ThemeContext, themes } from './components/ThemeContext';
import { DatastoreContext } from './components/datastore-context';
import Datastore from './components/Datastore';
import Home from './components/Home';
import ShoppingList from './components/ShoppingList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import { useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();
const datastore = new Datastore();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? themes.dark : themes.light
  // };

  return (
    <NavigationContainer>
      <ThemeContext.Provider value={ isDarkMode ? themes.dark : themes.light }>
        <DatastoreContext.Provider value={ datastore }>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={ Home } />
            <Stack.Screen name="ShoppingList" component={ ShoppingList } />
          </Stack.Navigator>
        </DatastoreContext.Provider>
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};

export default App;
