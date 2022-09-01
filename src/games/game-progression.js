import getRandomNum from '../helpers/getRandomNum.js';
import gameCore from '../index.js';

const task = 'What number is missing in the progression?';

const getProgression = () => {
  const arrWithProgression = [];
  const startOfProgression = getRandomNum();
  const progressionIndexChange = getRandomNum(5);

  for (let i = startOfProgression; arrWithProgression.length < 10; i += progressionIndexChange) {
    arrWithProgression.push(i);
  }

  return arrWithProgression;
};

const getArrWithAnswerQuestion = () => {
  const arrWithProgression = getProgression();
  const randIndexArr = getRandomNum(arrWithProgression.length, 'floor');
  const correctAnswer = arrWithProgression[randIndexArr];
  arrWithProgression[randIndexArr] = '..';
  const question = arrWithProgression.join(' ');
  return [question, correctAnswer.toString()];
};

export default () => {
  gameCore(task, getArrWithAnswerQuestion);
};
