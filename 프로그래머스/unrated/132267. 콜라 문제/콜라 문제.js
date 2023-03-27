function solution(a, b, n) {
    let result = 0 
    while(n>=a) {
        let give = parseInt(n/a)*a
        let receive = parseInt(n/a)*b
        let rest = n - give
        n =receive + rest 
        result += receive
    }
    return result
}