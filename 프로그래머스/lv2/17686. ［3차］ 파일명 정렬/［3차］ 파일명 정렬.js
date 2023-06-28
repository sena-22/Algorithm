function solution(files) {
    // head 부분 사전 순 정렬
        // 대소문자 구분 x
    // 숫자 순 정렬
        // 0 무시
    // 원래 순서 유지
    
    
    // head + number + tail로 구분 [foo, 9, .txt]
    // index[0] 비교
    // if (a[0]===b[0])
    // index[1] 비교
    let re = /([0-9]+)/;
    
    const divFiles = files.map((file)=> file.split(re))
    
    const sortedFiles =  divFiles.sort((a,b)=> {
        const headA = a[0].toUpperCase()
        const headB = b[0].toUpperCase()
        
        const numA = +a[1]
        const numB = +b[1]
        if(headA > headB) {
            return 1
        } else if(headA < headB) {
            return -1
        } else if(numA - numB > 0) {
            return 1
        } else if(numA - numB < 0){
            return -1
        } else {
            return 1
        }
        
    })
    
    return sortedFiles.map((file)=> file.join(''))
    
}