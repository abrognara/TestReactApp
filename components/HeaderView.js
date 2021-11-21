import React, { useEffect } from 'react';
import { View, Button } from 'react-native';

const HeaderView = ({ navigation, headerRight, children }) => {
    useEffect(() => {
        if (headerRight) {
            const { btnTitle, destScreenName, params } = headerRight;
            console.log(params);
            navigation.setOptions({
                headerRight: () => (
                    <Button title={btnTitle} onPress={() => navigation.navigate(destScreenName, params)} />
                )
            });
        }
    }, [navigation]);

    return (
        <View>
            { children }
        </View>
    );
};

export default HeaderView;