function solution(price, money, count) {
    let totalPrice = 0
  
    for(let i=1; i<=count; i++) {
        totalPrice += (i * price)
    }
    
    let lackMoney = totalPrice-money
    
    return lackMoney > 0 ? lackMoney : 0
}