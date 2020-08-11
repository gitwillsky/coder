function refreshCommand(receiver) {
  return function () {
    receiver.refresh();
  };
}

function setCommand(ele, cmd) {
  ele.onclick = function () {
    cmd();
  };
}

const MenuBar = {
  refresh: function () {
    console.log("menu bar refresh");
  },
};

const MenuBarRefreshCommand = refreshCommand(MenuBar);

setCommand(btn1, MenuBarRefreshCommand);
