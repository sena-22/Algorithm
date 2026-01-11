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
    t = left # n번째 작업이 끝나는 시간(left==right)
    
    # t-1초까지 처리된 작업 수
    done = processed(t-1,cores)
    
    # t초에 끝나는 코어를 앞에서부터 세다가 => 작업 개수가 n이 될 때의 코어를 찾음
    for i, c in enumerate(cores):
        if t % c == 0: # t초에 작업을 끝낸 코어
            done += 1 
            if done == n:
                return i+1 # 1번부터 시작(인덱스)