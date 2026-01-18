import sys
input = sys.stdin.readline

n = int(input())

S = set()

for _ in range(n):
  line = input().split()
  cmd = line[0]
  if len(line) == 2:
    x  = int(line[1])

  if cmd == 'add':
    S.add(x)
  elif cmd == 'remove':
    # remove는 원소가 없을 때 에러 발생
    S.discard(x) 
  elif cmd == 'check':
    if x in S:
      print(1)
    else:
      print(0)
  elif cmd == 'toggle':
    if x in S:
      S.remove(x)
    else:
      S.add(x)
  elif cmd == 'all':
    S = set(range(1,21))
  elif cmd == 'empty':
    # S = {} 쓰면 새로운 객체로 재할당됨 => X
    S.clear()

    

