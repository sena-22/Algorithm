# 문자열 배열 strs가 주어졌을 때, 애너그램인 문자열끼리 같은 그룹으로 묶어라.
# → 결과는 어떤 순서로 반환해도 된다.

# 빈문자열 [[""]]
# ["a"] => [["a"]]

class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:

        hash = {}

        for s in strs:

            key = ''.join(sorted(s)) # sorted는 정렬된 결과를 리스트로 반환

            if key in hash:
                # 해당 키를 가진 배열에 넣기
                hash[key].append(s)
            else:
                # 새로운 키로 추가 
                hash[key] = [s]
        # 해시를 배열로 바꿔서 리턴
        answer = []

        for value in hash.values():
            answer.append(value)
        
        return answer 