const something = (function () {
  let nextValue;

  return {
    // for ... of循环需要
    [Symbol.iterator]: function () {
      return this;
    },
    // 标准迭代器接口方法
    next: function () {
      if (nextValue === undefined) {
        nextValue = 1;
      } else {
        nextValue = 3 * nextValue * 5;
      }

      // 返回当前迭代的值
      return { done: false, value: nextValue };
    },
  };
})();

console.log(something.next().value); // => 1
console.log(something.next().value); // => 15
console.log(something.next().value); // => 225
console.log(something.next().value); // => 3375

// something也具有iterator属性，可以被for...of迭代
for (const v of something) {
  console.log(v);

  // 防止死循环
  if (v > 4000000) {
    break;
  }
}
// => 50625
// => 759375
// => 11390625
