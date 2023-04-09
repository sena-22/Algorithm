function solution(number, limit, power) {
    const A  = []
    let sum = 0
    
    //약수개수를 구하는 함수
    const getDivisors = (num) => {
    const divisors = [];
    for(let i = 1 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0) {
            divisors.push(i);
            if(num / i != i) divisors.push(num / i);
        }
    }
    return divisors.length
    }
    

    
    //1~number 순회하면서 약수배열에 약수개수 push
    for(let i=1; i<=number;i++) {
        let divCount = getDivisors(i)
        A.push(divCount)
    }
        console.log(A)
    
    A.forEach((v)=>(
        v > limit ? sum+=power : sum+=v
    ))
    
    return sum
}