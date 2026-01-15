def solution(beginning, target):
    n = len(beginning)
    m = len(beginning[0])
    INF = float('inf')
    answer = INF
    # 행이 n개일때 선택/비선택의 경우는 2**n
    # 행이 3일때 8가지 경우 
    # 0이 안뒤집음, 1이 뒤집음
    # 000 / 001 / 010 / 011 / 100 / 101/ 110 / 111
    for mask in range(2**n):    
        # 값만 복사
        board = [row[:] for row in beginning]
        cnt = 0

        for i in range(n):
            # mask = 5일때 (101₂)
            # i = 0
            # &(and)는 둘다 1일때만 1
            # 1<<0(1을 왼쪽으로 0번 이동 )
            # mask = 00101
            # 1<<i = 00001(i번째 비트만 1인 값)
            # &연산 = 00001 => True
            if mask & (1 << i): 
                cnt += 1 # 뒤집기 횟수 추가
                for j in range(m): # 
                    # ^= 1 : 0 → 1, 1 → 0 (무조건 뒤집기)
                    # i행 모든 값 반대로 바꾸기
                    board[i][j] ^= 1

        # [[1, 1, 1], 행이 다르면 열 뒤집기
        #  [0, 0, 0], 
        #  [0, 0, 0]]
        # [[1, 0, 1], 
        #  [0, 1, 0], 
        #  [0, 1, 0]]
        for j in range(m): # 0번 열부터 m-1열까지
            if board[0][j] != target[0][j]: # 0번 행이 다르면
                cnt += 1
                for i in range(n):
                    board[i][j] ^= 1

        if board == target:
            answer = min(answer, cnt)

    return -1 if answer == INF else answer