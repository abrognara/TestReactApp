import React from 'react';
import BasicScreenView from './BasicScreenView';

import {
    Text,
    View
} from 'react-native';

const ShoppingList = () => {
    return (
        <BasicScreenView>
            <View>
                <Text>Text for the shopping list page.</Text>
            </View>
        </BasicScreenView>
    );
};

export default ShoppingList;