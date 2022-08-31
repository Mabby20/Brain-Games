import getRandomNum from '../helpers/getRandomNum.js';
import gameCore from '../index.js';

export default () => {
  const task = 'What number is missing in the progression?';

  const getArrWithAnswerQuestion = () => {
    const arrWithProgression = [];
    const startOfProgression = getRandomNum();
    const progressionIndexChange = getRandomNum(5);

    for (let i = startOfProgression; arrWithProgression.length < 10; i += progressionIndexChange) {
      arrWithProgression.push(i);
    }

    const randIndexArr = Math.floor(Math.random() * arrWithProgression.length);
    const correctAnswer = arrWithProgression[randIndexArr].toString();
    arrWithProgression[randIndexArr] = '..';
    const question = arrWithProgression.join(' ');
    return [question, correctAnswer];
  };
  gameCore(task, getArrWithAnswerQuestion);
};
