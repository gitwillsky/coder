/**
 * 第 67 题：随机生成一个长度为 10 的整数类型的数组，
 * 例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，
 * 将其排列成一个新数组，
 * 要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。
 */

const input = [2, 10, 3, 4, 5, 11, 10, 11, 20];

function quickSort(arr, l, r) {
  if (!arr | !arr.length) {
    return [];
  }

  const index = partition(arr, l, r);
  quickSort(arr, l, index);
  quickSort(arr, index + 1, r);
  return arr;
}

function partition(arr, l, r) {
  if (l >= r) {
    return -1;
  }
  const pos = Math.floor(Math.random() * r);
  [arr[l], arr[pos]] = [arr[pos], arr[l]];

  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < arr[l]) {
      if (i !== j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      j++;
    }
  }

  [arr[l], arr[j - 1]] = [arr[j - 1], arr[l]];
  return j - 1;
}

console.log(quickSort(input, 0, input.length));
