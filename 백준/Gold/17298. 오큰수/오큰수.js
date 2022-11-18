const fs = require("fs");

//백준 제출 할 때 주석 제거
const readFileSyncAddress = "/dev/stdin";

const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

[n, ...numbers] = input;
n = Number(n);
numbers = numbers[0].split(" ").map((i) => Number(i));

// solution
function solution(n, numbers) {
  const stack = [];
  let answer = [];

  for (let i = 0; i < n; i++) {
    //스택이 비지 않고, 현재 수열이 top에 해당하는 수열보다 클 경우
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      //정답 리스트에 오큰수를 현재 수열로 저장하기
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  //반복문을 다 돌았는데 스택이 비지 않았다면 빌 때까지
  while (stack.length) {
    //스택에 쌓인 인덱스에 -1 넣기
    answer[stack.pop()] = -1;
  }
  return answer.join(" ");
}

// 제출
const answer = solution(n, numbers);
console.log(answer);
