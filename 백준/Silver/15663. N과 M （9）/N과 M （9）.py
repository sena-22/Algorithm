import sys
input = sys.stdin.readline
from itertools import permutations 

N, M = map(int,input().split())
perms = sorted(set(permutations(list(map(int,input().split())),M)))

for perm in perms:
  print(*perm) # 튜플 형태를 숫자로 수정