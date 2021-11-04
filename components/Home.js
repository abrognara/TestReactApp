import React from 'react';
import OverviewScreen from './OverviewScreen';
import ShoppingList from './ShoppingList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecipesScreen from './RecipesScreen';

const Tabs = createBottomTabNavigator();

const Home = ({ navigation }) => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name="OverviewScreen" 
                component={OverviewScreen}
                options={{ title: 'Daily Overview' }}
            />
            <Tabs.Screen
                name="ShoppingList"
                component={ShoppingList}
                options={{ title: 'Shopping List' }}
            />
            <Tabs.Screen
                name="RecipesScreen"
                component={RecipesScreen}
                options={{ title: 'Recipes' }}
            />
        </Tabs.Navigator>
    );
};

export default Home;