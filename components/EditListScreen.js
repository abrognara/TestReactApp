import React, { useState, useEffect } from 'react';

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
        <View style={styles.rootView}>
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
        </View>
    );
};

// TODO dont copy-paste this from other component
const styles = StyleSheet.create({
    rootView: {
      marginTop: 32,
      paddingHorizontal: 24,
    }
});

export default EditListScreen;