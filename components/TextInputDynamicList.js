import React, { useEffect, useState } from 'react';
import {
    View,
    TextInput,
} from 'react-native';
import DynamicList from './DynamicList';
/*
    + TextInput to add user input in a growable list
    + Can select rows of input to edit/delete them from the list
*/
const TextInputDynamicList = ({ navigation, route, textList, setTextList, placeholder, editable }) => {
    const [input, setInput] = useState('');

    const addListItem = () => {
        setTextList([ ...textList, input ]);
        setInput(''); // clear input
    };

    return (
        // try and anchor TextInput to bottom of screen but move up with keyboard when selected
        <View>
            <DynamicList 
                navigation={navigation}
                route={route}
                setTextList={setTextList}
                textList={textList}
                editable={editable}
            />
            <View>
                <TextInput
                    value={input}
                    onChangeText={text => setInput(text)}
                    placeholder={placeholder}
                    onSubmitEditing={_ => addListItem()}
                />
            </View>
        </View>
    );
};

export default TextInputDynamicList;