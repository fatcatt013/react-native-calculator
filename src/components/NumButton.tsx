import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const NumButton = (props: {
  num: string;
  handleFunc(btn: string): void;
  last: boolean;
  special?: boolean;
}) => {
  return (
    <View style={props.special ? styles.specialContainer : styles.container}>
      <TouchableHighlight
        style={styles.touchable}
        underlayColor={props.last ? '#0CABA8' : '#589A8D'}
        onPress={() => {
          props.handleFunc(props.num);
        }}
        testID={props.num}
      >
        <Text style={{ fontSize: 30, color: 'white' }}>{props.num}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  specialContainer: {
    flex: 0.3,
  },
  touchable: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NumButton;
