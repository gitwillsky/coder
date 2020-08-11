// 定义“抽象类”
const Beverage = {
  boilWater() {
    console.log("烧水");
  },
  brew() {
    // 因为JS编译器无法检查子类是否重写父类方法，这里抛出异常提示重写
    throw new Error("子类必须重写brew方法");
  },
  pourInCup() {
    throw new Error("子类必须重写pourInCup方法");
  },
  addCondiments() {
    throw new Error("子类必须重写addCondiments方法");
  },
  customerWantsCondiments() {
    // 默认需要调料
    return true;
  },
  // init函数代表模板方法
  init() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    // 这里使用钩子函数，如果返回true则表示需要添加调料
    if (this.customerWantsCondiments()) {
      this.addCondiments();
    }
  },
};

// 具体实现子类
const coffeeWithHook = {
  brew() {
    console.log("用沸水冲泡咖啡");
  },
  pourInCup() {
    console.log("把咖啡倒进杯子");
  },
  addCondiments() {
    console.log("加糖和牛奶");
  },
  customerWantsCondiments() {
    return window.confirm("请问需要调料吗？");
  },
};

Object.setPrototypeOf(coffeeWithHook, Beverage);

coffeeWithHook.init();
