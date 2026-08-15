class Solution:
    def isPowerOfThree(self, n: int) -> bool:
    # 정수 n이 주어졌을 때, n이 3의 거듭제곱이면 true를 반환하고, 그렇지 않으면 false를 반환하라.
        if n <= 0:
            return False

        while n > 1:
            if n % 3 != 0: #나머지가 있으면 거듭제곱 아님
                return False
            n //= 3

        return True