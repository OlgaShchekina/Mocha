const assert = require('assert');
const {expect} = require('chai');

const {isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber} = require('../index.js');

describe('function isAdult', () => {
    it('should return true if the number is equal 21', () => {
       // assert.equal (isAdult(21), true);
       expect(isAdult(21)).true;
    });
    it('should return true if the number is greater than 21', () => {
        assert.equal (isAdult(55), true);
    });
    it('should return  false if the number is less than 21', () => {
        assert.equal (isAdult(20), false);
    });
    it('should return undefined if the number is negative', () => {
        assert.equal (isAdult(-1), undefined);
        expect(isAdult(-1)).undefined;

    });
    it('should return undefined ifthe  number is not a number', () => {
        assert.equal (isAdult('1'), undefined);
    });
    it('should return undefined if the number is empty', () => {
        assert.equal (isAdult(), undefined);
    });

});

describe('function sortArrayUp', () => {
    it('should sort an array in ascending order', () => {
        assert.deepStrictEqual(sortArrayUp([2,3,4,0,1]), [0,1,2,3,4]);
    });
    it('should not sort an array in descending order', () => {
        assert.notDeepEqual(sortArrayUp([2,3,4,0,1]), [4,3,2,1,0]);
    });
    it('should return an array with the same length', () => {
        let arr = [1,1,1,1,1];
        let sorted = sortArrayUp(arr);
        assert.equal(arr.length,sorted.length);
    });
    it('should return an array with one number if array length = 1', () => {
        assert.deepStrictEqual(sortArrayUp([2]), [2]);
    });
    it('should return an empty array', () => {
        assert.deepStrictEqual(sortArrayUp([]), []);
    });


});
describe('function isPalindrome', () => {
    it('should return true if a string is a palindrome', () => {
        assert.equal(isPalindrome('ogo'), true);
    });

    it('should return false if a string is not a palindrome', () => {
        assert.equal(isPalindrome('og'), false);
    });

    it('should return true with length equal to 1', () => {
        assert.equal(isPalindrome('o'), true);
    });
    it('should return true with an empty string', () => {
        assert.equal(isPalindrome(''), true);
    });

    it('should return \'not a string\'  with typeof str = number', () => {
        assert.equal(isPalindrome(123), 'not a string');
    });

    it('should return \'not a string\' with typeof str = null', () => {
        assert.equal(isPalindrome(null), 'not a string');
    });

    it('should return \'not a string\' with an empty input', () => {
        assert.equal(isPalindrome(), 'not a string');
    });


});

describe('function isOddNumber', () => {
    it('should return true if number is an odd',  () => {
        assert.equal(isOddNumber(3), true);
    });

    it('should return false if number is not an odd',  () => {
        assert.equal(isOddNumber(8), false);
    });

    it('should return false if number is equal 0',  () => {
        assert.equal(isOddNumber(0), false);
    });

    it('should return false if number is a string',  () => {
        assert.equal(isOddNumber('abc'), false);
    });

    it('should return false if number is null',  () => {
        assert.equal(isOddNumber(null), false);
    });

});

describe('function isEvenNumber', () => {
    it('should return true if number is an even',  () => {
        assert.equal(isEvenNumber(4), true);
    });

    it('should return false if number is an odd',  () => {
        assert.equal(isEvenNumber(7), false);
    });

    it('should return true if number is 0',  () => {
        assert.equal(isEvenNumber(0), true);
    });

    it('should return false if number is a string',  () => {
        assert.equal(isEvenNumber('abc'), false);
    });

    it('should return false if number is null',  () => {
        assert.equal(isEvenNumber(null), false);
    });

});

