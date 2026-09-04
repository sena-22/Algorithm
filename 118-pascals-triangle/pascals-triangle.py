class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        # 정수 numRows가 주어졌을 때, 파스칼의 삼각형 반환
        # 각 숫자 = 바로 위에 있는 두 숫자의 합
        # 이전 줄의 왼쪽, 오른쪽을 이용해서 더하기
        # 양 끝은 항상 1
        if numRows == 1:
            return [[1]]
            
        answer = [[1],[1,1]]

        for i in range(2,numRows):
            row = [1] # 맨 왼쪽은 항상 1 
            pre = answer[i-1] # 이전 열 가져오기 # 1 1

            for j in range(len(pre)-1): # j= 0 
                # pre[0]+pre[1] = 2
                row.append(pre[j]+pre[j+1]) # 이전 줄 값 더하기

            row.append(1) # 제일 오른쪽 1
            answer.append(row)
        return answer
 
