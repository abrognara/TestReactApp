import React from 'react';
import SectionTitle from './SectionTitle';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const StaticTable = props => {

    const renderTable = () => {
        if (props.data !== undefined) {
            const table = [];
            for (let elm of props.data) {
                table.push(
                    <View>
                        <Text style={styles.rowText}>{ elm }</Text>
                    </View>
                );
            }
            return table;
        }
    }

    return (
        <View style={styles.table}>
            <SectionTitle title={props.title} />
            { renderTable() }
        </View>
    );
};

const styles = StyleSheet.create({
    table: {
        paddingBottom: 20
    },
    rowText: {
        flex: 1,
        fontSize: 15,
        paddingHorizontal: 2,
        paddingVertical: 5
    }
});

export default StaticTable;