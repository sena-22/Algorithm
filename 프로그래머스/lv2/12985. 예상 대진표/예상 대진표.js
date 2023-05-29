function solution(n,a,b) {
    let count = 1
    while(a>2 ||b>2) {
        
    if(a%2 && a+1 ===b ) return count 
    if(b%2 && b+1 ===a ) return count 
        
        
        count++
        
        if(a%2) a++
        if(b%2) b++
        
        a = a/2
        b = b/2
    }
    return count
}