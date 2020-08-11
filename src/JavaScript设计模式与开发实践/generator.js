let x = 0;

// 注意函数名称前的 *
// 有三种形式(推荐第二种）：
// 1. function* foo() {}
// 2. function *foo() {}
// 3. function*foo() {}
function* foo() {
  x = 1;
  x = yield 10; // 暂停！
}

// 构造一个迭代器来控制这个生成器
const it = foo();
console.log("it:", Object.prototype.toString.call(it), "x:", x); // => it: [object Generator] x: 0

let ret = it.next();
console.log("ret:", ret, "x:", x); // => ret: { value: 10, done: false } x: 1

ret = it.next(100);
console.log("ret:", ret, "x:", x); // => ret: { value: undefined, done: true } x: 100

ret = it.next(1000);
console.log("ret:", ret, "x:", x); // => ret: { value: undefined, done: true } x: 100

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

console.log(g.next()); // => { value: 1, done: false }
console.log(g.return("foo")); // => { value: "foo", done: true }

function* gen() {
  while (true) {
    yield 42;
  }
}

var g = gen();
console.log(g.next()); // => { value: 42, done: false }
console.log(g.throw(new Error("Something went wrong")));
// => Error: Something went wrong <Stack>
