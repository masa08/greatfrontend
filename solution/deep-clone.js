/**
 * @param {*} value
 * @return {*}
 */
export default function deepClone(value) {
  if (typeof value !== 'object' || value === null) return value;

  if (Array.isArray(value)) return value.map((item) => deepClone(item));

  return Object.fromEntries(
    Object.entries(value).map(([key, value]) => [key, deepClone(value)])
  );
}

const obj1 = { user: { role: 'admin' } };
const clonedObj1 = deepClone(obj1);
console.log({ clonedObj1 });

clonedObj1.user.role = 'guest'; // Change the cloned user's role to 'guest'.
clonedObj1.user.role; // 'guest'
obj1.user.role; // Should still be 'admin'.
