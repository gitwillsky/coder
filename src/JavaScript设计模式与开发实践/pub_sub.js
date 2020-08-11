const bus = {
  clientList: {},
  subscribe(key, fn) {
    const fns = this.clientList[key] || (this.clientList[key] = []);
    // 防止重复订阅
    if (
      fns.some(function (v) {
        return v === fn;
      })
    ) {
      return;
    }
    fns.push(fn);
  },
  publish() {
    const key = Array.prototype.shift.call(arguments);
    if (key in this.clientList) {
      this.clientList[key].forEach((v) => {
        v.apply(this, arguments);
      });
    }
  },
};

bus.subscribe("listen", function (name) {
  console.log("a" + " receive listen event");
});

bus.subscribe("listen", function (name) {
  console.log("b" + " receive listen event");
});

bus.publish("listen", "a");
// => a receive listen event
// => b receive listen event
