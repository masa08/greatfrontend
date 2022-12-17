/**
 * @param {Object} obj
 * @param {Array} path
 * @param {Object} output
 * @return {Object}
 */
export default function squashObject(object, path = [], output = {}) {
  for (const [key, value] of Object.entries(object)) {
    if (typeof value !== 'object' || value === null) {
      output[path.concat(key).join('.')] = value;
    } else {
      console.log(path, output);
      squashObject(value, path.concat(key), output);
    }
  }

  return output;
}

const object = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
};

console.log(squashObject(object)); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }
