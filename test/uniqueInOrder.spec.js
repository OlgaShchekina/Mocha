const assert = require('assert');
let chai = require("chai"),
    expect = chai.expect;
chai.use(require('chai-string'));
const {uniqueInOrder} = require('../index.js');




module.exports = {uniqueInOrder};