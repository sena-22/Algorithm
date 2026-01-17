def solution(n, tops):
    answer = 0
    
    MOD = 10007
    
    # 삼각형 공유 O
    a = [0 for _ in range(n)]
    # 삼각형 공유 X
    b = [0 for _ in range(n)]
    
    a[0] = 1
    b[0] = 3 if tops[0] else 2
    
    for i in range(1,n):
        if tops[i]:
            a[i] = a[i-1] + b[i-1]
            b[i] = a[i-1] * 2 + b[i-1] * 3
            
        else:
            a[i] = a[i-1] + b[i-1]
            b[i] = a[i-1] + b[i-1] * 2
            
        a[i] %= MOD
        b[i] %= MOD
    
    
    return (a[-1]+b[-1]) % MOD