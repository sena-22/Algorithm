import sys
from collections import deque 
input = sys.stdin.readline

M,N = map(int,input().split()) 
box = [list(map(int,input().split())) for _ in range((N))]

q = deque()
# 처음부터 익은 토마토 모두 큐에 넣기(멀티소스 BFS)
for i in range(N):
  for j in range(M):
    if box[i][j] == 1:
      q.append((i,j))

dir = [(1,0),(-1,0),(0,1),(0,-1)]

while q:
  x,y = q.popleft()

  for dx,dy in dir:
    nx = x + dx
    ny = y + dy

    if 0 <= nx < N and 0 <= ny < M:
      if box[nx][ny] == 0:# 안 익었으면
        box[nx][ny] = box[x][y] + 1 # 하루 추가
        q.append((nx,ny))

answer = 0

for row in box:
  for val in row:
    if val == 0: # 안 익은 토마토가 있으면
      print(-1)
      exit() # 
    answer = max(answer,val)
print(answer -1)