import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const NumButton = (props: { num: string; handleFunc(btn: string): void }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.touchable}
        underlayColor={'#0CABA8'}
        onPress={() => {
          props.handleFunc(props.num);
        }}
      >
        <Text style={{ fontSize: 30, color: 'white' }}>{props.num}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#023535',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
