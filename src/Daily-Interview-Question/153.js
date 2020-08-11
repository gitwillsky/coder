/**
 * 第 153 题：实现一个批量请求函数 multiRequest(urls, maxNum)
 *
 * 要求如下：
 * 要求最大并发数 maxNum
 * 每当有一个请求返回，就留下一个空位，可以增加新的请求
 * 所有请求完成后，结果按照 urls 里面的顺序依次打出
 * 2020年8月11日11:01:53
 */

function multiRequest(urls, maxNum) {
  return new Promise((resolve, reject) => {
    let index = 0;
    const results = [];
    for (let taskCount = 0; taskCount < maxNum; ) {
      (function task(index) {
        taskCount++;
        Promise.resolve(fetch(urls[index]))
          .then((val) => (results[index] = val))
          .catch((e) => reject(e))
          .finally(() => {
            taskCount--;
            if (taskCount < maxNum && index < urls.length - 1) {
              task(++index);
            } else {
              resolve(results);
            }
          });
      })(taskCount);
    }
  });
}

function fetch(url) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(url), Math.floor(Math.random() * 1e3))
  );
}

multiRequest(["a", "b", "c", "d", "e", "f", "g"], 2).then((val) =>
  console.log(val)
);
