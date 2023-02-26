function solution(n) {
  const arr = [];
  n = (n + "").split("").map((el) => arr.unshift(Number(el)));
  return arr;
}