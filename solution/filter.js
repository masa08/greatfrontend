/**
 * @callback callbackFn
 * @param {object} [thisArg]
 * @return {Array}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const len = this.length;
  const results = [];

  for (let k = 0; k < len; k++) {
    const kValue = this[k];
    if (Object.hasOwn(this, k) && callbackFn.call(thisArg, kValue, k, this)) {
      results.push(kValue);
    }
  }

  return results;
};

console.log([1, 2, 3, 4].myFilter((value) => value % 2 == 0));
