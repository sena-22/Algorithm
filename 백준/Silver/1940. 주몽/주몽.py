import sys
try:
    sys.stdin = open("input.txt", "r")
except:
    pass
input = sys.stdin.readline

N = int(input()) # 개수
M = int(input()) # 필요한 수
A = list(map(int,input().split())) 

A.sort() 
cnt = 0 
i = 0
j = N-1

while i < j:
    sum = A[i] + A[j]
    if sum == M:
        cnt += 1
        i += 1
        j -= 1
    elif sum < M: # 더 큰수로 변경
        i += 1
    else: # 더 작은 수로 변경
        j -= 1

print(cnt)