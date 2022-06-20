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
}) => {
  return (
    <View style={styles.container}>
      {props.nums.map((num, key) => {
        return <NumButton handleFunc={props.handleFunc} num={num} key={key} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '25%',
  },
});

export default NumColumn;
