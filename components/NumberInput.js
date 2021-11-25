import React from 'react';
import { TextInput, View } from 'react-native';

const NumberInput = (props) => {
    // validate valid number is entered (can be floating pt)
    const validateInput = () => {

    };

    return (
        <View>
            <TextInput
                keyboardType="numeric"
                {...props}
            />
        </View>
    );
};

export default NumberInput;