import sys
input = sys.stdin.readline

N,r,c = map(int,input().split())
cnt = 0
def rec(n,r,c):
  global cnt

  # 재귀 종료 조건
  if n == 0:
    return 
  
  # n=3 => 전체크기 8*8 절반 4*4
  half = 2 ** (n-1) # 현재 정사각형의 절반 길이
  area = half * half # 사분면 하나의 칸 개수
  # 1사분면
  if r < half and c < half:
    rec(n-1,r,c)

  # 2사분면
  elif r < half and c >= half:
    cnt += area # 1사분면 칸 개수만큼 더함
    rec(n-1,r,c-half) 

  # 3사분면
  elif r >= half and c < half:
    cnt += 2 * area 
    # 1,2사분면 개수만큼 더하기
    rec(n-1,r-half,c)

  # 4사분면
  else:
    cnt += 3 * area
    rec(n-1,r-half,c-half)

rec(N,r,c)
print(cnt)

    
#           
#           - 
#   1사분면  -  2사분면
#           -
# ---------------------- 
#   3사분면  -  4사분면
#           -
