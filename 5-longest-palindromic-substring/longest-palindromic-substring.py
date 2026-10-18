class Solution:
    def longestPalindrome(self, s: str) -> str:
    # Palindromic Substring : 앞에서 읽어도 뒤에서 읽어도 같은 문자열 
        answer = ''

        # 홀수 : bab
        # 짝수 : bb
        for i in range(len(s)):

            # 홀수
            odd_sub = ''

            left = i 
            right = i    
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
                odd_sub = s[left+1:right]
                
            # 짝수
            even_sub = ''

            left = i
            right = i + 1

            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
                even_sub = s[left+1:right]


            # 가장 긴 팰린드롬 갱신
            answer  = max(answer, odd_sub,even_sub, key=len)
        return answer 