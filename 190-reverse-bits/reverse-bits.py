class Solution:
    def reverseBits(self, n: int) -> int:
    # 비트를 하나씩 꺼내서 뒤집기
        answer = 0

        for _ in range(32):
            bit = n & 1 #마지막 비트 꺼냄
            # answer를 왼쪽으로 한 칸 이동
            # | bit : or연산으로 마지막 자리를 bit로 만들어줌
            answer = (answer << 1) | bit

            # n을 오른쪽으로 한 칸 옮김(마지막 비트가 사라짐)
            n = n >> 1

        return answer 

    

# n & 1 : n의 가장 오른쪽 비트만 확인
# >> 1 : 오른쪽으로 한 칸 이동
# << 1 : 왼쪽으로 한 칸 이동
# | : 비트 or 연산자(둘 중 하나만 1이면 1)


#   1010
# | 0001(마지막 비트)
# --------
#   1011
    