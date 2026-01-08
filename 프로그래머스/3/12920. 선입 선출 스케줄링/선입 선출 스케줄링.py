# 시간을 인자로 받아서 몇 개의 작업이 코어에 할당되었는지 계산
def processed(t,cores):
    # 각 코어당 처리한 작업 수의 합 + 0초에 할당된 작업 수(=코어 수)
    return sum(t//c for c in cores) + len(cores)

def solution(n, cores):
    left = 0
    right = max(cores) * n # 가장 느린 코어가 모든 작업을 처리하는 시간
    # 이분탐색으로 최적 시간 구하기 
    while left < right:
        mid = (left+right) // 2        
    
        # 처리한 작업 수가 처리해야 할 작업 수보다 많으면 왼쪽으로 이동  
        if processed(mid,cores) >= n:
            right = mid
        else:
            left = mid +1
    print(left,right,mid)
    t = left # n번째 작업이 끝나는 최소 시간
    
    # t-1초까지 처리된 작업 수
    done = processed(t-1,cores)
    
    # t초에 끝나는 코어 중 n번째 찾기
    for i, c in enumerate(cores):
        if t % c == 0:
            done += 1
            if done == n:
                return i+1