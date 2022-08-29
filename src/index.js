import getAnswer from './getAnswer.js';

export default (task, getArrWithAnswerQuestion) => {
  console.log('Welcome to the Brain Games!');
  const playerName = getAnswer('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(task);
  for (let i = 1; i <= 3; i += 1) {
    const pairOfQuestionAnswer = getArrWithAnswerQuestion();
    // на каждой итерации формируем новый вопрос и ответ. функция формирования ответа и вопроса у каждой игры своя.
    console.log(`Question: ${pairOfQuestionAnswer[0]}`);
    const playerAnswer = getAnswer('Your answer: ');
    if (playerAnswer === pairOfQuestionAnswer[1]) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${pairOfQuestionAnswer[1]}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
