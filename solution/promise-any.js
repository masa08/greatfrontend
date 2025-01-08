/**
Promise.any() takes an iterable of elements (usually Promises).
It returns a single promise that resolves as soon as any of the elements in the iterable fulfills, with the value of the fulfilled promise.
If no promises in the iterable fulfill (if all of the given elements are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.

If an empty iterable is passed, then the promise returned by this method is rejected synchronously. The rejected reason is an AggregateError object whose errors property is an empty array.

Source: Promise.any() - JavaScript | MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
*/

/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) reject(new AggregateError([]));

    let pending = iterable.length;
    const errors = new Array(pending);

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        resolve(value);
      } catch (err) {
        errors[index] = err;
        pending--;

        if (pending === 0) reject(new AggregateError(errors));
      }
    });
  });
}

const p0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 500);
});
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(12);
  }, 400);
});

await promiseAny([p0, p1]); // 42

// Ref
// const p0 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(42);
//   }, 500);
// });
// const p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(12);
//   }, 400);
// });
// const p2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(412);
//   }, 1000);
// });

// array1 = [p0, p1, p2];

// array1.forEach(async (ele, index) => {
//   console.log(index + 'start');
//   const item = await ele;
//   console.log(index + 'resolved');
// });

// > "0start"
// > "1start"
// > "2start"
// > "1resolved"
// > "0resolved"
// > "2resolved"
