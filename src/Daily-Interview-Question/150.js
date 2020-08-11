/**
 * 第 150 题：二分查找如何定位左边界和右边界
 *
 * @version 2020-8-11
 */

function binarySearch(arr, searchElement) {
  if (!arr || !searchElement) {
    return -1;
  }
  let begin = 0;
  // 左闭右开
  let end = arr.length;
  // 闭区间
  // let end = arr.length - 1;
  // while(begin <= end)
  while (begin < end) {
    const mid = (begin + end) >>> 1;
    if (Object.is(arr[mid], searchElement)) {
      return mid;
    }
    if (arr[mid] < searchElement) {
      begin = mid + 1;
    } else if (arr[mid] > searchElement) {
      // 闭区间 end = mid  - 1;
      end = mid;
    }
  }
  return -1;
}
