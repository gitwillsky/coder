/**
 * 第 138 题：反转链表，每 k 个节点反转一次，不足 k 就保持原有顺序
 * 例如：
 *  1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8, k= 3
 *  3-> 2 -> 1 -> 6 -> 5 -> 4 -> 7 ->8
 * @version 2020-8-13 09:48:46 1.0
 */

class LinkedList {
  constructor(size) {
    this.linkedList = {};
    let pos = this.linkedList;
    for (let i = 0; i < size; i++) {
      pos.next = {
        value: Math.floor(Math.random() * 10),
      };
      pos = pos.next;
    }
  }

  print() {
    let sa = [];
    for (let l = this.linkedList.next; l; l = l.next) {
      sa.push(l.value);
    }
    console.log(sa.join(" -> "));
  }

  getLinkedList() {
    return this.linkedList.next;
  }
}

const l = new LinkedList(10);
l.print();
revert(l.getLinkedList());
l.print();

function revert(linkedList) {
  const newLinkedList = {};
  let oldHead = linkedList;
  while (oldHead) {
    let oldHeadNext = oldHead.next;
    oldHead.next = newLinkedList.next;
    newLinkedList.next = oldHead;
    oldHead = oldHeadNext;
  }
  return newLinkedList.next;
}

// LinkedList.prototype.revert = function (k) {
//   let startNode = this.linkedList.next;
//   let endNode = startNode;
//   let step = 1;

//   while (endNode && step < k) {
//     endNode = endNode.next;
//     step++;
//   }

//   if (step === k) {
//     //revert
//     let tempNode;
//     for (let l = startNode; l; l = l.next) {
//       tempNode = l.next.next;
//       l.next = l;
//     }
//   }
// };
