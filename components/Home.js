import React from 'react';
import OverviewScreen from './OverviewScreen';
import ShoppingList from './ShoppingList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
        </Tabs.Navigator>
    );
};

export default Home;