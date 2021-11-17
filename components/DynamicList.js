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

    useEffect(() => {
        const submitUpdate = props.route.params?.submitUpdate;
        const submitDelete = props.route.params?.submitDelete;
        console.log(`update ${JSON.stringify(submitUpdate)} delete ${JSON.stringify(submitDelete)}`);
        if (submitUpdate) {
            // is there a way to do this update without creating a new array?
            const { idx, updatedText } = submitUpdate;
            let textInStackCopy = [...textInStack];
            textInStackCopy[idx] = updatedText;
            setTextInStack(textInStackCopy);
            props.navigation.setParams({ submitUpdate: null });
        }
        else if (submitDelete) {
            const { idx } = submitDelete;
            let textInStackCopy = [...textInStack];
            textInStackCopy.splice(idx, 1);
            setTextInStack(textInStackCopy);
            props.navigation.setParams({ submitDelete: null });
        }
    }, [props.route.params?.submitUpdate, props.route.params?.submitDelete]);

    // **** for Virtualized list ****
    const getItem = () => {
        return ({
            id: Math.random().toString(12).substring(0)
        });
    };

    const renderItem = ({ index }) => {
        return <DynamicListItem 
            text={textInStack[index]} 
            stackIdx={index}
            navigation={props.navigation}
        />
    };
    // **** ****

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