import sys
input = sys.stdin.readline

N = int(input())
X_list =list(map(int,input().split()))
sorted_list = sorted(set(X_list)) # 중복 제거

#  0    1   2  3 => 인덱스 == 나보다 작은 개수
# [-10, -9, 2, 4]

# 작은 값만 저장
X__list = {value: idx for idx, value in enumerate(sorted_list)}

for x in X_list:
  print(X__list[x],end=' ')