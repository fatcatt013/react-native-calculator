import React, { FC } from 'react';
import {
  NativeModules,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import NumButton from './NumButton';

const NumColumn = (props: {
  nums: string[];
  handleFunc(btn: string): void;
  last: boolean;
}) => {
  return (
    <View style={props.last ? styles.lastColumn : styles.column}>
      {props.nums.map((num, key) => {
        return (
          <NumButton
            handleFunc={props.handleFunc}
            num={num}
            key={key}
            last={props.last}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    width: '25%',
    backgroundColor: '#023535',
  },
  lastColumn: {
    width: '25%',
    backgroundColor: '#008F8C',
  },
});

export default NumColumn;
