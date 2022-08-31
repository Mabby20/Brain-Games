import getRandomNum from './getRandomNum.js';

export default (arr) => {
  const randIndex = getRandomNum(Math.floor, arr.length);
  return arr[randIndex];
};
