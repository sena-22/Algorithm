function solution(s) {
 return s.split(' ').map((word)=> {
    return word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : ''
   }).join(' ')
}