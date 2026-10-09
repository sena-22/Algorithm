class Solution:
    def setZeroes(self, matrix: list[list[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        # 0이 있는 행,열을 다 0으로 변환
        zero_rows = []
        zero_cols = []


        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] == 0:
                    zero_rows.append(i)
                    zero_cols.append(j)
        
        for i in zero_rows:
            for j in range(len(matrix[0])):
                matrix[i][j] = 0
                
        for i in range(len(matrix)):
            for j in zero_cols:
                matrix[i][j] = 0