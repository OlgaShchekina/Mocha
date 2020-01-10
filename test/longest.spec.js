const assert = require('assert');
let chai = require("chai"),
    expect = chai.expect;
chai.use(require('chai-string'));

const {longest} = require('../index.js');

describe('function longest', () => {
    it('should return a sorted, longest string, containing distinct letters', () => {
        expect(longest('wgwtgrtg', 'ththyht')).eq('ghrtwy');
    });
    it('should return a string, containing distinct letters if all letters are the same', () => {
        expect(longest('aaaa', 'aaaa')).eq('a');
    });
    it('should work correctly if one string is empty', () => {
        expect(longest('', 'aaaa')).eq('a');
    });
    it('should work correctly if both strings are empty', () => {
        expect(longest('', '')).eq('');
    });
    it('should return /not a string/ with an empty input', () => {
        expect(longest()).eq('not a string');
    });
    it('should return /not a string/ if s1 or s2 not a string', () => {
        expect(longest(1,3)).eq('not a string');
    });


});


