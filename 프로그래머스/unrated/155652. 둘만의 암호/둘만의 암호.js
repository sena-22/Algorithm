function solution(strings, skip, index) {
    let result = ''
    
    const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');  //세미클론 누락 시 오류
    // console.log(alphabet);
  
    [...skip].forEach(val=>alphabet.delete(val))
    
    // console.log(alphabet)
    
    const arr= [...alphabet]
    
    // console.log(arr)
    
    for (const s of strings) {
        const idx = arr.indexOf(s) + index;
        result += arr[idx % arr.length];
    }
        
    return result
}
