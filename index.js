function isAdult(num){
    if (num < 0 || typeof num !== "number") return undefined;
    else return num >= 21;
}

function sortArrayUp(arr) {
    return arr.sort((a, b) => a - b);
}

    function isPalindrome(str) {
        if (typeof str !== 'string') return "not a string";
        let newStr = '';
        for (let i = str.length - 1; i >= 0; i--){
            newStr = newStr + str[i];
        }
        return newStr === str;
    }

function isOddNumber(num) {
    return num % 2 !== 0 && typeof num === 'number'&& num !== null;
}

function isEvenNumber(num) {
    return num % 2 === 0 && typeof num === 'number'&& num !== null;
}

module.exports = {isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber};