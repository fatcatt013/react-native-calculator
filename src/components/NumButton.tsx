import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NumButton = (props: { num: string }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: 'white' }}>{props.num}</Text>
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
});

export default NumButton;
