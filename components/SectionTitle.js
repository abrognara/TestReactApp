import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native';

import {
    Colors
  } from 'react-native/Libraries/NewAppScreen';

const SectionTitle = props => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View>
            <Text
            style={[
              styles.sectionTitle,
              {
                color: isDarkMode ? Colors.white : Colors.black,
              },
            ]}>
            {props.title}
          </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      paddingBottom: 12
    }
});

export default SectionTitle;