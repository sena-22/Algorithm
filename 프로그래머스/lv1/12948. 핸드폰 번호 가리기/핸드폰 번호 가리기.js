function solution(phone_number) {
    return phone_number.split('').map((el,idx)=> (
        idx<phone_number.length-4 ? el = '*' : el
    )).join('')
}