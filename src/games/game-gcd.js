import getRandomNum from '../helpers/getRandomNum.js';
import gameCore from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  const smallestNum = firstNum > secondNum ? secondNum : firstNum;
  for (let i = smallestNum; i > 1; i -= 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      return i;
    }
  }
  return 1;
};

const getArrWithAnswerQuestion = () => {
  const firstNum = getRandomNum(100);
  const secondNum = getRandomNum(100);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = getGreatestCommonDivisor(firstNum, secondNum);

  return [question, correctAnswer.toString()];
};

export default () => {
  gameCore(task, getArrWithAnswerQuestion);
};
