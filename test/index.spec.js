const assert = require('assert');
const {isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber} = require('../index.js');

describe('function isAdult', () => {
    it('should work correct if number equal 21', () => {
        assert.equal (isAdult(21), true);
    });
    it('should work correct if number greater than 21', () => {
        assert.equal (isAdult(55), true);
    });
    it('should be false if number is less than 21', () => {
        assert.equal (isAdult(20), false);
    });
    it('should return undefined if number is negative', () => {
        assert.equal (isAdult(-1), undefined);
    });
    it('should be undefined if number is not a number', () => {
        assert.equal (isAdult('1'), undefined);
    });
    it('should be undefined if number is empty', () => {
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
        assert.deepStrictEqual(sortArrayUp([1,1,1,1,1]), [1,1,1,1,1]);
    });
    it('should return array with one number if array length = 1', () => {
        assert.deepStrictEqual(sortArrayUp([2]), [2]);
    });
    it('should return an empty array', () => {
        assert.deepStrictEqual(sortArrayUp([]), []);
    });


});
describe('function isPalindrome', () => {
    it('should function isPalindrome return true', () => {
        assert.equal(isPalindrome('ogo'), true);
    });

    it('should function isPalindrome return false', () => {
        assert.equal(isPalindrome('og'), false);
    });

    it('should function isPalindrome return true with length equal to 1', () => {
        assert.equal(isPalindrome('o'), true);
    });
    it('should function isPalindrome return true with an empty string', () => {
        assert.equal(isPalindrome(''), true);
    });

    it('should return \'not a string\' isPalindrome with typeof str = number', () => {
        assert.equal(isPalindrome(123), 'not a string');
    });

    it('should return \'not a string\' isPalindrome with typeof str = null', () => {
        assert.equal(isPalindrome(null), 'not a string');
    });

    it('should return \'not a string\' isPalindrome with an empty input', () => {
        assert.equal(isPalindrome(), 'not a string');
    });


});

describe('function isOddNumber', () => {
    it('should function isOddNumbe return true if number is an odd',  () => {
        assert.equal(isOddNumber(3), true);
    });

    it('should function isOddNumbe return false if number is not an odd',  () => {
        assert.equal(isOddNumber(8), false);
    });

    it('should function isOddNumbe return false if number is 0',  () => {
        assert.equal(isOddNumber(0), false);
    });

    it('should function isOddNumbe return false if number is not a number',  () => {
        assert.equal(isOddNumber('abc'), false);
    });

    it('should function isOddNumbe return false if number is null',  () => {
        assert.equal(isOddNumber(null), false);
    });

});

describe('function isEvenNumber', () => {
    it('should function isEvenNumber return true if number is an even',  () => {
        assert.equal(isEvenNumber(4), true);
    });

    it('should function isEvenNumber return false if number is an odd',  () => {
        assert.equal(isEvenNumber(7), false);
    });

    it('should function isEvenNumber return true if number is 0',  () => {
        assert.equal(isEvenNumber(0), true);
    });

    it('should function isEvenNumber return false if number is not a number',  () => {
        assert.equal(isEvenNumber('abc'), false);
    });

    it('should function isEvenNumber return false if number is null',  () => {
        assert.equal(isEvenNumber(null), false);
    });

});

