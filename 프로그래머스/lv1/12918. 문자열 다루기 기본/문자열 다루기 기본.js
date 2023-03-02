function solution(s) {
    
    if ((s.length !== 4) && (s.length !== 6)) {
        return false
    }

    for (let i=0; i < s.length; i++) {
        
        let num = parseInt(s[i]);
        if(Number.isNaN(num)) return false
    }
    
    return true
}