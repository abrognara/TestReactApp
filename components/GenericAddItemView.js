import React, { useEffect } from 'react';
import { View, Button } from 'react-native';

const GenericAddItemView = (props) => {
    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <Button title="Add" onPress={() => props.navigation.navigate(props.usingAddItemScreen)} />
            )
        });
    }, [props.navigation]);

    return (
        <View>
            { props.children }
        </View>
    );
};

export default GenericAddItemView;