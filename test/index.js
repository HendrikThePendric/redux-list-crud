'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('index function dummy', () => {
  it('should return 10', () => {
    const result = index.dummy();
    expect(result).to.equal(10);
  });
});