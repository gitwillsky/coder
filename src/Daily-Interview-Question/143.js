/**
 * 第 143 题：将'10000000000'形式的字符串，以每3位进行分隔展示'10.000.000.000',多种实现方式
 *
 * @version 2020-8-12
 */

const testStr = "1000000000.0";
const expected = "1.000.000.000.0";

function version1(s) {
  let sr = s.split("");
  const len = sr.indexOf(".") === -1 ? sr.length : sr.indexOf(".") + 1;
  for (let i = len - 1; i > 0; i--) {
    if (len - 1 - i && (len - 1 - i) % 3 === 0) {
      sr.splice(i, 0, ".");
    }
  }
  return sr.join("");
}

console.log(
  "version 1 result :",
  version1(testStr),
  version1(testStr) === expected
);

function version2(s) {}

function version2(s) {
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

console.log(
  "version 2 result :",
  version2(testStr),
  version2(testStr) === expected
);
