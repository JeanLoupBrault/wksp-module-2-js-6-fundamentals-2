let verifyEquals = require('../../assets/verify-equals');

// Problem 6
// ---------
// Step 1
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is 
//      - "add", return the sum of the two other elements of the array. 
//      - "sub" return their difference. 
//      - "mult" return their product.  
//  - Anything else return undefined. 

// For example:
// f(["add", 10, 20]); // 30
// f(["mult", 2, 3]); // 6
// f(["spoof", 10, 10]); // undefined

function f(arr) {
  const operation = arr[0];
      switch (operation) {
          case 'add':
              return arr.slice(1).reduce((prev, next) => prev + next);
              
          case 'sub':
              return arr.slice(1).reduce((prev, next) => prev - next);
              
          case 'mult':
              return arr.slice(1).reduce((prev, next) => prev * next);
              
          default:
          return undefined;
      }
  }

//  if (input.length !== 3 ||
//    typeof input[0] !== ('add' || 'sub' || 'mult') || 
//    typeof input[1] !== 'number' || typeof input[2] !== 'number'
//    ) { 
//        return undefined;
//    }
//    else if (
//      typeof input[0] === 'add'{
//       return input[1] + input[2];
//      })
//      else if (
//        typeof input[0] === 'sub'{
//        return input[1] - input[2];
//      })
//        return input[1] * input[2];
//      };  

// Step 2
// We need 8 test cases. The first input is provided.
// Don't forget to test all of the question parameters

let inputs = [['add', 10, 20], ['chair', 20, 10], ['mult', 10, 20], ['sub', 10, 20], ['add', '', 20], ['add', 10, ''], ['bacon', '', 20], ['add', 100, 20]];
let outputs = [30, undefined, 200, -10, undefined, undefined, undefined, 120];

// Step 3
// Run this file in the debugger.
// If you get the "All test passed for..." message, move on to the next exercise.

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
console.log('All tests passed for ' + __filename);
