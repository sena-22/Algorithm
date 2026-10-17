class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # 중복 문자가 없는 연속된 부분 문자열의 최대 길이
        # 슬라이딩 윈도우

        # 최대 길이 저장
        longest_sub = 0
        
        cur_list = []

        for i in range(len(s)):
            # 리스트에 중복 문자 검사
            if s[i] in cur_list:
                # 중복 문자가 없어질 때까지 리스트 앞부분 제거
                while s[i] in cur_list:
                    cur_list.pop(0)
            cur_list.append(s[i])

            longest_sub = max(longest_sub, len(cur_list))

        return longest_sub
