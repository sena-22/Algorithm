const fs = require("fs");

//백준 제출 할 때 주석 제거
const readFileSyncAddress = "/dev/stdin";

//VSC 테스트 시 주석 제거
// const readFileSyncAddress = "예제.txt";

const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [n] = input;

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 큐 클래스
class Queue {
  constructor() {
    this.head = null; // 제일 앞 노드
    this.rear = null; // 제일 뒤 노드
    this.length = 0; // 노드의 길이
  }

  enqueue(data) {
    // 노드 추가.
    const node = new Node(data); // data를 가진 node를 만들어준다.
    if (!this.head) {
      // 헤드가 없을 경우 head를 해당 노드로
      this.head = node;
    } else {
      this.rear.next = node; // 아닐 경우 마지막의 다음 노드로
    }
    this.rear = node; // 마지막을 해당 노드로 한다.
    this.length++;
  }

  dequeue() {
    // 노드 삭제.
    if (!this.head) {
      // 헤드가 없으면 한 개도 없는 것이므로 false를 반환.
      return false;
    }
    const data = this.head.data; // head를 head의 다음 것으로 바꿔주고 뺀 data를 return
    this.head = this.head.next;
    this.length--;

    return data;
  }
  // head를 반환하는 함수
  front() {
    // head가 있을 경우 head의 data를 반환.
    return this.head && this.head.data;
  }
  //큐의 모든 원소를 반환하는 함수
  getQueue() {
    if (!this.head) return false;
    let node = this.head;
    const array = [];
    while (node) {
      // node가 없을 때까지 array에 추가한 후 반환해준다.
      array.push(node.data);
      node = node.next;
    }
    return array;
  }
}

const queue = new Queue();

function solution(n) {
  for (let i = 1; i < n + 1; i++) {
    queue.enqueue(i); //큐에 카드 저장
  }

  //카드가 한 장 남을 때까지
  while (queue.length > 1) {
    queue.dequeue(); //맨 위의 카드를 버림
    queue.enqueue(queue.dequeue()); //맨 위의 카드를 가장 아래 카드 밑으로 이동
  }
  let answer = queue.getQueue();
  return answer[0]; //마지막으로 남은 카드 리턴
}

// //제출
const answer = solution(n);
console.log(answer);
