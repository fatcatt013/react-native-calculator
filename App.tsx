import React, { FC, useState } from 'react';
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  StatusBar,
} from 'react-native';
import NumColumn from './src/components/NumColumn';

export default function App() {
  const [currNum, setCurrNum] = useState<string>('234234');

  const handleClick = (btn: string): void => {
    setCurrNum(currNum + btn);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={{ fontSize: 50 }}>{currNum}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <NumColumn handleFunc={handleClick} nums={['7', '4', '1', 'DEL']} />
        <NumColumn handleFunc={handleClick} nums={['8', '5', '2', '0']} />
        <NumColumn handleFunc={handleClick} nums={['9', '6', '3', '=']} />
        <NumColumn handleFunc={handleClick} nums={['+', '-', 'x', '/']} />
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
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingRight: 20,
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
