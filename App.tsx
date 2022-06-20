import React, { FC, useState } from 'react';
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  StatusBar,
} from 'react-native';
import NumColumn from './src/components/NumColumn';
import SpecialFunc from './src/components/SpecialFunc';

export default function App() {
  const [currNum, setCurrNum] = useState<string>('');
  const [calculation, setCalculation] = useState<string[]>([]);
  const [calculated, setCalculated] = useState<boolean>(false);
  const [calculateNextRender, setCalculateNextRender] = useState(false);

  const calculate = (): void => {
    setCalculation([...calculation, currNum]);

    let temp: number = parseInt(calculation[0]);
    for (let i = 0; i < calculation.length - 2; ) {
      const firstNum: number = temp;
      const operator = calculation[i + 1];
      const secondNum: number = parseInt(calculation[i + 2]);

      switch (operator) {
        case '+':
          temp = firstNum + secondNum;
          break;
        case '-':
          temp = firstNum - secondNum;
          break;
        case '/':
          temp = firstNum / secondNum;
          break;
        case 'x':
          temp = firstNum * secondNum;
          break;
      }
      i += 2;
    }
    setCurrNum(temp.toString());
    setCalculated(true);
  };

  const handleClick = (btn: string): void => {
    const operators = ['+', '-', 'x', '/'];

    if (calculated) {
      setCalculation([]);
      setCurrNum('');
      setCalculated(false);
      return;
    }

    if (btn === '( - )') {
      if (currNum[0] === '-') {
        setCurrNum(currNum.substring(1, currNum.length));
      } else {
        setCurrNum(`-${currNum}`);
      }
      return;
    }

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
          setCurrNum('');
          setCalculateNextRender(true);
          break;

        default:
          setCurrNum(currNum + btn);
      }
    }
    console.log(calculation);
  };

  if (calculateNextRender) {
    calculate();
    setCalculateNextRender(false);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20 }}>{calculation.join('')}</Text>
      </View>
      <View style={styles.topContainer}>
        <Text style={{ fontSize: 50 }}>{currNum}</Text>
      </View>
      <SpecialFunc handleFunc={handleClick} />
      <View style={styles.bottomContainer}>
        <NumColumn
          last={false}
          handleFunc={handleClick}
          nums={['7', '4', '1', '.']}
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
          nums={['( - )', '+', '-', 'x', '/']}
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
    flex: 0.3,
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
  header: {
    backgroundColor: '#8AA6A3',
    flex: 0.1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
