import getRandElemArr from "../getRandElemArr.js";
import getRandomNum from "../getRandomNum.js";
import gameCore from "../index.js";

export default () => {
  const task = 'What is the result of the expression?';

  const getArrWithAnswerQuestion = () => { //
    const operators = ['+', '-', '*'];
    const randomOperator = getRandElemArr(operators);
    const firstOperand = getRandomNum();
    const secondOperand = getRandomNum();
    const question = `${firstOperand} ${randomOperator} ${secondOperand}`; // сгенерированный вопрос
    let correctAnswer;
    switch (randomOperator) {
      case '+':
        correctAnswer = (firstOperand + secondOperand).toString();
        break;
      case '-':
        correctAnswer = (firstOperand - secondOperand).toString();
        break;
      case '*':
        correctAnswer = (firstOperand * secondOperand).toString();
        break;
      default:
    }
    return [question, correctAnswer];
  }
gameCore(task, getArrWithAnswerQuestion);
};