# 듣보잡
import sys
input = sys.stdin.readline

N,M = map(int,input().split())

# list 사용 시 시간초과
n_set = set()
m_set = set()

# .rstrip() : 개행 제거
# 2번째줄~N : 듣도 못한 사람
for _ in range(N):
  n_set.add(input().rstrip())

# N+2줄~ : 보도 못한 사람
for _ in range(M):
  m_set.add(input().rstrip())

# 교집합 구하기(&)
nm_list = list(n_set & m_set)

# 듣도 보도 못한 사람 수 + 명단(사전순)
nm_list.sort()
print(len(nm_list))

for nm in nm_list:
  print(nm)