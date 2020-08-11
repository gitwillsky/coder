/**
 * 第 158 题：如何模拟实现 Array.prototype.splice
 *
 * 2020年8月11日11:01:53
 */

function splice(start, deleteCount, ...items) {
  if (start < 0) {
    start = this.length - Math.abs(start);
    if (start < 0) {
      start = 0;
    }
  }
  if (typeof deleteCount === "undefined") {
    deleteCount = this.length - start;
  }

  const rightArray = this.slice(start + deleteCount);
  const removedArray = this.slice(start, start + deleteCount);

  if (items && items.length > 0) {
    rightArray.unshift(...items);
  }

  let i = 0;
  for (; i < rightArray.length; i++) {
    this[start + i] = rightArray[i];
  }
  this.length = start + i;

  return removedArray;
}

const spec = [1, 2, 3, 4, 5, 6, 7];
const result = splice.call(spec, 2, 1, 9, 10, 11);
console.log("spec: ", spec, "result: ", result);
