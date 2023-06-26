function solution(want, number, discount) {
    let answer = 0; // 원하는 제품을 모두 할인받을 수 있는 회원등록 날짜의 총 일수

    let list = new Map()
    want.forEach((el)=>list.set(el,0))
    number.forEach((el,idx)=>list.set(want[idx],el))

    let startIdx = 0
    let endIdx = 9

    while(endIdx < discount.length) {
        let cur_list = new Map(list.entries())
        let discount_list = discount.slice(startIdx,endIdx+1) 
        
            discount_list.forEach((item)=> {
                if(cur_list .has(item)) {
                   if(cur_list .get(item) === 1 ) {
                       cur_list .delete(item)
                   } else {
                      cur_list .set(item, cur_list .get(item)-1)
                   }
                } 
            })
        if(cur_list .size === 0) answer++
        endIdx++
        startIdx++       
    }

    return answer;
}