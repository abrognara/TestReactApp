import React from 'react';

import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';

const TableNew = props => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.listWrapper}>
                <Text style={styles.rowText}>{ item }</Text>
            </View>
        );
    }

    return (
        <View>
            <FlatList
                data={props.data}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth: .5
    },
    rowText: {
        flex: 1,
        fontSize: 16,
        paddingHorizontal: 2,
        paddingVertical: 10
    }
});

export default TableNew;