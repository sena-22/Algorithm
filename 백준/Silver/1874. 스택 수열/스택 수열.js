const fs = require("fs");

//백준 제출 할 때 주석 제거
const readFileSyncAddress = "/dev/stdin";

const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const [n, ...nums] = input;
const numbers = nums.map((i) => Number(i));

//solution 1
// function solution(n, numbers) {
//   const stack = [];
//   let answer = "";
//   let count = 1;

//   for (let i = 0; i < n; i++) {
//     const number = numbers.shift();

//     while (count <= number) {
//       stack.push(count++);
//       answer += "+ ";
//     }

//     const popedItem = stack.pop();
//     if (popedItem !== number) {
//       return "NO";
//     }

//     answer += "- ";
//   }
//   return answer.split(" ").join("\n");
// }

//solution 2
function solution(n, numbers) {
  const stack = [];
  let count = 1;
  let answer = "";

  for (let i = 0; i < n; i++) {
    const number = numbers[i]; //현재 수열 값
    if (number >= count) {
      while (number >= count) {
        stack.push(count++);
        answer += "+ ";
      }
      stack.pop();
      answer += "- ";
    } else {
      const popedItem = stack.pop();
      if (popedItem > number) {
        return "NO";
      } else {
        answer += "- ";
      }
    }
  }
  return answer.split(" ").join("\n");
}
//제출
const answer = solution(n, numbers);
console.log(answer);
