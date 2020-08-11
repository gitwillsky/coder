/**
 * 第 152 题：实现一个 normalize 函数，能将输入的特定的字符串转化为特定的结构化数据
 * 字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
 * 示例一: 'abc' --> {value: 'abc'}
 * 示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}
 *
 * @version 2020-8-11
 */

const CHILDREN_START = Symbol();
const CHILDREN_END = Symbol();
const VALUE = Symbol();
const EOF = Symbol();

function scanner(s) {
  let pos = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      let token = {
        value: "",
        type: EOF,
        done: true,
      };
      for (; pos < s.length; ) {
        let c = s.charAt(pos++);
        switch (c) {
          case "'":
            continue;
          case "[":
            token.value = "[";
            token.type = CHILDREN_START;
            token.done = false;
            return token;
          case "]":
            token.value = "]";
            token.type = CHILDREN_END;
            token.done = false;
            return token;
          default:
            token.type = VALUE;
            token.done = false;
            token.value += c;
            while (pos < s.length) {
              c = s.charAt(pos++);
              if (["'", "[", "]"].includes(c)) {
                pos--;
                break;
              }
              token.value += c;
            }
            return token;
        }
      }
      return token;
    },
  };
}

function normalize(str) {
  const scan = scanner(str);
  let obj = {};
  let temp = obj;
  for (let v = scan.next(); !v.done; v = scan.next()) {
    switch (v.type) {
      case CHILDREN_START:
        temp.children = {};
        temp = temp.children;
        break;
      case VALUE:
        temp.value = v.value;
        break;
    }
  }
  if (!obj.value) {
    obj = obj.children;
  }
  return obj;
}

console.log(JSON.stringify(normalize("[abc[bcd[def]]]"))); // => {"value":"abc","children":{"value":"bcd","children":{"value":"def"}}}
console.log(JSON.stringify(normalize("abc"))); // => {"value":"abc"}
