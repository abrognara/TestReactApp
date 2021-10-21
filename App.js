/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import TextSection from './components/TextSection';
import Datastore from './components/Datastore';
import IngredientsPage from './components/IngredientsPage';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {

  const isDarkMode = useColorScheme() === 'dark';

  const datastore = new Datastore();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
              <View style={styles.rootView}>
                <TextSection title="Section Title">
                  Section description
                </TextSection>
                <IngredientsPage
                  datastore={datastore}
                  placeholder="Enter an item"
                />
              </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  rootView: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;
