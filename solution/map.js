/**
 * @callback callbackFn
 * @param {object} [thisArg]
 * @return {Array}
 */
Array.prototype.myMap = function (callbackFn, thisArg) {
  const len = this.length;
  const array = new Array(len);

  for (let k = 0; k < len; k++) {
    if (Object.hasOwn(this, k)) {
      array[k] = callbackFn.call(thisArg, this[k], k, this);
    }
  }
  return array;
};

console.log([1, 2, 3, 4].myMap((i) => i * 2));
