import React, { FC } from 'react';
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  StatusBar,
} from 'react-native';
import NumColumn from './src/components/NumColumn';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}></View>
      <View style={styles.bottomContainer}>
        <NumColumn nums={['7', '4', '1', 'DEL']} />
        <NumColumn nums={['8', '5', '2', '0']} />
        <NumColumn nums={['9', '6', '3', '=']} />
        <NumColumn nums={['+', '-', 'x', '/']} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  topContainer: {
    backgroundColor: '#8AA6A3',
    flex: 0.4,
    width: '100%',
    paddingTop: StatusBar.currentHeight,
  },

  bottomContainer: {
    backgroundColor: '#127369',
    flex: 0.6,
    width: '100%',
    borderTopWidth: 3,
    borderColor: '#10403B',
    flexDirection: 'row',
  },
});
