"use strict";

const CompareNumber = require('../src/compare-number');

describe('compareNumber', () => {

  it('numbers and positions are correct', () => {
    const output = CompareNumber.compareNumber('1234', '1234');
    expect(output).toEqual('4A0B');
  });

  it('numbers are correct but positions are wrong', () => {
    const output = CompareNumber.compareNumber('1234', '4321');
    expect(output).toEqual('0A4B');
  });

  it('numbers are wrong', () => {
    const output = CompareNumber.compareNumber('1234', '5678');
    expect(output).toEqual('0A0B');
  });
});