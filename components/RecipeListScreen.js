import React from 'react';
import { VirtualizedList, Text, View, TouchableHighlight } from 'react-native';
import HeaderView from './HeaderView';
import RootView from './RootView';
import DynamicList from './DynamicList';

const RecipeListScreen = ({ navigation, route }) => {
    const mockRecipes = {
        'Spaghetti and Meatballs': {}
    };

    const recipeKeys = Object.keys(mockRecipes);

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
};

export default RecipeListScreen;