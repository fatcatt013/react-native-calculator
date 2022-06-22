//Turn into dict

const getTestID = (sign: string): string => {
  switch (sign) {
    case '+':
      return 'plus';
    case '-':
      return 'minus';
    case 'x':
      return 'times';
    case '/':
      return 'divide';
    case '=':
      return 'equals';
    case '( - )':
      return 'negative';
    default:
      return sign;
  }
};

export default getTestID;
