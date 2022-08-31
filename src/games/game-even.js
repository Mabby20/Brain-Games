import getRandomNum from '../helpers/getRandomNum.js';
import isEven from '../helpers/isEven.js';
import gameCore from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getArrWithAnswerQuestion = () => {
  const randomNum = getRandomNum();
  const question = randomNum;
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  gameCore(task, getArrWithAnswerQuestion);
};
