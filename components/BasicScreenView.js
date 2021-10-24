import React from 'react';
import { StandardScreenStyle } from './standard-screen-style';

import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

const BasicScreenView = ({ children }) => {
    return (
      <StandardScreenStyle.Consumer>
        {theme => {
          console.log({ ...styles.rootView, ...theme });
          return (
            <SafeAreaView style={theme}>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{ ...styles.rootView, ...theme }}>
                {children}
              </ScrollView>
            </SafeAreaView>
          );
        }}
      </StandardScreenStyle.Consumer>
    );
};

const styles = StyleSheet.create({
    rootView: {
      marginTop: 32,
      paddingHorizontal: 24,
    }
});

export default BasicScreenView;