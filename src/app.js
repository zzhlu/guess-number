'use strict';

const CompareNumber = require('./compare-number');
const AnswerGenerator = require('./answer-generator');
const scanf = require('scanf');

function guessNumber() {
  console.log('Welcome!');
  let count = 6;
  const sysAnswer = AnswerGenerator.answerGenerator();

  while (count > 0) {
    console.log(`
Please input your number(${count}): `);
    const guessNumber = scanf('%s');
    count--;

    if (guessNumber.split('').every(isNotDuplicate)) {
      const result = CompareNumber.compareNumber(sysAnswer, guessNumber);
      if (result === '4A0B') {
        console.log('Congratulations!');
        break;
      }
      console.log(result);
    } else {
      console.log('Cannot input duplicate numbers!');
    }
  }

  if (count === 0) {
    console.log('Game Over');
  }
}

function isNotDuplicate(item, index, array) {
  return array.lastIndexOf(item) === index;
}

guessNumber();

module.exports = {
  guessNumber: guessNumber
};