
const assert = require('assert');
let chai = require("chai"),
    expect = chai.expect;
chai.use(require('chai-string'));

const {isPalindrome} = require('../index.js');

describe('function isPalindrome', () => {
    it('should return true if a string is a palindrome', () => {
        expect(isPalindrome('abba')).true;
    });

    it('should return false if a string is not a palindrome', () => {
        expect(isPalindrome('abda')).false;
    });

    it('should return true with length equal to 1', () => {
        expect(isPalindrome('o')).true;

    });
    it('should return true with an empty string', () => {
        expect(isPalindrome('')).true;
    });

    it('should return /not a string/  with typeof str = number', () => {
        expect(isPalindrome(123)).equal('not a string');
    });

    it('should return /not a string/ with typeof str = null', () => {
        expect(isPalindrome(null)).equal('not a string');
    });

    it('should return /not a string/ with an empty input', () => {
        expect(isPalindrome()).equal('not a string');
    });
});

