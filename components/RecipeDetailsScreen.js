import React, { useEffect } from 'react';

import { View, Text } from 'react-native';
import { DatastoreContext } from './datastore-context';
import HeaderView from './HeaderView';

const RecipeDetailsScreen = ({ navigation, route }) => {
    const { key } = route.params; // use key to fetch recipe from datastore

    return (
        <DatastoreContext.Consumer>
            {datastore => {
                const { ingredients, steps } = datastore.getRecipe(key);
                return (
                    // TODO does it make sense to send over name + lists over params? (useContext instead?)
                    <HeaderView
                        navigation={navigation}
                        headerRight={{
                            btnTitle: "Edit",
                            destScreenName: "AddRecipeScreen",
                            params: {
                                defaultValues: {
                                    recipeName: key, 
                                    stepsList: steps,
                                    ingredientsList: ingredients
                                }
                            }
                        }}
                    >
                        <Text>This is a recipe for { key }</Text>
                        <Text>Ingredients</Text>
                        <Text>{ ingredients }</Text>
                        <Text>Steps</Text>
                        <Text>{ steps }</Text>
                    </HeaderView>
                );
            }}
        </DatastoreContext.Consumer>
    );
};

export default RecipeDetailsScreen;