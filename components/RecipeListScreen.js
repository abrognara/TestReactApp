import React from 'react';
import { VirtualizedList, Text, View, TouchableHighlight } from 'react-native';
import GenericAddItemView from './GenericAddItemView';
import RootView from './RootView';
import { DatastoreContext } from './datastore-context';
import DynamicList from './DynamicList';

const RecipeListScreen = ({ navigation, route }) => {
    const mockRecipes = {
        'Spaghetti and Meatballs': {}
    };

    const recipeKeys = Object.keys(mockRecipes);

    return (
        <DatastoreContext.Consumer>
            {datastore => (
                <RootView>
                    <GenericAddItemView usingAddItemScreen="AddRecipeScreen" navigation={navigation}>
                        <DynamicList
                            navigation={navigation}
                            route={route}
                            setTextList={null}
                            textList={recipeKeys}
                            editable={false}
                        />
                    </GenericAddItemView>
                </RootView>
            )}

        </DatastoreContext.Consumer>
    );
};

export default RecipeListScreen;