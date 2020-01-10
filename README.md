## Testing with Mocha-Chai
In this project, I am learning how to test functions using the Chai library.

## What is Mocha?
  - [Mocha](https://mochajs.org/) is a JavaScript test framework that runs on Node.js and in the browser.
  - Mocha does not include an assertion library so that's why we use Chai.

## What is Chai?
  - [Chai](http://chaijs.com/) is an assertion library that pairs well with any JS testing framework.
  - Chai has 3 different styles of assertion: `assert`, `expect`, and `should`.
  - In this project I am using an`expect` style.

## Installation
You should have Node and npm on your computer installed.
 Go to -> [Node.js](https://nodejs.org/en/) (npm is installed automatically)
 
 To install `Mocha` type the following commands in the terminal:
 ```
 npm install --global mocha
 npm install --save-dev mocha
```
The `chai` package is available on [npm](https://www.npmjs.com/) To install it, type in the terminal:

    npm install --save-dev chai
     
## Plugins
You will need to install additional plugins for testing:
* `chai-arrays` - for testing arrays:

 ```
npm install chai-arrays
 ```
 
* `chai-string` - for testing strings:
 ```
npm install chai-string
 ```
* `chai-sorted` - for sorting
```
npm install chai-sorted
```
More plugins [here](https://www.chaijs.com/plugins/).  
To highlight commands Go to Settings/Preferences -> Libraries and download libraries with the plugins names.  
The file "index.js" contains functions for testing and their descriptions.  
The The folder "test" contains a list of tests for each function separately.

    
    




