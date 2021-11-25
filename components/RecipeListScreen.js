import React from 'react';
import { VirtualizedList, Text, View, TouchableHighlight } from 'react-native';
import HeaderView from './HeaderView';
import RootView from './RootView';
import DynamicList from './DynamicList';
import { DatastoreContext } from './datastore-context';

const RecipeListScreen = ({ navigation, route }) => {
    return (
        <DatastoreContext.Consumer>
            {datastore => {
                const recipeKeys = Object.keys(datastore.getAllRecipes());
                console.log(recipeKeys);
                return (
                    <RootView>
                        <HeaderView
                            navigation={navigation}
                            headerRight={{
                                btnTitle: "Add",
                                destScreenName: "AddRecipeScreen"
                            }}
                        >
                            <DynamicList
                                navigation={navigation}
                                route={route}
                                setTextList={null}
                                textList={recipeKeys}
                                editable={false}
                            />
                        </HeaderView>
                    </RootView>
                );
            }}
        </DatastoreContext.Consumer>
    );
};

export default RecipeListScreen;