import sys
input = sys.stdin.readline

N, M = map(int,input().split())
graph = [[] for _ in range(N+1)]
visited = [False] * (N+1)
connected = 0

for _ in range(M):
  a,b = map(int,input().split())
  graph[a].append(b)
  graph[b].append(a)
def dfs(node):
  stack = [node]
  visited[node] = True

  while stack:
    node = stack.pop()
    for next_node in graph[node]:
      if not visited[next_node]:
        visited[next_node] = True
        stack.append(next_node)

for i in range(1,N+1):
  if not visited[i]:
    dfs(i)
    connected += 1

print(connected)

