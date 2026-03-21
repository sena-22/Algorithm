import sys
input = sys.stdin.readline

[a,b,c]  = list(map(int,input().split()))

result = 1

while b > 0:
  if b % 2 == 1:#b가 홀수면 
    result = (result * a) % c

  a = (a * a) % c # a를 제곱
  b //= 2 # b를 반으로 나눔

print(result)