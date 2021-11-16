import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

const DynamicListItem = props => {
    console.log(props.stackIdx);
    console.log(props.text);
    return (
        <TouchableHighlight 
            onPress={() => 
                props.navigation.navigate('EditableListItemScreen', 
                { text: props.text, stackidx: props.stackIdx })}
        >
            <View>
                <Text>{ props.text }</Text>
            </View>
        </TouchableHighlight>
    );
};
// TODO fix styles - text is being hidden by them
const styles = StyleSheet.create({
    row: {
        backgroundColor: '#ffffff', 
        height: 25,
        paddingVertical: 12
    },
    textStyle: {
        fontSize: 24
    }
});

export default DynamicListItem;