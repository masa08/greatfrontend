/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) return;

    iterable.forEach(async (promise) => {
      try {
        const item = await promise;
        return resolve(item);
      } catch (e) {
        return reject(e);
      }
    });
  });
}

const p0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 100);
});
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Err!');
  }, 400);
});

console.log(await promiseRace([p0, p1])); // 42
