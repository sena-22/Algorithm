class Solution:
    def reverseBits(self, n: int) -> int:
    # 비트를 하나씩 꺼내서 뒤집기
        answer = 0

        for i in range(32):
            answer = (answer << 1) | (n&1)
            n = n >> 1

        return answer 

    

