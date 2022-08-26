import getAnswer from './getAnswer.js';
import isEven from './isEven.js';
import getRandomNum from "./getRandomNum.js";

export default () => {
  const playerName = getAnswer('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const randomNum = getRandomNum();
    console.log(`Question: ${randomNum}`);
    const correctAnswer = isEven(randomNum);
    const playerAnswer = getAnswer('Your answer: ');

    if (playerAnswer === correctAnswer) {
      // correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
