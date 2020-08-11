function each(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn.call(arr[i], i, arr[i]);
  }
}

each([1, 2, 3], function (i, v) {
  console.log(i, v);
});

function iterator(arr) {
  let index = 0;

  return {
    next: function () {
      const a = {
        done: index >= arr.length,
        value: arr[index],
      };
      index += 1;
      return a;
    },
  };
}

const it = iterator([1, 2, 3, 4]);

// 由外部控制迭代过程
for (let b = it.next(); !b.done; b = it.next()) {
  console.log(b.value);
}
