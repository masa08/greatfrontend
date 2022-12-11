/**
 * @callback callbackFn
 * @param {*} [initialValue]
 * @return {Array}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  const noInitialValue = initialValue === undefined;
  const len = this.length;
  if (noInitialValue && len === 0)
    throw new TypeError('Reduce of empty array with no initial value');

  let acc = noInitialValue ? this[0] : initialValue;
  let startingIndex = noInitialValue ? 1 : 0;

  for (let k = startingIndex; k < len; k++) {
    if (Object.hasOwn(this, k)) {
      acc = callbackFn(acc, this[k], k, this);
    }
  }

  return acc;
};

console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 4));
