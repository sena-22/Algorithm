import sys
input = sys.stdin.readline

N  = input()
arr = sorted(list(map(int,input().split())))
total = 0
before = 0

# 1 4 10 19 32
for i in arr:
  before += i 
  total += before
print(total)
