function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

function New() {
  // 新建一个对象，原型默认为Object.prototype
  const obj = new Object();
  // 取出构造函数
  const construct = [].shift.call(arguments);
  // 将新建的对象原型设置为构造函数的原型
  Object.setPrototypeOf(obj, construct.prototype);
  // 调用构造函数，设置构造函数的this为新建对象，返回构造函数结果
  const ret = construct.apply(obj, arguments);
  // 如果构造函数返回了一个对象则返回构造函数的对象，否则返回新建的对象
  return typeof ret === "object" ? ret : obj;
}

const a = New(Person, "sven");
const b = new Person("sven");

console.log(a.getName()); // => sven
console.log(b.getName()); // => sven

console.log(Object.getPrototypeOf(a) === Person.prototype); // => true

console.log(Object.getPrototypeOf(Object.prototype) === null); // => true
