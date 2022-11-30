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

const [n, ...numbers] = input;

function solution(arr) {
  let swapped;
  for (let i = 0; i < arr.length; i++) {
    swapped = false; // 바깥 반복을 돌 때마다 false로 초기화
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        //뒤의 요소가 앞의 요소보다 작으면
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //swap
        swapped = true; //swap이 한 번이라도 일어났다면 true가 된다.
      }
    }
    if (!swapped) return arr;
  }
  return arr; //모든 정렬이 끝난 배열 반환
}
//제출
const answer = solution(numbers);
console.log(answer.join("\n"));
