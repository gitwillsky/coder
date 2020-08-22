/**
 * 第 142 题：（算法题）求多个数组之间的交集
 *
 * @version
 */

function intersect(...arrays) {
  if (!arrays) {
    return [];
  }
  if (arrays.length === 1) {
    return arrays[0];
  }

  return arrays.reduce((arr, next) =>
    arr.filter((item) => next.includes(item))
  );
}

const arr1 = [1, 2, 3, 4, 3, 5, 1, 5, 10];
const arr2 = [1, 2, 3, 10, 3, 10, 1, 5];

console.log(intersect(arr1, arr2));

function intersectV2(...arrays) {
  if (!arrays) {
    return [];
  }
  if (arrays.length === 1) {
    return arrays[0];
  }

  const m = new Map();

  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      const key = arrays[i][j];
      const value = i + 1;
      if (i === 0) {
        m.set(key, value);
        continue;
      }
      if (m.has(key) && m.get(key) < value) {
        m.set(key, value);
      }
    }
  }
  return Array.from(m.keys()).filter((key) => m.get(key) === arrays.length);
}

console.log(intersectV2(arr1, arr2));
