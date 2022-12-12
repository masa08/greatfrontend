/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) reject(new AggregateError([]));

    let pending = iterable.length;
    const errors = new Array(iterable.length);

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
