import React from 'react';
import HeaderView from './HeaderView';
import DynamicList from './DynamicList';
import useFetchCache from './hooks/useFetchCache';

import {
    Button,
    Text,
    View
} from 'react-native';

// This component will show list of aggregated ingredients needed for all recipes within 
// the active schedule. Users can also add other ingredients.
const ShoppingList = ({ navigation, route }) => {
    const { ingredients, err } = useFetchCache('https://sandros-recipe-app.herokuapp.com/ingredients');

    const getIngredientNames = () => {
        if (err) {
            console.log(`Failed to fetch ingredients, status = ${err.status}, msg = ${err.statusText}`);
            return [];
        }
        console.log(`fetched ingredients: ${JSON.stringify(ingredients)}`);
        return ingredients ? ingredients.map(i => i.name) : [];
    }

    // const fetchIngredients = () => {
    //     // test get ingredients from mysql table
    //     fetch('https://sandros-recipe-app.herokuapp.com/ingredients')
    //         .then(res => res.json())
    //         .then(data => console.log(data));
    // };

    return (
        <HeaderView
            navigation={navigation}
            headerRight={{
                btnTitle: "Add",
                destScreenName: "AddIngredientScreen"
            }}
        >
            <DynamicList
                navigation={navigation}
                route={route}
                setTextList={null}
                textList={getIngredientNames()}
                editable={false}
            />
        </HeaderView>
    );
};

export default ShoppingList;