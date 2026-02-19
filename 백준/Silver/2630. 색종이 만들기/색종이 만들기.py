import sys
input = sys.stdin.readline
N = int(input())
paper=[list(map(int,input().split())) for _ in range(N)]
answer=[0,0] #흰색, 파란색
def divide(x,y,size):
  color=paper[x][y]

  for i in range(x,x+size):
    for j in range(y,y+size):
      if paper[i][j] != color: # 다른 색이면 상하좌우 다시 검색
        half = size // 2
        divide(x,y,half)
        divide(x,y+half,half)
        divide(x+half,y,half)
        divide(x+half,y+half,half)
        return 
      
  answer[color] += 1

divide(0,0,N)

for i in range(2):
  print(answer[i])