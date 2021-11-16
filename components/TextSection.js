import React from 'react';
import type {Node} from 'react';

import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

  import {
    Colors
  } from 'react-native/Libraries/NewAppScreen';

const TextSection = ({children, title}): Node => {
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
            {title}
          </Text>
          <Text
            style={[
              styles.sectionDescription,
              {
                color: isDarkMode ? Colors.light : Colors.dark,
              },
            ]}>
            {children}
          </Text>
        </View>
      );
};

const styles = StyleSheet.create({
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    }
  });

export default TextSection;