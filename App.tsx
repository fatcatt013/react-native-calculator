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
  const [currNum, setCurrNum] = useState<string>('');
  const [calculation, setCalculation] = useState<string[]>([]);

  const calculate = (): void => {
    console.log('Calculating...');
    console.log(`From calculation: ${calculation}`);
    setCurrNum('45');

    setCalculation([]);
  };

  const handleClick = (btn: string): void => {
    const operators = ['+', '-', 'x', '/'];

    if (operators.includes(btn)) {
      if (currNum.length > 0) {
        setCalculation([...calculation, currNum, btn]);
        setCurrNum('');
      }
    } else {
      switch (btn) {
        case 'DEL':
          setCurrNum(currNum.substring(0, currNum.length - 1));
          break;

        case 'CE':
          setCurrNum('');
          setCalculation([]);
          break;

        case '=':
          setCalculation([...calculation, currNum]);
          calculate();
          break;

        default:
          setCurrNum(currNum + btn);
      }
    }
    console.log(calculation);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={{ fontSize: 50 }}>{currNum}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <NumColumn
          last={false}
          handleFunc={handleClick}
          nums={['7', '4', '1', 'DEL']}
        />
        <NumColumn
          last={false}
          handleFunc={handleClick}
          nums={['8', '5', '2', '0']}
        />
        <NumColumn
          last={false}
          handleFunc={handleClick}
          nums={['9', '6', '3', '=']}
        />
        <NumColumn
          last={true}
          handleFunc={handleClick}
          nums={['CE', '+', '-', 'x', '/']}
        />
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
    flexDirection: 'row',
  },
});
