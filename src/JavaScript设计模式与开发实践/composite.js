function Folder(name) {
  this.name = name;
  this.files = [];
}

Folder.prototype.add = function (file) {
  this.files.push(file);
};

Folder.prototype.scan = function () {
  console.log("开始扫描文件夹: " + this.name);
  for (let i = 0, file, files = this.files; (file = files[i++]); ) {
    file.scan();
  }
};

function File(name) {
  this.name = name;
}

File.prototype.add = function () {
  throw new Error("文件下不能再添加内容");
};

File.prototype.scan = function () {
  console.log("开始扫描文件： " + this.name);
};

const userFolder = new Folder("willsky");
const docsFolder = new Folder("Documents");
const musicFolder = new Folder("Music");

const bestMusic = new File("my best music");
const bestDocument = new File("my best document");

userFolder.add(docsFolder);
userFolder.add(musicFolder);
docsFolder.add(bestDocument);
musicFolder.add(bestMusic);

userFolder.scan();
/* =>
开始扫描文件夹: willsky
开始扫描文件夹: Documents
开始扫描文件： my best document
开始扫描文件夹: Music
开始扫描文件： my best music
*/
