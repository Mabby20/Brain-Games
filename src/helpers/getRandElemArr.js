import getRandomNum from './getRandomNum.js';

export default (arr) => {
  const randIndex = getRandomNum(arr.length, 'floor');
  return arr[randIndex];
};
