/**
 * 第 54 题：冒泡排序如何实现，时间复杂度是多少， 还可以如何改进？
 */

function randomArr(n) {
  return Array.from({ length: n }).map(() => Math.round(Math.random() * 10));
}

function bubbleSortV1(arr) {
  if (!arr || !arr.length) {
    return [];
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

function bubbleSortV2(arr) {
  if (!arr || !arr.length) {
    return [];
  }

  for (let r = arr.length - 1; r > 0; ) {
    let tempIndex = 0;
    for (let l = 0; l < r; l++) {
      if (arr[l] > arr[l + 1]) {
        // 缩小需要冒泡的范围
        tempIndex = l;
        [arr[l], arr[l + 1]] = [arr[l + 1], arr[l]];
      }
    }
    // 更新冒泡范围
    r = tempIndex;
  }
}

const test = randomArr(10);
console.log("origin: ", test);
bubbleSortV2(test);
console.log("result: ", test);
