from collections import deque

def solution(rectangle, characterX, characterY, itemX, itemY):
    answer = 0
    
    MAX = 102  # 50*2+2
    map = [[-1] * MAX for _ in range(MAX)]
    
    for r in rectangle:
        # 대각선으로 맞닿은 사각형에서 이동 못하게 두 배로 늘림
        x1,y1,x2,y2 = [i *2 for i in r] 
               
        for i in range(x1,x2+1):
            for j in range(y1,y2+1):
                # 내부 0으로 채우기
                if x1<i<x2 and y1<j<y2:
                    map[i][j] = 0
                # 내부X + 0이 아님 => 테두리
                elif map[i][j] != 0:
                    map[i][j] = 1
        # print(map)
                    
    dx,dy = [-1,1,0,0], [0,0,-1,1]
        
    q = deque()
    # 시작 위치 지정
    q.append((characterX*2,characterY*2))
    
    visited = [[-1] * MAX for _ in range(MAX)]
    visited[characterX*2][characterY*2] = 0 # 시작점 거리
    
    while q:
        x,y = q.popleft()
        
        # 도착
        if x == itemX*2 and y == itemY*2:
            return visited[x][y] // 2
        
        # 상하좌우 탐색
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            
            if 0 <= nx < MAX and 0 <= ny < MAX: # 맵 내부
                # 테두리 + 미방문
                if map[nx][ny] == 1 and visited[nx][ny]== -1:
                    visited[nx][ny] = visited[x][y] + 1 # 길이 저장
                    q.append((nx,ny))
