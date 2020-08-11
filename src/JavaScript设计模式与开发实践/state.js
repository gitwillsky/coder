// 封装状态
function StateOff(light) {
  this.light = light;
  this.state = "off";
}

function StateOn(light) {
  this.light = light;
  this.state = "on";
}

StateOff.prototype.next = function () {
  this.light.setState(this.light.onState);
};

StateOn.prototype.next = function () {
  this.light.setState(this.light.offState);
};

function Light() {
  // 灯一共有两个状态
  this.onState = new StateOn(this);
  this.offState = new StateOff(this);
  // 初始状态为a
  this.currState = this.offState;
}

Light.prototype.setState = function (state) {
  this.currState = state;
};

Light.prototype.changeState = function () {
  this.currState.next();
};

Light.prototype.getState = function () {
  console.log(this.currState.state);
};

const light = new Light();

light.getState(); // => off
light.changeState();
light.getState(); // => on
