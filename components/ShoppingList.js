import React, { useState, useEffect } from 'react';
import { DatastoreContext } from './datastore-context';
import RootView from './RootView';
import StaticTable from './StaticTable';

import {
    Button,
    Text,
    View
} from 'react-native';

const ShoppingList = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button title="+" onPress={() => navigation.navigate('AddRecipeScreen')} />
            )
        });
    }, [navigation]);

    return (
        <DatastoreContext.Consumer>
            {datastore => {
                const data = datastore.readAll();
                return (
                    <RootView>
                        <StaticTable
                            title="Ingredients"
                            data={data.ingredients}
                        />
                    </RootView>
                )}
            }
        </DatastoreContext.Consumer>
    );
};

export default ShoppingList;