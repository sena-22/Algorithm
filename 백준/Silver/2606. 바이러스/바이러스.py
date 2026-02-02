import sys
from collections import deque
input = sys.stdin.readline

com = int(input())
linked = int(input())
graph = [[] for _ in range(com+1)]

for _ in range(linked):
  a,b = map(int,input().split())
  graph[a].append(b)
  graph[b].append(a)

visited = [False] * (com+1)
def bfs(n):
  q = deque([n])
  visited[n] = True
  cnt = 0

  while q:
    cur_node = q.popleft()
    for next_node in graph[cur_node]:
      if not visited[next_node]:
        visited[next_node] = True
        q.append(next_node)
        cnt += 1 # 감염
  return cnt

print(bfs(1))


