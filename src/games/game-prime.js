import getRandomNum from '../helpers/getRandomNum.js';
import gameCore from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1 || num <= 0) {
    return false;
  }
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getArrWithAnswerQuestion = () => {
  const randomNum = getRandomNum(100);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [randomNum, correctAnswer];
};

export default () => {
  gameCore(task, getArrWithAnswerQuestion);
};
