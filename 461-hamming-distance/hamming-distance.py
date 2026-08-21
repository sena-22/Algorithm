class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        # 두 정수의 Hamming distance(해밍 거리)는 서로 대응하는 비트의 값이 다른 위치의 개수이다.
        # 두 정수 x와 y가 주어졌을 때, 두 수 사이의 Hamming distance를 반환하라.

        # 2진수로 변환 => 가장 긴 수를 기준으로 자릿수 맞추기(앞에 0 채우기) => 다른 비트 개수 리턴

        bi_x = bin(x)[2:]
        bi_y = bin(y)[2:]

        max_len = max(len(bin(x)),len(bin(y)))

        # max_len 길이만큼 앞에 0 채우기
        bi_x = bi_x.zfill(max_len) 
        bi_y = bi_y.zfill(max_len) 

        ham_dis = 0

        for a,b in zip(bi_x,bi_y):
            if a != b:
                ham_dis += 1
                
        return ham_dis

 