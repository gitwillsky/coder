let addEvent = function (ele, type, handler) {
  if (window.addEventListener) {
    // 改变addEvent，下次不走判断流程
    addEvent = function (ele, type, handler) {
      ele.addEventListener(type, handler, false);
    };
  } else if (windows.attachEvent) {
    addEvent = function (ele, type, handler) {
      ele.attachEvent("on" + type, handler);
    };
  }

  // 仅在第一次调用时执行
  addEvent(ele, type, handler);
};
