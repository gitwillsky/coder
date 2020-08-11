function CreateDiv(html) {
  this.html = html;
  this.init();
}

CreateDiv.prototype.init = function () {
  console.log(this.html);
};

// 这里使用代理来实现CreateDiv的单例模式，实践职责单一原则
const ProxySingletonCreateDiv = (function () {
  let instance = null;
  return function (html) {
    return instance || (instance = new CreateDiv(html));
  };
})();

const a = new ProxySingletonCreateDiv("sven_a"); // => sven_a
const b = new ProxySingletonCreateDiv("sven_b");

console.log(Object.is(a, b)); // => true
