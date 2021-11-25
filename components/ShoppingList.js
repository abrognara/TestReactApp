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
                    </HeaderView>
                )}
            }
        </DatastoreContext.Consumer>
    );
};

export default ShoppingList;