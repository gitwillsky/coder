Function.prototype.uncurrying = function () {
  const self = this;
  return function () {
    const context = [].shift.call(arguments);
    return self.apply(context, arguments);
  };
};

const push = Array.prototype.push.uncurrying();

const arr = [];

console.log(arr.length); // => 0

push(arr, 1);

console.log(arr.length); // => 1
