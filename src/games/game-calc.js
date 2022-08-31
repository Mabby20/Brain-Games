import getRandElemArr from '../helpers/getRandElemArr.js';
import getRandomNum from '../helpers/getRandomNum.js';
import gameCore from '../index.js';

const operators = ['+', '-', '*'];
const task = 'What is the result of the expression?';

const getCorrectAnswer = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
  }
  return firstNum + secondNum;
};

const getArrWithAnswerQuestion = () => { //
  const randomOperator = getRandElemArr(operators);
  const firstOperand = getRandomNum();
  const secondOperand = getRandomNum();
  const question = `${firstOperand} ${randomOperator} ${secondOperand}`; // сгенерированный вопрос
  const correctAnswer = getCorrectAnswer(firstOperand, secondOperand, randomOperator);
  return [question, correctAnswer.toString()];
};

export default () => {
  gameCore(task, getArrWithAnswerQuestion);
};
