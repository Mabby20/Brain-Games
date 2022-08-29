import getRandomNum from '../getRandomNum.js';
import gameCore from '../index.js';

export default () => {
  const task = 'Find the greatest common divisor of given numbers.';

  const getArrWithAnswerQuestion = () => {
    const firstNum = getRandomNum(10);
    const secondNum = getRandomNum(10);
    const question = `${firstNum} ${secondNum}`;
    const smallestNum = firstNum > secondNum ? secondNum : firstNum;
    let correctAnswer;

    for (let i = 1; i <= smallestNum; i += 1) {
      if (firstNum % i === 0 && secondNum % i === 0) {
        correctAnswer = i;
      }
    }
    correctAnswer = correctAnswer.toString();
    return [question, correctAnswer];
  };
  gameCore(task, getArrWithAnswerQuestion);
};
