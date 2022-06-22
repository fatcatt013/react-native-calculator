import { create, act } from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';
import App from '../App';

describe('Testing button functionality', () => {
  test('Testing the functionality of buttons', () => {
    const { getByTestId } = render(<App />);
    const currNum = getByTestId('currNum');
    const button = getByTestId('3');

    fireEvent.press(button);

    expect(currNum.children).toEqual(['3']);
  });

  test('DEL button erases the last number of current number', () => {
    const { getByTestId } = render(<App />);
    const numberButton = getByTestId('3');
    const delButton = getByTestId('DEL');
    const currNum = getByTestId('currNum');

    for (let i = 0; i < 2; i++) {
      fireEvent.press(numberButton);
    }

    fireEvent.press(delButton);
    expect(currNum.children).toEqual(['3']);
  });

  test('. button adds dot at the end when currNum is longer than 0', () => {
    const { getByTestId } = render(<App />);
    const dotButton = getByTestId('.');
    const numberButton = getByTestId('6');
    const currNum = getByTestId('currNum');

    fireEvent.press(numberButton);
    fireEvent.press(dotButton);

    expect(currNum.children).toEqual(['6.']);
  });

  test('. button 0. when currNum is not longer than 0', () => {
    const { getByTestId } = render(<App />);
    const dotButton = getByTestId('.');
    const currNum = getByTestId('currNum');

    fireEvent.press(dotButton);

    expect(currNum.children).toEqual(['0.']);
  });

  test('Button CE can actually erase the contents of currNum', () => {
    const { getByTestId } = render(<App />);
    const ceButton = getByTestId('CE');
    const currNum = getByTestId('currNum');

    for (let i = 0; i < 3; i++) {
      fireEvent.press(getByTestId(i.toString()));
    }

    fireEvent.press(ceButton);

    expect(currNum.children).toEqual([]);
  });

  test('Button ( - ) can turn number to negative', () => {
    const { getByTestId } = render(<App />);
    const currNum = getByTestId('currNum');
    const negativeButton = getByTestId('( - )');
    const numButton = getByTestId('4');

    fireEvent.press(numButton);
    fireEvent.press(negativeButton);

    expect(currNum.children).toEqual(['-4']);
  });
});

describe('Testing mathematical operators', () => {
  test('+ working', () => {
    const { getByTestId } = render(<App />);
    const currNum = getByTestId('currNum');
    const equals = getByTestId('=');
    const plus = getByTestId('+');

    fireEvent.press(getByTestId('1'));
    fireEvent.press(plus);
    fireEvent.press(getByTestId('4'));
    fireEvent.press(equals);

    expect(currNum.children).toEqual(['5']);
  });

  test('- working', () => {
    const { getByTestId } = render(<App />);
    const currNum = getByTestId('currNum');
    const equals = getByTestId('=');
    const minus = getByTestId('-');

    fireEvent.press(getByTestId('1'));
    fireEvent.press(minus);
    fireEvent.press(getByTestId('4'));
    fireEvent.press(equals);

    expect(currNum.children).toEqual(['-3']);
  });

  test('x working', () => {
    const { getByTestId } = render(<App />);
    const currNum = getByTestId('currNum');
    const equals = getByTestId('=');
    const times = getByTestId('x');

    fireEvent.press(getByTestId('1'));
    fireEvent.press(times);
    fireEvent.press(getByTestId('4'));
    fireEvent.press(equals);

    expect(currNum.children).toEqual(['4']);
  });

  test('/ working', () => {
    const { getByTestId } = render(<App />);
    const currNum = getByTestId('currNum');
    const equals = getByTestId('=');
    const divided = getByTestId('/');

    fireEvent.press(getByTestId('1'));
    fireEvent.press(divided);
    fireEvent.press(getByTestId('4'));
    fireEvent.press(equals);

    expect(currNum.children).toEqual(['0.25']);
  });
});

describe('Testing header reactivity', () => {
  test('header reacts correctly', () => {
    const { getByTestId } = render(<App />);
    const equals = getByTestId('=');
    const divided = getByTestId('/');
    const header = getByTestId('header');

    fireEvent.press(getByTestId('1'));
    fireEvent.press(divided);
    fireEvent.press(getByTestId('4'));
    fireEvent.press(equals);

    expect(header.children).toEqual(['1/4']);
  });
});
