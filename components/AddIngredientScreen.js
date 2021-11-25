import React, { useState } from 'react';
import {
    View,
    TextInput
} from 'react-native';

const AddIngredientScreen = () => {
    const [name, setName] = useState('');
    const [unit, setUnit] = useState('ounces');
    const [amount, setAmount] = useState(0);

    return (
        <View>
            <TextInput
                placeholder="Enter ingredient name"
                value={name}
                onChangeText={text => setName(text)}
            />
            <TextInput
                placeholder="Enter an amount"
                value={amount}
                onChangeText={amt => setAmount(amt)}
            />
        </View>
    );
};

export default AddIngredientScreen;