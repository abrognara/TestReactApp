import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    VirtualizedList
} from 'react-native';
import DynamicListItem from './DynamicListItem';
/*
    + TextInput to add user input in a growable list
    + Can select rows of input to edit/delete them from the list
*/
const DynamicList = props => {
    // TODO for non-editable list, should be no logic related to setTextList
    useEffect(() => {
        const submitUpdate = props.route.params?.submitUpdate;
        const submitDelete = props.route.params?.submitDelete;
        console.log(`update ${JSON.stringify(submitUpdate)} delete ${JSON.stringify(submitDelete)}`);
        if (submitUpdate) {
            // is there a way to do this update without creating a new array?
            const { idx, updatedText } = submitUpdate;
            let textListCopy = [...props.textList];
            textListCopy[idx] = updatedText;
            props.setTextList(textListCopy);
            props.navigation.setParams({ submitUpdate: null });
        }
        else if (submitDelete) {
            const { idx } = submitDelete;
            let textListCopy = [...props.textList];
            textListCopy.splice(idx, 1);
            props.setTextList(textListCopy);
            props.navigation.setParams({ submitDelete: null });
        }
    }, [props.route.params?.submitUpdate, props.route.params?.submitDelete]);

    // **** for Virtualized list ****
    const getItem = () => {
        return ({
            id: Math.random().toString(12).substring(0)
        });
    };

    // TODO (case 1) can make a wrapper on top of EditableListItemScreen i.e. EditableRecipeDetails...
    // TODO (case 2) should be a generic details screen - RecipeDetailsScreen can be a wrapper
    const renderItem = ({ index }) => {
        return <DynamicListItem 
            text={props.textList[index]}
            onPressNavigateFn={props.editable ? 
                () => props.navigation.navigate('EditableListItemScreen', 
                { 
                    text: props.textList[index],
                    stackIdx: index
                }) : 
                () => props.navigation.navigate('RecipeDetailsScreen', { key: props.textList[index] })
            }
        />
    };
    // **** ****

    return (
        // try and anchor TextInput to bottom of screen but move up with keyboard when selected
        <View>
            <VirtualizedList
                data={props.textList}
                getItem={getItem}
                renderItem={renderItem}
                getItemCount={() => props.textList.length}
            />
        </View>
    );
};

export default DynamicList;