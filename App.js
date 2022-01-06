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
import AddRecipeScreen from './components/AddRecipeScreen';
import RecipeDetailsScreen from './components/RecipeDetailsScreen';
import EditableListItemScreen from './components/EditableListItemScreen';
import AddIngredientScreen from './components/AddIngredientScreen'

const Stack = createNativeStackNavigator();
const datastore = new Datastore();

// fetch('https://sandros-recipe-app.herokuapp.com/ingredients')
//   .then(res => res.json())
//   .then(data => {
//     console.log(`fetched ingredients for caching: ${JSON.stringify(data)}`);
//     datastore.setIngredients(data);
//   });

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // console.log(`fetched ingredients for caching: ${fetch('https://sandros-recipe-app.herokuapp.com/ingredients')}`);
  datastore.setIngredients(fetch('https://sandros-recipe-app.herokuapp.com/ingredients'));
  
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
            <Stack.Screen name="RecipeDetailsScreen" component={ RecipeDetailsScreen } />
            <Stack.Screen name="EditableListItemScreen" component={ EditableListItemScreen } />
            {/* <Stack.Group screenOptions={{ presentation: 'modal' }}> */}
              <Stack.Screen name="AddRecipeScreen" component={ AddRecipeScreen } />
              <Stack.Screen name="AddIngredientScreen" component={ AddIngredientScreen } />
            {/* </Stack.Group> */}
          </Stack.Navigator>
        </DatastoreContext.Provider>
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};

export default App;
