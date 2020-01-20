//1.function checks if person is an adult older then 21 y.o.
function isAdult(num) {
  if (num < 0 || typeof num !== 'number') return undefined;
  else return num >= 21;
}

//2.function sorts an array of numbers in ascending order
function sortArrayUp(arr) {
  return Array.isArray(arr) ? arr.sort((a, b) => a - b) : 'not an array';
}

// //3.function checks if string is the palindrome
function isPalindrome(str) {
  if (typeof str !== 'string') return 'not a string';
  let newStr = str.split('').reverse().join('');
  return newStr === str;
}

//4.function checks if given number is an odd number
function isOddNumber(num) {
  return num % 2 !== 0 && typeof num === 'number' && true;
}

//5.function checks if given number is an even number
function isEvenNumber(num) {
  return num % 2 === 0 && typeof num === 'number' && true;
}

//6.Sum of all the multiples of 3 or 5. Upto and including n, this function will return the sum of all multiples of 3 and 5.
//Ex:findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
function findSum(n) {
  let sum = 0;
  for (let i = 3; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}

//7.Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Ex:a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
function longest(s1, s2) {
  if (typeof s1 !== 'string' || typeof s2 !== 'string') return 'not a string';
  let arr = s1.concat(s2).split('').sort();
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return Object.keys(obj).join('');
}

//8.Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any
// elements with the same value next to each other and preserving the original order of elements.
//Ex:uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']; uniqueInOrder([1,2,2,3,3]) == [1,2,3]
function uniqueInOrder(iterable) {
  if (typeof iterable === 'string' || Array.isArray(iterable) === true) {
    let arr = [];
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] !== arr[arr.length - 1]) {
        arr.push(iterable[i]);
      }
    }
    return arr;
  } else {
    return 'check the value';
  }
}

//9.You get the start number and the end number of a region and should return the count of all numbers except
// numbers with a 5 in it. The start and the end number are both inclusive!
//Ex:4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (i.toString().includes('5') === false) {
      count++;
    }
  }
  return count;
}

//10.Given an array of numbers, you must return a string. The numbers correspond to the letters of the alphabet
// in reverse order: a=26, z=1 etc. You should also account for '!', '?' that are represented by
// '27', '28' respectively.

function switcher(x) {
  if (Array.isArray(x) === false) return 'not an array';
  let alf = ' zyxwvutsrqponmlkjihgfedcba!?';
  return x.map(i => alf[i]).join('');
}


module.exports = {isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber, findSum, longest, uniqueInOrder, 
  dontGiveMeFive, switcher };