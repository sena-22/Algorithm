function solution(orders, course) {
    
    const orderList = []
    const answer =[]
    
    const getCombinations = (arr,num) => {
        const result = []
        if(num===1) return arr.map((el)=>[el])

        arr.forEach((fixed,idx,origin) => {
            const rest = origin.slice(idx+1)
            const combinations = getCombinations(rest,num-1)
            const attached = combinations.map((el)=>[fixed,...el])
            result.push(...attached)
        })
        return result 
    }
 
    for(const order of orders) {
        for(const course_leng of course) {
            if(order.length < course_leng) {
                break
            }
    
           const combinations =  getCombinations(order.split('').sort(),course_leng)
           combinations.forEach((combination)=> {
               const combiStr = combination.join('')
               orderList[combiStr] = orderList[combiStr] ? orderList[combiStr] +1 : 1
           })
        }
    }
    
    let orderListArr = Object.entries(orderList)
 
    course.forEach((c)=> {
        const candidates = orderListArr.filter(e=>e[0].length === c && e[1]>1)
        if(candidates.length>0) {
            let max = Math.max(...candidates.map(e=>e[1]))
            candidates.forEach((e)=> {
            if(e[1]===max) answer.push(e[0])
            })
        }
    })

    
 return answer.sort()
  
}