'use strict';

class CompareNumber {

  static compareNumber(answer, input) {

    const sysAnswers = answer.split('');
    const userInputs = input.split('');

    const countA = userInputs.map((user, index) =>
        sysAnswers[index] === user ? 1 : 0)
      .reduce((a, b) => a + b);

    const countB = userInputs.map((user, index) =>
        sysAnswers[index] !== user && sysAnswers.some(sys => sys === user) ? 1 : 0)
      .reduce((a, b) => a + b);

    return `${countA}A${countB}B`;
  }
}

module.exports = CompareNumber;