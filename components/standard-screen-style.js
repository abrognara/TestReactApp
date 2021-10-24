import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// TODO use context to pass light vs dark mode props
export const StandardScreenStyle = React.createContext({ backgroundColor: Colors.lighter });