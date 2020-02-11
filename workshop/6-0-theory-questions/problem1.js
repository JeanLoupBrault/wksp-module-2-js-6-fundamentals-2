// Given the following functions, answer the questions below.

function square(x) {
    return x * x;
}

function decrement(x) {
    return x - 1;
}

function duplicateString(x) {
    return x.concat(x);
}

function reverseString(str) {
    const splitString = str.split(""); // var splitString = "hello".split("");
    const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join(""); 
}

// Expand each of the following and get the result of the expression
// Q1
square(decrement(square(decrement(3))));
decrement(3) === (3 - 1) === 2;
square(2) === 4;
decrement(4) = (4 - 1) === 3;
square(3) = 3 * 3 === 9;
final answer: 9;



// Q2
decrement(decrement(square(square(3))));
square(3) = 3 * 3 === 9;
square(9) = 9 * 9 === 81;
decrement(81) = 81 - 1 === 80;
decrement(80) = 80 - 1 === 79;
final answer: 79;

// Q3
duplicateString(reverseString("hello"));
reverseString('hello') = 'olleh';
duplicateString('olleh') = 'olleholleh'
final answer: 'olleholleh';


// Q4
reverseString(duplicateString(duplicateString("foo")));
duplicateString('foo') = 'foofoo';
duplicateString('foofoo') = 'foofoofoofoo';
reverseString('foofoofoofoo') = 'oofoofoofoof';
final answer: 'oofoofoofoof';


