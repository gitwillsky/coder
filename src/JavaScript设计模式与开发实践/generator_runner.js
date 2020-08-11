function* generator() {
  let data1, data2, data3, data4;
  data1 = yield fetchSomething("a");
  try {
    data2 = yield fetchSomething("b", true);
  } catch (e) {
    console.log("catch error: ", e);
  }
  data3 = yield fetchSomething("c");
  data4 = yield fetchSomething(`${data1},${data2},${data3}`);
  return data4;
}

function fetchSomething(url, willError) {
  return new Promise((resolve, reject) => {
    if (willError) {
      return reject(new Error("timeout"));
    }
    setTimeout(() => resolve(url), Math.floor(Math.random() * 1e3));
  });
}

function generatorRunner(...args) {
  if (args.length === 0) {
    throw new Error("generator can not be null");
  }
  const generator = args.shift();
  if (typeof generator !== "function") {
    throw new Error("generator must be a generator function");
  }
  const it = generator.apply(this, args);

  const handleNext = function (value) {
    let ret = it.next(value);
    return (function handleResult(ret) {
      if (ret.done) {
        return value;
      }

      return Promise.resolve(ret.value)
        .then(handleNext)
        .catch((e) => handleResult(it.throw(e)));
    })(ret);
  };

  return Promise.resolve().then(handleNext);
}

generatorRunner(generator).then((a) =>
  console.log("fetchSomething return: ", a)
);

// => catch error:  Error: timeout <Stack>
// => fetchSomething return:  a,undefined,c
