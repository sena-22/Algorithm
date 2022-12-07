function solution(numbers) {
    let sorted = numbers.sort((a,b)=>(''+b+a)-(''+a+b)).join('')
    return sorted[0] === '0' ? '0' : sorted;
}

// function solution(numbers) {
//     // [3,30,34,5,9]
//   let _numbers =  [...numbers]
// //   "3430953"
//   let sorted =_numbers.sort((a,b)=>b-a);
//   return sorted.join('')
// }
