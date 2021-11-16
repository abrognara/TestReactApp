import React, { useState, useEffect } from 'react';
import RootView from './RootView';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Button
} from 'react-native';
import DynamicList from './DynamicList';

const AddRecipeScreen = ({ navigation }) => {
    const [formStep, setFormStep] = useState(1);
    const [recipeName, setRecpeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');

    const handleSubmit = () => {
        console.log(recipeName);
        setRecpeName('');
    };

    useEffect(() => {
        navigation.setOptions({ 
            headerLeft: () => <Button title="Close" onPress={() => navigation.goBack()} />
        }, [navigation]);
    })

    // TODO make this an array
    const renderFormStep = () => {
        if (formStep < 1) return (
            <DynamicList navigation={navigation} />
        );
        if (formStep < 2) return (
            <TextInput
                placeholder="Enter a name for the recipe"
                value={recipeName}
                onChangeText={text => setRecpeName(text)}
            />
        );
        if (formStep == 2) return (
            // Use some input that can add multiple items
            <TextInput
                placeholder="Enter ingredients"
                value={ingredients}
                onChangeText={text => setIngredients(text)}
            />
        );
        if (formStep == 3) return (
            // Use some input that can add multiple items
            <TextInput
                placeholder="Enter steps"
                value={steps}
                onChangeText={text => setSteps(text)}
            />
        );
        if (formStep > 3) return (
            <View>
                <Text>Review New Recipe</Text>
                <Text>Name: { recipeName }</Text>
                <Text>Ingredients: { ingredients }</Text>
                <Text>Steps: { steps }</Text>
                <Button title="Submit Recipe" onPress={handleSubmit} />
            </View>
        );
    };

    return (
        <RootView>
            { renderFormStep() }
            <Button
                title="Next"
                onPress={() => setFormStep(formStep + 1)}
            />
            <Button
                title="Back"
                onPress={() => setFormStep(formStep - 1)}
            />
        </RootView>
    );
};

export default AddRecipeScreen;