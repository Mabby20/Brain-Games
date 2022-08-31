import getRandomNum from '../helpers/getRandomNum.js';
import gameCore from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCorrectAnswer = (num) => {
  let isPrime = true;
  if (num === 1 || num <= 0) {
    isPrime = false;
  }
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

const getArrWithAnswerQuestion = () => {
  const randomNum = getRandomNum(100);
  const question = randomNum;
  const correctAnswer = getCorrectAnswer(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  gameCore(task, getArrWithAnswerQuestion);
};
