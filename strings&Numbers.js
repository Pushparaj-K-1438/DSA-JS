// Reverse String
const revString = (str) => str.split('').reverse().join('');
console.log(revString('Reverse String'));
// Palindrome
const palindrome = (str) => {
    const isPalindrome = str.split('').reverse().join('') === str;
    return isPalindrome;
}
console.log(palindrome('racecar'));
// Reverse Integers
const revInt = (int) => parseInt(int.toString().split('').reverse().join(''));
console.log(revInt(123456789));
// Capitalize Letters
const capitalizeWord = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(capitalizeWord('capitalize letters'));

// FizzBuzz
const fizzBuzz = (num) => {
    for (let i = 0; i <= num; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            console.log('FizzBuzz');
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else if (i % 3 == 0) {
            console.log('Fizz');
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz(15);