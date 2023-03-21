function solution(array, commands) {
    
    return  commands.map((command)=>{
        
    let newArr = array.slice(command[0]-1,command[1])
    
        return newArr.sort((a,b)=>a-b)[command[2]-1]
        
     })
}



//배열 자르기
//배열 정렬하기
//배열의 n번째 숫자 리턴