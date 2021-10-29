import React from 'react';
import BasicScreenView from './BasicScreenView';
import { Text, Button } from 'react-native';

const OverviewScreen = ({ navigation }) => {
    return (
        <BasicScreenView>
            <Text>Overview Page</Text>
            <Button
                title="Shopping List"
                onPress={() => navigation.navigate('ShoppingList')}
            />
        </BasicScreenView>
    );
};

export default OverviewScreen;