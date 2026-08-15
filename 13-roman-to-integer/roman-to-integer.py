class Solution:
    def romanToInt(self, s: str) -> int:
    # 현재 숫자가 다음 숫자보다 작으면 빼고, 그렇지 않으면 더하기
        roman = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000}
   
        total = 0 
        for i in range(len(s)):
            # i + 1 < len(s) => 다음 문자가 있는지 확인
            if i + 1 < len(s) and roman[s[i]] < roman[s[i+1]]:
                total -= roman[s[i]]
            else:
                total += roman[s[i]]
        return total
            
