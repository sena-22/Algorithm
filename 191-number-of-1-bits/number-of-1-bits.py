class Solution:
    def hammingWeight(self, n: int) -> int:
        # 양의 정수 n이 주어졌을 때, 그 수를 이진수로 나타냈을 때 1(set bit)이 몇 개인지 반환하는 함수를 작성하시오. 
        # 이 값을 해밍 가중치(Hamming weight)라고도 합니다.

        return   bin(n)[2:].count('1') # 'ob' 제외. 