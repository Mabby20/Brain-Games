import getRandomNum from '../helpers/getRandomNum.js';
import isEven from '../helpers/isEven.js';
import gameCore from '../index.js';

export default () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getArrWithAnswerQuestion = () => {
    const randomNum = getRandomNum();
    const question = randomNum;
    const correctAnswer = isEven(randomNum);
    return [question, correctAnswer];
  };
  gameCore(task, getArrWithAnswerQuestion);
};
