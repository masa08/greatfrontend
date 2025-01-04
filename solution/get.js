// get(object, path, [defaultValue]);
// get(john, 'profile.name.firstName'); // 'John'
// get(john, 'profile.gender'); // 'Male'
// get(jane, 'profile.name.firstName'); // undefined

export default function get(objectParam, pathParam, defaultValue) {
  const pathArray = Array.isArray(pathParam) ? pathParam : pathParam.split('.');

  let index = 0;
  let arrLength = pathArray.length;
  let object = objectParam;
  while (object != null && index < arrLength) {
    object = object[String(pathArray[index])];
    index++;
  }

  const value = index === arrLength ? object : undefined;
  return typeof value != 'undefined' ? value : defaultValue;
}

const john = {
  profile: {
    name: {
      firstName: 'hoge',
    },
  },
};

console.log(get(john, 'profile.name.firstName'));
