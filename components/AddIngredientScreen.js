import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import NumberInput from './NumberInput';
import DropDownPicker from 'react-native-dropdown-picker';

const AddIngredientScreen = () => {
    const [name, setName] = useState('');
    const [unit, setUnit] = useState('ounces');
    const [amount, setAmount] = useState('0');
    // dropdown state
    const [ddOpen, setDdOpen] = useState(false);
    const [ddValue, setDdValue] = useState(null);
    const [ddItems, setDdItems] = useState([
        { label: 'Ounces', value: 'ounces' },
        { label: 'Cups', value: 'cups' }
    ]);

    return (
        <View>
            <TextInput
                placeholder="Enter ingredient name"
                value={name}
                onChangeText={text => setName(text)}
            />
            <NumberInput
                placeholder="Enter an amount"
                value={amount}
                onChangeText={amt => setAmount(amt)}
            />
            <DropDownPicker
                open={ddOpen}
                value={ddValue}
                items={ddItems}
                setOpen={setDdOpen}
                setValue={setDdValue}
                setItems={setDdItems}
            />
        </View>
    );
};

export default AddIngredientScreen;