function solution(n) {
  return (n + "").split("").reverse().map((el) => Number(el));
}