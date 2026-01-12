import sys
try:
    sys.stdin = open("input.txt", "r")
except:
    pass
input = sys.stdin.readline

N = int(input())
A = list(map(int,input().split()))

A.sort()
good_cnt = 0

for k in range(N):
    target = A[k]
    i,j = 0, N-1

    while i < j:
        sum = A[i] + A[j]
        if sum == target:
            if i != k and j != k: # 자기자신은 제외  
                good_cnt += 1
                break
            elif i == k:
                i += 1
            elif j == k:
                j -= 1 
        elif sum < target:
            i += 1
        else: 
            j -= 1

print(good_cnt)        