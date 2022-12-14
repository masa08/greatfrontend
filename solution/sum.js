/**
 * @param {number} number
 * @return {Function}
 */
export default function sum(numberA) {
  return function (numberB) {
    return numberB == undefined ? numberA : sum(numberA + numberB);
  };
}

// arrow func
// const sum = (a) => (b) => b ? sum(a + b) : a;
// export default sum;

console.log(sum(1)(2)(3)());
