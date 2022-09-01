import getRandElemArr from '../helpers/getRandElemArr.js';
import getRandomNum from '../helpers/getRandomNum.js';
import gameCore from '../index.js';

const operators = ['+', '-', '*'];
const task = 'What is the result of the expression?';

const calculate = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error('this operator not found');
  }
};

const getArrWithAnswerQuestion = () => { //
  const randomOperator = getRandElemArr(operators);
  const firstOperand = getRandomNum();
  const secondOperand = getRandomNum();
  const question = `${firstOperand} ${randomOperator} ${secondOperand}`; // сгенерированный вопрос
  const correctAnswer = calculate(firstOperand, secondOperand, randomOperator);
  return [question, correctAnswer.toString()];
};

export default () => {
  gameCore(task, getArrWithAnswerQuestion);
};
