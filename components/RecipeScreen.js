import React, { useEffect } from 'react';

import { View, Text } from 'react-native';
import { DatastoreContext } from './datastore-context';

const RecipeScreen = ({ route, navigation }) => {
    useEffect(() => {
        if (route.params?.objToUpdate) {
            // update datastore
        }
    }, [route.params?.objToUpdate]);

    const { key } = route.params; // use key to fetch recipe from datastore

    return (
        <DatastoreContext.Consumer>
            {datastore => {
                const { ingredients, steps } = datastore.getRecipe(key);
                return (
                    <View>
                        <Text>This is a recipe for { key }</Text>
                        <Text>Ingredients</Text>
                        <Text>{ ingredients }</Text>
                        <Text>Steps</Text>
                        <Text>{ steps }</Text>
                    </View>
                );
            }}
        </DatastoreContext.Consumer>
    );
};

export default RecipeScreen;