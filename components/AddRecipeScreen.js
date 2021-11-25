import React, { useState, useEffect } from 'react';
import RootView from './RootView';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Button
} from 'react-native';
import TextInputDynamicList from './TextInputDynamicList';
import { DatastoreContext } from './datastore-context';

const AddRecipeScreen = ({ navigation, route }) => {
    let datastore = null;
    const [formStep, setFormStep] = useState(1);
    const [recipeName, setRecipeName] = useState('');
    const [stepsList, setStepsList] = useState([]); // use as props to DynamicList for steps
    const [ingredientsList, setIngredientsList] = useState([]); // use as props to DynamicList for steps

    useEffect(() => {
        if (route.params?.defaultValues) {
            const { recipeName, stepsList, ingredientsList } = route.params.defaultValues;
            setRecipeName(recipeName);
            setStepsList(stepsList);
            setIngredientsList(ingredientsList);
        }        
    }, [route.params?.defaultValues]);

    const handleSubmit = () => {
        if (datastore) datastore.addRecipe(recipeName, ingredientsList, stepsList);
        navigation.goBack(); // add param: updated? bool
    };

    const PrevStepBtn = () => <Button title="Back" onPress={() => setFormStep(formStep - 1)} />;

    const NextStepBtn = () => <Button title="Next" onPress={() => setFormStep(formStep + 1)} />;

    const renderFormStep = () => {
        if (formStep == 1) return (
            <View>
                <TextInput
                    placeholder="Enter a name for the recipe"
                    value={recipeName}
                    onChangeText={text => setRecipeName(text)}
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
                    editable
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
                    editable
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
        <DatastoreContext.Consumer>
            {dstore => {
                datastore = dstore;
                return (
                    <RootView>
                        { renderFormStep() }
                    </RootView>
                );
            }}
        </DatastoreContext.Consumer>
    );
};

export default AddRecipeScreen;