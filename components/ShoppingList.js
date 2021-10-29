import React, { useState, useEffect } from 'react';
import { DatastoreContext } from './datastore-context';
import BasicScreenView from './BasicScreenView';
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
                <Button title="+" onPress={() => navigation.navigate('EditListScreen')} />
            )
        });
    }, [navigation]);

    return (
        <DatastoreContext.Consumer>
            {datastore => {
                const data = datastore.readAll();
                return (
                    <BasicScreenView>
                        <StaticTable
                            title="Ingredients"
                            data={data.ingredients}
                        />
                    </BasicScreenView>
                )}
            }
        </DatastoreContext.Consumer>
    );
};

export default ShoppingList;