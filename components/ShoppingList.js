import React, { useState, useEffect } from 'react';
import { DatastoreContext } from './datastore-context';
import BasicScreenView from './BasicScreenView';
import StaticTable from './StaticTable';

import {
    Text,
    View
} from 'react-native';

const ShoppingList = () => {
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