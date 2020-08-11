const myImage = (function () {
  const imgEle = document.createElement("img");
  document.body.appendChild(imgEle);

  return function (src) {
    imgEle.src = src;
  };
})();

const proxyImage = (function () {
  const img = new Image();

  // 当image加载完成后，调用myImage
  img.onload = function () {
    myImage(this.src);
  };

  return function (src) {
    // 设置加载中的图片
    myImage("https://xxx.com/loading.gif");
    // 给Image对象src属性赋值，让浏览器加载图片
    img.src = src;
  };
})();

proxyImage("http://www.xxx.com/1.jpg");
