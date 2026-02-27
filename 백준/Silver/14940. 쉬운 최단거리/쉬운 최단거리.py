import sys
from collections import deque
input = sys.stdin.readline

n,m = map(int,input().split())
graph = [list(map(int, input().split())) for _ in range(n)]

end = (0,0)

for i, row in enumerate(graph):
  if 2 in row:
    end = (i,row.index(2))
    break

# 누적 거리 저장
dist = [[-1]*m for _ in range(n)]
dir = [(1,0),(-1,0),(0,1),(0,-1)]

dist[end[0]][end[1]] = 0 # 시작점 거리

q = deque()
q.append(end)

while q:
  x,y = q.popleft()

  for dx,dy in dir:
    nx = x + dx
    ny = y + dy

    if 0 <= nx < n and 0 <= ny < m:
      # 갈 수 있고 & 가지 않은 땅
      if graph[nx][ny] == 1 and dist[nx][ny] == -1:
        dist[nx][ny] = dist[x][y] + 1
        q.append((nx,ny))

for i in range(n):
  for j in range(m):
    if graph[i][j] == 0: # 원래 갈 수 없는 땅
      print(0, end = " ")
    else: 
      print(dist[i][j], end =" ") 
  print()
# 0: 갈 수 없는 땅, 1: 갈 수 있는 땅, 2: 목표지점
# 각 지점에서 목표지점까지의 거리 출력 
# => 목표지점에서 다른 지점까지 거리 계산
