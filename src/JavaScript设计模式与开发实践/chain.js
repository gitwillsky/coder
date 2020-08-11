function Chain(fn) {
  this.fn = fn;
  this.next = null;
}

const SYMBOL_NEXT = Symbol();

Chain.prototype.setNext = function (next) {
  this.next = next;
  return next;
};

Chain.prototype.execute = function () {
  const ret = this.fn.apply(this, arguments);
  if (ret === SYMBOL_NEXT) {
    return this.next && this.next.execute.apply(this.next, arguments);
  }
};

function Passenger(name, isCloseTicketSeller) {
  return function () {
    if (isCloseTicketSeller) {
      console.log(name + ": 我已经将你的车票钱投进钱币箱");
    } else {
      console.log(name + ": 钱币箱离我太远，我得传给下一个乘客");
      return SYMBOL_NEXT;
    }
  };
}

// 创建乘客并把他们加入职责链
const PASSENGER_A = new Chain(Passenger("A", false));
const PASSENGER_B = new Chain(Passenger("B", false));
const PASSENGER_C = new Chain(Passenger("C", true));

// 指定职责链执行顺序
PASSENGER_A.setNext(PASSENGER_B).setNext(PASSENGER_C);

// 执行购票
PASSENGER_A.execute();
// => 
// A: 钱币箱离我太远，我得传给下一个乘客
// B: 钱币箱离我太远，我得传给下一个乘客
// C: 我已经将你的车票钱投进钱币箱
