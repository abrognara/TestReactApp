import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    VirtualizedList
} from 'react-native';
import DynamicListItem from './DynamicListItem';

const DynamicList = props => {
    const [textInStack, setTextInStack] = useState([]);
    const [input, setInput] = useState('');

    const addListItem = () => {
        setTextInStack([ ...textInStack, input ]);
        setInput(''); // clear input
    };

    // for debug
    useEffect(() => console.log(textInStack), [textInStack]);

    // **** for Virtualized list ****
    const getItem = () => {
        return ({
            id: Math.random().toString(12).substring(0)
        });
    };

    const renderItem = ({ index }) => {
        return <DynamicListItem text={textInStack[index]} stackIdx={index} navigation={props.navigation} />
    };

    return (
        // try and anchor TextInput to bottom of screen but move up with keyboard when selected
        <View>
            <VirtualizedList
                data={textInStack}
                getItem={getItem}
                renderItem={renderItem}
                getItemCount={() => textInStack.length}
            />
            <View>
                <TextInput
                    value={input}
                    onChangeText={text => setInput(text)}
                    placeholder="Enter something"
                    onSubmitEditing={_ => addListItem()}
                />
            </View>
        </View>
    );
};

export default DynamicList;