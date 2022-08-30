import getRandomNum from '../getRandomNum.js';
import gameCore from '../index.js';

export default () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getArrWithAnswerQuestion = () => {
    const randomNum = getRandomNum(100);
    const question = randomNum;
    let flag = true;

    if (randomNum === 1 || randomNum <= 0) {
      flag = false;
    }

    for (let i = 2; i <= (randomNum / 2); i += 1) {
      if (randomNum % i === 0) {
        flag = false;
        break;
      }
    }

    const correctAnswer = flag === true ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  gameCore(task, getArrWithAnswerQuestion);
};
