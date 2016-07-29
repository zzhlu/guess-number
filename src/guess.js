'use strict';

const CompareNumber = require('./compare-number');
const AnswerGenerator = require('./answer-generator');

class Guess {

  static guess(userInputs) {
    const sysAnswers = AnswerGenerator.answerGenerator();
    return CompareNumber.compareNumber(sysAnswers, userInputs);
  }
}

module.exports = Guess;