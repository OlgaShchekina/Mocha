//взрослый старше 21 года
function isAdult(num){
    if (num < 0 || typeof num !== "number") return undefined;
    else return num >= 21;
}

//отсортировать массив по убыванию
function sortArrayUp(arr) {
    return Array.isArray(arr)? arr.sort((a, b) => a - b): 'not an array';
}

//проверка на полиндром
    function isPalindrome(str) {
        if (typeof str !== 'string') return "not a string";
        let newStr = str.split('').reverse().join('');
        return newStr === str;
    }

// проверить нечетное ли число
function isOddNumber(num) {
    return num % 2 !== 0 && typeof num === 'number'&& true;
}

//проверить число на четность
function isEvenNumber(num) {
    return num % 2 === 0 && typeof num === 'number'&& true;
}

module.exports = {isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber};