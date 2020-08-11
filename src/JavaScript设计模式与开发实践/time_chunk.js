function timeChunk(arr, fn, count, interval) {
  const execute = function () {
    for (let i = 0; i < Math.min(arr.length, count || 1); i++) {
      const item = arr.shift();
      fn(item);
    }
  };

  const t = setInterval(() => {
    if (arr.length === 0) {
      return clearInterval(t);
    }
    execute();
  }, interval || 500);
}

timeChunk(
  Array.from({ length: 1000 }, (v, k) => (v = Math.random())),
  function (item) {
    console.log(item);
  },
  8
);
