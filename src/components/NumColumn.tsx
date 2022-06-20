import React, { FC } from 'react';
import { NativeModules, View, StyleSheet } from 'react-native';
import NumButton from './NumButton';

const NumColumn = (props: { nums: string[] }) => {
  return (
    <View style={styles.container}>
      {props.nums.map((num, key) => {
        return <NumButton num={num} key={key} />;
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
