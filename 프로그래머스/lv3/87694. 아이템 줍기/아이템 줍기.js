function solution(rectangle, characterX, characterY, itemX, itemY) {
    let answer = 0

        const map = Array.from({length:102},()=>Array.from({length:102},()=>-1))
    
    rectangle.forEach((r)=>{
        const [x1,y1,x2,y2] = r.map((el)=>el*2)
        
        for(let i=x1; i<=x2; i++) { //2 14 
            for(let j=y1; j<=y2; j++) { // 2 8
                if(x1<i && i<x2 && y1<j && j<y2) { 
                    map[i][j] = 0
                } else if(map[i][j] != 0) { 
                    map[i][j] = 1 
                } 
            }
        }
    })

    const dx = [-1,1,0,0]
    const dy = [0,0,-1,1]
    
    let q = []
    q.push([characterX*2, characterY*2])
        const visited = Array.from({length:102},()=>Array.from({length:102},()=>1))
     visited[characterX*2][characterY*2] = 0 // 시작 지점 0으로 초기화
    
    while(q.length) {
        let [x,y] = q.shift()
        if((x === (itemX * 2)) && (y === (itemY * 2))) {   
            answer = parseInt(visited[x][y] / 2)  // 아이템 획득
            break 
        }
        
        // 상하좌우 탐색
        for(let i=0;i<4;i++) {
            let nx = x + dx[i] // 2 + (-1) => 1
            let ny = y + dy[i] // 6 + 0 => 6

            if(map[nx][ny] === 1 && visited[nx][ny] === 1) { // 테두리이고 방문하지 않았으면
                q.push([nx,ny]) // 큐에 추가
                visited[nx][ny] = visited[x][y]+1
            }
        }
    }
    return answer
}