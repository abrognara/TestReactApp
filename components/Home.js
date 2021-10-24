import React from 'react';

import {
    View,
    Text,
    Button
} from 'react-native';

import BasicScreenView from './BasicScreenView';

const Home = ({ navigation }) => {
    return (
        <BasicScreenView>
            <Text>Home Page</Text>
            <Button
                title="Shopping List"
                onPress={() => navigation.navigate('ShoppingList')}
            />
        </BasicScreenView>
    );
};

export default Home;