import React from 'react';
import { VirtualizedList, Text, View, TouchableHighlight } from 'react-native';
import GenericAddItemView from './GenericAddItemView';
import RootView from './RootView';
import { DatastoreContext } from './datastore-context';

const RecipesScreen = ({ navigation }) => {
    const mockRecipes = {
        'Spaghetti and Meatballs': {}
    };

    const recipeKeys = Object.keys(mockRecipes);

    const getItem = (data, index) => ({
        id: Math.random().toString(12).substring(0),
        recipeName: recipeKeys[index]
    });

    const Row = ({ text }) => (
        <TouchableHighlight onPress={() => navigation.navigate('RecipeScreen', { key: text })}>
            <View style={{ backgroundColor: '#ffffff', height: 50, borderBottomWidth: 2 }}>
                <Text style={{ fontSize: 24 }}>{ text }</Text>
            </View>
        </TouchableHighlight>
    );

    return (
        <DatastoreContext.Consumer>
            {datastore => (
                <RootView>
                    <GenericAddItemView usingAddItemScreen="EditListScreen" navigation={navigation}>
                        <VirtualizedList
                            data={recipeKeys}
                            getItem={getItem}
                            renderItem={({ item }) => <Row text={item.recipeName} />}
                            getItemCount={() => recipeKeys.length}
                        />
                    </GenericAddItemView>
                </RootView>
            )}

        </DatastoreContext.Consumer>
    );
};

export default RecipesScreen;