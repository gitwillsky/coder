function throttle(fn, interval) {
  let firstTime = true;
  let timer;

  return function () {
    // 第一次立即执行
    if (firstTime) {
      fn.call(this, arguments);
      return (firstTime = false);
    }
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.call(this, arguments);
      clearTimeout(timer);
      timer = null;
    }, interval || 500);
  };
}

window.onresize = throttle(function () {
  console.log("window resize");
}, 1000);
