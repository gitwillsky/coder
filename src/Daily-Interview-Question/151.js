/**
 * 第 151 题：用最简洁代码实现indexOf方法
 *
 * @version 2020-8-11
 */

function indexOf(searchElement, fromIndex) {
  if (!searchElement) {
    return -1;
  }
  if (fromIndex > this.length) {
    return -1;
  }
  if (fromIndex < 0) {
    fromIndex = this.length - Math.abs(fromIndex);
    if (fromIndex < 0) {
      fromIndex = 0;
    }
  }

  if (Array.isArray(this)) {
    for (let i = fromIndex || 0; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  }

  if (Object.prototype.toString.call(this) === "[object String]") {
    const regexp = new RegExp(searchElement, "ig");
    regexp.lastIndex = fromIndex;
    const result = regexp.exec(this);
    return result ? result.index : -1;
  }
}

console.log(indexOf.call("abcdef", "b") === 1);
console.log(indexOf.call([1, 2, 3, 4, 5, 6], 3) === 2);
