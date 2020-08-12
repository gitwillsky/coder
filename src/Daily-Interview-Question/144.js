/**
 * 第 144 题：手写二进制转 Base64
 *
 *
 * @version 2020-8-12
 */

function binaryToBase64(data) {
  if (!data) {
    return "";
  }

  const encodeArray =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let res = "";

  if (data.length % 24 === 8) {
    res += "==";
    data += "0000";
  }
  if (data.length % 24 === 16) {
    res += "=";
    data += "00";
  }

  let s = "";
  for (let i = 0; i < data.length; i += 6) {
    const c = data.slice(i, i + 6);
    const index = Number.parseInt(c, 2);
    s += encodeArray[index];
  }
  return s + res;
}

function str2Binary(s) {
  return s
    .split("")
    .map((c) => c.charCodeAt(0).toString(2).padStart(8, 0))
    .join("");
}

const testStr = "this is a example";
const expected = "dGhpcyBpcyBhIGV4YW1wbGU=";
const result = binaryToBase64(str2Binary(testStr));
console.log("result: ", result, "equal: ", result === expected);
