import React from 'react';
import { VirtualizedList, Text, View, TouchableHighlight } from 'react-native';
import RootView from './RootView';

const RecipesScreen = ({ navigation }) => {
    const mockRecipes = {
        'Chop Suey': {
            ingredients: [],
            steps: []
        },
        'Chicken Parmesan': {},
        'Smoked Brisket': {},
        'Recipe4': {},
        'Recipe5': {},
        'Recipe6': {},
        'Recipe7': {},
        'Recipe8': {},
        'Recipe9': {},
        'Recipe10': {},
        'Recipe11': {},
        'Recipe12': {},
        'Recipe13': {},
        'Recipe14': {},
        'Recipe15': {},
        'Recipe16': {},
        'Recipe17': {},
        'Recipe18': {},
        'Recipe19': {},
        'Recipe20': {}
    };

    const recipeKeys = Object.keys(mockRecipes);

    const getItem = (data, index) => ({
        id: Math.random().toString(12).substring(0),
        recipeName: recipeKeys[index]
    });

    const Row = ({ text }) => (
        <TouchableHighlight onPress={() => console.log(`Pressed ${text}`)}>
            <View style={{ backgroundColor: '#ffffff', height: 50, borderBottomWidth: 2 }}>
                <Text style={{ fontSize: 24 }}>{ text }</Text>
            </View>
        </TouchableHighlight>
    );

    return (
        <RootView>
            <VirtualizedList
                data={recipeKeys}
                getItem={getItem}
                renderItem={({ item }) => <Row text={item.recipeName} />}
                getItemCount={() => recipeKeys.length}
            />
        </RootView>
    );
};

export default RecipesScreen;