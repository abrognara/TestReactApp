import React from 'react';
import { ThemeContext } from './ThemeContext';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

const OverviewScreen = ({ navigation }) => {
    return (
        <ThemeContext.Consumer>
        {theme => {
          const viewLayoutAndTheme = { ...styles.rootView, backgroundColor: theme.background };
          console.log('viewLayoutAndTheme: ' + JSON.stringify(viewLayoutAndTheme));
          return (
            <SafeAreaView style={viewLayoutAndTheme}>
              <Text>Sunday, October 31st</Text>
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

export default OverviewScreen;