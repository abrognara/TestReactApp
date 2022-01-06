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
    const { data, err } = useFetchCache('https://sandros-recipe-app.herokuapp.com/ingredients');

    const getIngredientNames = () => {
        console.log(`response from hook: ${JSON.stringify(data)}`);
        if (err) {
            console.log(`Failed to fetch ingredients, status = ${err.status}, msg = ${err.statusText}`);
            return [];
        }
        return data ? data.map(i => i.name) : [];
    }

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