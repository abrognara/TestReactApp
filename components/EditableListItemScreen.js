import React, { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

const EditableListItemScreen = ({ navigation, route }) => {
    const [input, setInput] = useState(route.params.text);
    const stackIdx = route.params.stackIdx;

    return (
        <View style={{ backgroundColor: '#ffffff' }}>
            <Text>(DEBUG) Element number { stackIdx }</Text>
            <TextInput
                value={input}
                onChangeText={text => setInput(text)}
            />
            <Button title="Save" onPress={() => {
                navigation.navigate({
                    name: 'AddRecipeScreen',
                    params: { submitUpdate: { updatedText: input, idx: stackIdx } },
                    merge: true
                });
            }} />
            <Button title="Delete" onPress={() => {
                navigation.navigate({
                    name: 'AddRecipeScreen',
                    params: { submitDelete: { idx: stackIdx } },
                    merge: true
                });
            }} />
        </View>
    );
};

export default EditableListItemScreen;