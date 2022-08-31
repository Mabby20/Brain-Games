import getAnswer from './helpers/getAnswer.js';

export default (task, getArrWithAnswerQuestion) => {
  console.log('Welcome to the Brain Games!');
  const playerName = getAnswer('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(task);
  const numberOfAttempts = 3;
  for (let i = 1; i <= numberOfAttempts; i += 1) {
    const pairOfQuestionAnswer = getArrWithAnswerQuestion();
    // На каждой итерации формируем новый вопрос и ответ.
    // Функция формирования ответа и вопроса у каждой игры своя.
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
