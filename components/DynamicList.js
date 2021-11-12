import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

const DynamicList = (props) => {
    const [textInStack, setTextInStack] = useState({ 0: '' });
    const [stackSize, setStackSize] = useState(1);

    const addListItem = e => {
        setTextInStack({ ...textInStack, [stackSize - 1]: e.text });
        setStackSize(stackSize + 1);
    };

    // for debug
    useEffect(() => console.log(textInStack), [textInStack]);

    return (
        <View>
            {Array(stackSize).fill(0).map(_ => 
                <TextInput placeholder="Enter something" onSubmitEditing={e => addListItem(e)} />
            )}
        </View>
    );
};

export default DynamicList;