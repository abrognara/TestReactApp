import React, { useState, useEffect } from 'react';
import RootView from './RootView';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Button
} from 'react-native';

const EditListScreen = ({ navigation }) => {
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        // TODO parent handles submit action so this component can be re-used
        console.log(input);
        setInput('');
    };

    useEffect(() => {
        navigation.setOptions({ 
            headerLeft: () => <Button title="Close" onPress={() => navigation.goBack()} />
        });
    })

    return (
        <RootView>
            <TextInput
                placeholder="Enter an item"
                value={input}
                onChangeText={text => setInput(text)}
                onSubmitEditing={handleSubmit}
            />
            <Button
                title="Add"
                onPress={handleSubmit}
            />
        </RootView>
    );
};

export default EditListScreen;