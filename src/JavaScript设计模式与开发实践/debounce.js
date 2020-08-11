function debounce(fn, interval) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, arguments);
    }, interval || 500);
  };
}
