import React, { FC } from 'react';
import { View, Text, StyleSheet, ProgressViewIOSComponent } from 'react-native';
import NumButton from './NumButton';

const SpecialFunc = (props: { handleFunc(btn: string): void }) => {
  return (
    <View style={styles.container}>
      <NumButton
        num={'DEL'}
        handleFunc={props.handleFunc}
        last={true}
        special={true}
      />
      <NumButton
        num={'CE'}
        handleFunc={props.handleFunc}
        last={true}
        special={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#008F8C',
    flex: 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default SpecialFunc;
