// get(object, path, [defaultValue]);
// get(john, 'profile.name.firstName'); // 'John'
// get(john, 'profile.gender'); // 'Male'
// get(jane, 'profile.name.firstName'); // undefined

export default function get(objectParam, pathParam, defaultValue) {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split('.');

  let index = 0;
  let length = path.length;
  let object = objectParam;

  while (object != null && index < length) {
    object = object[String(path[index])];
    index++;
  }

  const value = index && index === length ? object : undefined;
  return value != undefined ? value : defaultValue;
}

const john = {
  profile: {
    name: {
      firstName: 'hoge',
    },
  },
};

console.log(get(john, 'profile.name.firstName'));
