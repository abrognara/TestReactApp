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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type {Node} from 'react';
import { useColorScheme } from 'react-native';
import EditListScreen from './components/EditListScreen';
import RecipeScreen from './components/RecipeScreen';

const Stack = createNativeStackNavigator();
const datastore = new Datastore();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <ThemeContext.Provider value={ isDarkMode ? themes.dark : themes.light }>
        <DatastoreContext.Provider value={ datastore }>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={ Home }
              options={{ headerShown: false }}
            />
            <Stack.Screen name="RecipeScreen" component={ RecipeScreen } />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
              <Stack.Screen name="EditListScreen" component={ EditListScreen } />
            </Stack.Group>
          </Stack.Navigator>
        </DatastoreContext.Provider>
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};

export default App;
