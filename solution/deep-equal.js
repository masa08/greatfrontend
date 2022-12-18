function shouldDeepCompare(type) {
  return type === '[object Object]' || type === '[object Array]';
}

function getType(value) {
  return Object.prototype.toString.call(value);
}

/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
export default function deepEqual(valueA, valueB) {
  const type1 = getType(valueA);
  const type2 = getType(valueB);

  if (type1 === type2 && shouldDeepCompare(type1) && shouldDeepCompare(type2)) {
    const kvPairs1 = Object.entries(valueA);
    const kvPairs2 = Object.entries(valueB);

    if (kvPairs1.length !== kvPairs2.length) return false;

    return kvPairs1.every(
      // Make sure the other objects have the same properties defined.
      ([k, v]) => Object.hasOwn(valueB, k) && deepEqual(v, valueB[k])
    );
  }

  return Object.is(valueA, valueB);
}

const v1 = 'foo';
const v2 = 'foo';
console.log(deepEqual(v1, v2)); // true

const v3 = { id: 1 };
const v4 = { id: 1 };
console.log(deepEqual(v3, v4)); // true

const v5 = [1, 2, 3];
const v6 = [1, 2, 3];
console.log(deepEqual(v5, v6)); // true

const v7 = [{ id: '1' }];
const v8 = [{ id: '2' }];
console.log(deepEqual(v7, v8)); // false
