/**
 * @callback func
 * @return {Function}
 */
export default function curry(func) {
  return function curried(...args) {
    // func.length is the number of arguments
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    const self = this;
    return function (...args2) {
      return curried.apply(self, [...args, ...args2]);
    };
  };
}

function multiplyThree(a, b, c) {
  return a * b * c;
}

const curriedMultiplyThree = curry(multiplyThree);
curriedMultiplyThree(4)(5)(6); // 120
console.log(curriedMultiplyThree(4, 5, 6, 7));

const containsFour = curriedMultiplyThree(4);
const containsFourMulFive = containsFour(5);
containsFourMulFive(6);
