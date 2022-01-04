import React, { useState, useEffect } from 'react';
import { DatastoreContext } from './datastore-context';
import HeaderView from './HeaderView';
import StaticTable from './StaticTable';

import {
    Button,
    Text,
    View
} from 'react-native';

const ShoppingList = ({ navigation }) => {

    const fetchIngredients = () => {
        // test get ingredients from mysql table
        fetch('https://sandros-recipe-app.herokuapp.com/ingredients')
            .then(res => res.json())
            .then(data => console.log(data));
    };

    return (
        <DatastoreContext.Consumer>
            {datastore => {
                const data = datastore.readAll();
                return (
                    <HeaderView
                        navigation={navigation}
                        headerRight={{
                            btnTitle: "Add",
                            destScreenName: "AddIngredientScreen"
                        }}
                    >
                        <StaticTable
                            title="Ingredients"
                            data={data.ingredients}
                        />
                        <Button title="Test GET /ingredients" onPress={fetchIngredients} />
                    </HeaderView>
                )}
            }
        </DatastoreContext.Consumer>
    );
};

export default ShoppingList;