import math

class Solution:
    def countPrimes(self, n: int) -> int:
        if n <= 1:
            return 0

        prime = [True] * n
        prime[0] = prime[1] = False

        # n의 제곱근까지 계산
        for i in range(2, int(math.sqrt(n)) + 1):
            if prime[i] == True: # 소수인 경우 나머지 배수 False 처리
                j = 2
                while i * j < n:
                    prime[i*j] = False
                    j += 1

        return sum(prime)