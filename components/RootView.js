import React from 'react';
import { ThemeContext } from './ThemeContext';

import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

const RootView = ({ children }) => {
    return (
      <ThemeContext.Consumer>
        {theme => {
          const viewLayoutAndTheme = { ...styles.rootView, backgroundColor: theme.background };
          console.log('viewLayoutAndTheme: ' + JSON.stringify(viewLayoutAndTheme));
          return (
            <SafeAreaView style={viewLayoutAndTheme}>
              {children}
            </SafeAreaView>
          );
        }}
      </ThemeContext.Consumer>
    );
};

const styles = StyleSheet.create({
    rootView: {
      marginTop: 32,
      paddingHorizontal: 24,
    }
});

export default RootView;