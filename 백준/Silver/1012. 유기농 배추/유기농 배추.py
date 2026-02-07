import sys
input = sys.stdin.readline
from collections import deque

# 최소로 필요한 배추
T = int(input())

for _ in range(T):
  M,N,K = map(int,input().split())

  field = [[0]*M for _ in range(N)]

  for _ in range(K):
    j,i = map(int,input().split())
    field[i][j] = 1

  worm = 0
  visited = [[False]*M for _ in range(N)]
  direction = [(0,1),(1,0),(0,-1),(-1,0)]
  def BFS(i,j):
    q = deque()
    q.append((i,j))
    visited[i][j] = True

    while q:
      ci,cj = q.popleft()
      for di,dj in direction:
        ni = ci + di
        nj = cj + dj

        if 0<=ni<N and 0<=nj<M:
          if field[ni][nj] == 1 and not visited[ni][nj]:
            visited[ni][nj] = True
            q.append((ni,nj))      

  for i in range(N):
    for j in range(M):
      if not visited[i][j] and field[i][j] == 1:
        BFS(i,j)
        worm += 1
  
  print(worm)