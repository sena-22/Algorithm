import sys
try:
    sys.stdin = open("input.txt", "r")
except:
    pass
input = sys.stdin.readline

n, m = map(int,input().split())
A = list(map(int,input().split()))

# 같은 나머지 인덱스 카운트
C = [0] * m

# 현재까지 누적합을 m으로 나눈 나머지 저장
prefix = 0

for i in A:
    #prefix : “이전 나머지 + 현재 값 → 다시 나눈 나머지”를 계속 저장
    prefix = (prefix + i) % m
    C[prefix] += 1

answer = C[0] # 0-i까지의 구간합 자체가 0인 개수 

for c in C:
    answer += c * (c-1) //2 # 나머지가 같은 인덱스 중 2개씩 뽑는 경우의 수 합산

print(answer)


# 5 3
# 1 2 3 1 2