export default function curry(func) {
  return function curried(...args) {
    // func.length is the number of arguments
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    return function (...args2) {
      return curried.apply(this, [...args, ...args2]);
    };
  };
}

function multiplyThree(a, b, c) {
  return a * b * c;
}

const curriedMultiplyThree = curry(multiplyThree);
curriedMultiplyThree(4)(5)(6); // 120

const containsFour = curriedMultiplyThree(4);
const containsFourMulFive = containsFour(5);
containsFourMulFive(6);
