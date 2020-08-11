// 根据绩效不同算出年底奖金
const strategies = {
  A: function (salary) {
    return salary * 4;
  },
  B: function (salary) {
    return salary * 3;
  },
  C: function (salary) {
    return salary * 2;
  },
  D: function (salary) {
    return salary;
  },
};

function calculateBonus(level, salary) {
  return strategies[level](salary);
}
