'use strict';

const Guess = require('../src/guess');
const AnswerGenerator = require('../src/answer-generator');

describe('Guess', ()=> {

  it('should guess digit', ()=> {

    spyOn(AnswerGenerator, 'answerGenerator').and.returnValue('1234');
    const userInputs = '1234';
    expect(Guess.guess(userInputs)).toEqual('4A0B');
  })
});