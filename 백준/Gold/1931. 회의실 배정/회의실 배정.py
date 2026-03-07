import sys
input = sys.stdin.readline

N = int(input())
cnt = 0
end_time = 0
times = []

for _ in range(N):
  s,e = map(int,(input().split()))
  times.append((s,e))

# 끝나는 시간 기준 오름차순 정렬
times.sort(key=lambda x: (x[1],x[0]))

for s,e in times:
  if end_time <= s:
    cnt+=1 
    end_time = e
print(cnt)