def solution(matrix_sizes):
    answer = 0
    #행렬의 곱셈: ab * bc => ac행렬 만들어짐
    
    # 5,3 * 3,10 * 10,6
    # => 겹치는 크기를 제외한 배열 => [5,3,10,6]
    
    # 차원배열p : 첫 행의 열은 겹치지 않으므로 넣어둠
    p = [matrix_sizes[0][0]]
    
    # 모든 행렬의 열(col)만 추가 
    for r,c in matrix_sizes:
        p.append(c)
        
    # print(p) # [5,3,10,6]
    n = len(p)-1
    INF = float('inf')
    
    # dp[i][j] = Ai부터 Aj까지 곱하는 최소 비용
    # dp[i][j] = 왼쪽 비용 + 오른쪽 비용 + 마지막 곱 비용
    # 인덱스 1부터 사용
    dp = [[0]*(n+1) for _ in range(n+1)]
    
    for length in range(2,n+1):
        for i in range(1, n-length+2):
            j = i + length -1
            dp[i][j] = INF
            
            for k in range(i,j):
                cost = dp[i][k]+dp[k+1][j]+p[i-1]*p[k]*p[j]
                dp[i][j] = min(dp[i][j],cost)
    
    
    return dp[1][n]
    
    
    

    
    return answer