const assert = require('assert');
let chai = require("chai"),
    expect = chai.expect;
chai.use(require("chai-sorted"));
const {sortArrayUp} = require('../index.js');

describe('function sortArrayUp', () => {
    it('should return /not an array/ with an empty input', () => {
        //assert.deepStrictEqual(sortArrayUp([2,3,4,0,1]), [0,1,2,3,4]);
        expect(sortArrayUp()).equal('not an array');
    });
    it('should sort an array in ascending order', () => {
        //assert.deepStrictEqual(sortArrayUp([2,3,4,0,1]), [0,1,2,3,4]);
        expect(sortArrayUp([2,3,4,0,1])).sorted();
    });
    it('should not sort an array in descending order', () => {
        //assert.notDeepEqual(sortArrayUp([2,3,4,0,1]), [4,3,2,1,0]);
        expect(sortArrayUp([2,3,4,0,1])).not.equal([4,3,2,1,0]);
    });
    it('should return an array with the right length if the elements are the same ', () => {
        let arr = [1,1,1,1,1];
        let sorted = sortArrayUp(arr);
        // assert.equal(arr.length,sorted.length);
        expect(sorted).to.have.lengthOf(5);
    });
    it('should return an array with one number if array length = 1', () => {
        // assert.deepStrictEqual(sortArrayUp([2]), [2]);
        expect(sortArrayUp([2])).to.deep.equal([2]);
    });
    it('should return an empty array if array is empty', () => {
        //assert.deepStrictEqual(sortArrayUp([]), []);
        expect(sortArrayUp([])).to.deep.equal([]);
    });


});

module.exports = {sortArrayUp};