const assert = require('assert');
let chai = require("chai"),
    expect = chai.expect;
chai.use(require('chai-string'));
const {isPalindrome} = require('../index.js');

describe('function isPalindrome', () => {
    it('should return true if a string is a palindrome', () => {
        //assert.equal(isPalindrome('ogo'), true);
        expect(isPalindrome('abba')).true;
    });

    it('should return false if a string is not a palindrome', () => {
        // assert.equal(isPalindrome('og'), false);
        expect(isPalindrome('abda')).false;
    });

    it('should return true with length equal to 1', () => {
        // assert.equal(isPalindrome('o'), true);
        expect(isPalindrome('o')).true;

    });
    it('should return true with an empty string', () => {
        // assert.equal(isPalindrome(''), true);
        expect(isPalindrome('')).true;
    });

    it('should return /not a string/  with typeof str = number', () => {
        // assert.equal(isPalindrome(123), 'not a string');
        expect(isPalindrome(123)).equal('not a string');
    });

    it('should return /not a string/ with typeof str = null', () => {
        //assert.equal(isPalindrome(null), 'not a string');
        expect(isPalindrome(null)).equal('not a string');

    });

    it('should return /not a string/ with an empty input', () => {
        //assert.equal(isPalindrome(), 'not a string');
        expect(isPalindrome()).equal('not a string');
    });
});

module.exports = {isPalindrome};