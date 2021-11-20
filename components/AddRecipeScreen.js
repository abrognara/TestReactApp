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
import TextInputDynamicList from './TextInputDynamicList';

const AddRecipeScreen = ({ navigation, route }) => {
    const [formStep, setFormStep] = useState(1);
    const [recipeName, setRecpeName] = useState('');
    const [stepsList, setStepsList] = useState([]); // use as props to DynamicList for steps
    const [ingredientsList, setIngredientsList] = useState([]); // use as props to DynamicList for steps

    const handleSubmit = () => {
        console.log(recipeName);
        // do submit to datastore
        navigation.goBack();
    };

    const PrevStepBtn = () => <Button title="Back" onPress={() => setFormStep(formStep - 1)} />;

    const NextStepBtn = () => <Button title="Next" onPress={() => setFormStep(formStep + 1)} />;

    const renderFormStep = () => {
        if (formStep == 1) return (
            <View>
                <TextInput
                    placeholder="Enter a name for the recipe"
                    value={recipeName}
                    onChangeText={text => setRecpeName(text)}
                />
                <NextStepBtn />
            </View>
        );
        // TODO make step btns render in under list along with textinput
        if (formStep == 2) return (
            <View>
                <TextInputDynamicList
                    navigation={navigation}
                    route={route}
                    textList={ingredientsList}
                    setTextList={setIngredientsList}
                    placeholder="Add an Ingredient"
                />
                <NextStepBtn />
                <PrevStepBtn />
            </View>
        );
        if (formStep == 3) return (
            <View>
                <TextInputDynamicList
                    navigation={navigation}
                    route={route}
                    textList={stepsList}
                    setTextList={setStepsList}
                    placeholder="Add a Step"
                />
                <NextStepBtn />
                <PrevStepBtn />
            </View>
        );
        if (formStep == 4) return (
            <View>
                <Text>Review New Recipe</Text>
                <Text>Name: { recipeName }</Text>
                <Text>Ingredients: { ingredientsList }</Text>
                <Text>Steps: { stepsList }</Text>
                <Button title="Submit Recipe" onPress={handleSubmit} />
                <PrevStepBtn />
            </View>
        );
    };

    return (
        <RootView>
            { renderFormStep() }
        </RootView>
    );
};

export default AddRecipeScreen;