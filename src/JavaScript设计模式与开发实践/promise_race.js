function someUnstableTask() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("task finished");
      console.log("task running...");
    }, 5000)
  );
}

function timeout(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("task timeout"));
  }, interval);
}

Promise.race([someUnstableTask(), timeout(1000)])
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

// => task timeout
// => task running...
