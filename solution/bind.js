/**
 * @param {Object} thisArg
 * @param {...*} boundArgs
 * @return {void}
 */
Function.prototype.myBind = function (thisArg, ...boundArgs) {
  const originalFunc = this;
  if (typeof originalFunc !== 'function') {
    throw new TypeError('Bind must be called on a function');
  }

  return function (...args) {
    return Reflect.apply(originalFunc, thisArg, [...boundArgs, ...args]);
  };
};

Function.prototype.myBind2 = function (thisArg, ...argArray) {
  const originalFunc = this;
  return function (...args) {
    return originalFunc.apply(thisArg, [...argArray, ...args]);
  };
};

const john = {
  age: 42,
  getAge: function () {
    return this.age;
  },
};

// const unboundGetAge = john.getAge;
// console.log(unboundGetAge()); // undefined

const boundGetAge = john.getAge.myBind(john);
console.log(boundGetAge()); // 42
