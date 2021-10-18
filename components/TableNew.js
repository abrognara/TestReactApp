import React from 'react';

import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';

const TableNew = props => {

    const renderItem = (item) => {
        <View style={styles.item}>
            <Text style={styles.itemText}>{ item }</Text>
        </View>
    }

    return (
        <View>
            <FlatList
                data={props.data}
                renderItem={renderItem}
                ListHeaderComponent={<Text>Header</Text>}
                ListFooterComponent={<Text>Footer</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff'
    },
    itemText: {
        fontSize: 32
    }
});

export default TableNew;