def solution(beginning, target):
    n = len(beginning)
    m = len(beginning[0])
    INF = 10**9
    answer = INF

    for mask in range(1 << n):           
        board = [row[:] for row in beginning]
        cnt = 0
        print(mask)
        for i in range(n):
            if mask & (1 << i):
                cnt += 1
                for j in range(m):
                    board[i][j] ^= 1

        for j in range(m):
            if board[0][j] != target[0][j]:
                cnt += 1
                for i in range(n):
                    board[i][j] ^= 1

        if board == target:
            answer = min(answer, cnt)

    return -1 if answer == INF else answer