const fs = require("fs");

//백준 제출 할 때 주석 제거
const readFileSyncAddress = "/dev/stdin";


const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(/\s/);

const k = parseInt(input[1]);
const arr = input.slice(2).map(Number);

// solution
function solution(k, arr) {
  let cnt = 0;
  for (let i = 1; i < arr.length; i++) {
    let loc = i - 1;
    let newItem = arr[i];

    while (0 <= loc && newItem < arr[loc]) {
      arr[loc + 1] = arr[loc];
      loc--;
      cnt++;
      if (cnt === k) {
        return arr.join(" ");
      }
    }

    if (loc + 1 !== i) {
      arr[loc + 1] = newItem;
      cnt++;
    }
    if (cnt === k) {
      return arr.join(" ");
    }
  }

  return -1;
}

// 제출
const answer = solution(k, arr);
console.log(answer);

