def solution(matrix_sizes):
    answer = 0
    #행렬의 곱셈: ab * bc => ac행렬 만들어짐
    
    # p: 5,3 * 3,10 * 10,6
    # => 겹치는 크기를 제외한 배열 => [5,3,10,6]
    
    # 첫 행의 행은 겹치지 않으므로 넣어둠
    p = [matrix_sizes[0][0]]
    
    # 모든 행렬의 열(col)만 추가 
    for r,c in matrix_sizes:
        p.append(c)
        
    # print(p) # [5,3,10,6]
    n = len(p)-1
    INF = float('inf')
    
    # 인덱스 1부터 사용
    dp = [[INF] * (n + 1) for _ in range(n + 1)]
    
    # 자기자신은 0
    for i in range(1,n+1):
        dp[i][i] = 0
   
    for length in range(2,n+1):
        for i in range(1, n-length+2): # i:구간 시작, j:구간 끝
            j = i + length -1 

            # A1*A2*A3
            # 1. k가 1일때 => (A1) * (A2*A3)
            # 2. k가 2일때 => (A1*A2) * (A3)

            for k in range(i,j): # 마지막 곱셈 위치
                
                # dp[i][j] = Ai부터 Aj까지 곱하는 최소 비용
                
                # dp[i][k] : k의 왼쪽 계산 비용
                # dp[k+1][j] : k의 오른쪽 계산 비용
                # p[i-1]*p[k]*p[j] : 마지막 두 개를 곱하는 계산 비용
                
                cost = dp[i][k]+dp[k+1][j]+p[i-1]*p[k]*p[j]
                dp[i][j] = min(dp[i][j],cost)

    # print(dp)
    #     0  1  2  3 
    # 0 [[0, 0, 0, 0], 
    # 1 [0, 0, 150, 270], 
    # 2 [0, 0, 0, 180], 
    # 3 [0, 0, 0, 0]]
    
    return dp[1][n] # A1-An까지의 최소 연산 횟수
