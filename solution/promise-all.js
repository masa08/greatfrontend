export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    let unresolvedCount = iterable.length;
    const results = new Array(unresolvedCount);

    if (unresolvedCount == 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const result = await item;
        results[index] = result
        unresolvedCount -= 1
        
        if (unresolvedCount == 0) resolve(results)
      } catch (err) {
        reject(err);
      }
    });
  });
}

// Resolved example.
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});
await promiseAll([p0, p1, p2]); // [3, 42, 'foo']

// for error
// const p0 = Promise.resolve(30);
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('An error occurred!');
//   }, 100);
// });

// try {
//   await promiseAll([p0, p1]);
// } catch (err) {
//   console.log(err); // 'An error occurred!'
// }
