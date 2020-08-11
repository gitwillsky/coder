const p = new Promise((resolve, reject) => {
  // Promise传入的函数会立即被调用
  console.log("Promise constructor executed");

  setTimeout(function () {
    resolve(100);
  }, 3000);
  throw new Error("throw error message");
})
  // then()被异步调用
  .then(
    (val) => console.log("resolved value:", val),
    (err) => console.log("first handle error:", err)
  )
  .then((val) => console.log("second resolved value", val))
  .catch((err) => console.log("second handle error:", err));

console.log("p is Promise: ", p instanceof Promise);
// => Promise constructor executed
// => p is Promise: true
// => first handle error: Error: reject error message <Error Stack>
// => second resolved value: undefined
