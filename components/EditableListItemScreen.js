import React, { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

const EditableListItemScreen = ({ route }) => {
    const [input, setInput] = useState(route.params.text)

    return (
        <View>
            <Text>Element number { route.params.stackIdx }</Text>
                <TextInput
                    value={input}
                    onChangeText={text => setInput(text)}
                />
            <Button title="Save" />
            <Button title="Delete" />
        </View>
    );
};

export default EditableListItemScreen;