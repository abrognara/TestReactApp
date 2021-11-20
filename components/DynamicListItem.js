import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

// TODO move this definition back into DynamicList file?
const DynamicListItem = ({ text, onPressNavigateFn }) => {
    return (
        <TouchableHighlight 
            onPress={onPressNavigateFn}
        >
            <View style={styles.row}>
                <Text style={styles.textStyle}>{ text }</Text>
            </View>
        </TouchableHighlight>
    );
};
// TODO fix styles - text is being hidden by them
const styles = StyleSheet.create({
    row: {
        backgroundColor: '#ffffff', 
        height: 35,
        borderBottomWidth: 0.5
    },
    textStyle: {
        fontSize: 20
    }
});

export default DynamicListItem;