##Testing with Mocha + 

## What is Mocha?
  - [Mocha](https://mochajs.org/) is a JavaScript test framework that runs on Node.js and in the browser.
  - good for asynchronous testing
  - Mocha does not include an assertion library so that's why we use.... Chai!

## What is Chai?
  - [Chai](http://chaijs.com/) is an assertion library that pairs well with any JS testing framework
  - Chai has 3 different styles of assertion: `assert`, `expect`, and `should`


## Setup:


```javascript
const assert = require('assert');
let chai = require("chai"),
    expect = chai.expect;
chai.use(require("chai-sorted"));
```
```javascript
const {isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber} = require('../index.js');
```


