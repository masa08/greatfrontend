/**
 * @param {Array} iterable
 * @return {Promise<{status: 'fulfilled', value: *}|{status: 'rejected', reason: *}>}
 */
export default function promiseAllSettled(iterable) {
  return new Promise((resolve) => {
    const results = new Array(iterable.length);
    let pending = iterable.length;

    if (pending === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = { status: 'fulfilled', value: value };
      } catch (err) {
        results[index] = { status: 'rejected', reason: err };
      } finally {
        pending -= 1;
        if (pending === 0) {
          resolve(results);
        }
      }
    });
  });
}

const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('foo');
  }, 100);
});

await promiseAllSettled([p0, p1, p2]);
// [
//   { status: 'fulfilled', value: 3 },
//   { status: 'fulfilled', value: 42 },
//   { status: 'rejected', reason: 'foo' },
// ];
