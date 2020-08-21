/**
 * 第 36 题：使用迭代的方式实现 flatten 函数
 *
 * @version 1.0.0
 */

const input = [1, [2, 3, [4, 5, 6, [7, 8, 9, 10]]]];

function flatten(arr) {
  const ret = [];
  const queue = [];
  let index = 0;

  while (index < arr.length || queue.length) {
    // 取出 queue中的元素然后处理
    const queueLen = queue.length;
    for (let i = 0; i < queueLen; i++) {
      const item = queue.shift();
      if (Array.isArray(item)) {
        for (let j = 0; j < item.length; j++) {
          queue.push(item[j]);
        }
      } else {
        ret.push(item);
      }
    }
    // 取出原数组放入queue
    if (index < arr.length) queue.push(arr[index++]);
  }
  return ret;
}

console.log(flatten(input));
