class Solution:
    def isValid(self, s: str) -> bool:
    # 문자열 s가 주어집니다. 이 문자열에는 '(', ')', '{', '}', '[', ']' 문자만 포함되어 있습니다.
    # 주어진 문자열이 유효한지(valid) 판단하세요.

    # 가장 최근에 열린 괄호로 닫아야 함
        stack = []

        for i in s:
            # i가 여는 괄호면 => 스택에 넣기

            # i가 닫는 괄호면 스택에서 마지막 괄호 꺼내서 짝이 맞는지 확인
            if i in '({[':
                stack.append(i)
            elif i in ')}]':

                if not stack: # 처음에 닫는 괄호로 시작 => 틀림
                    return False

                last = stack[-1]
                if i == ')' and last != '(':
                    return False
                if i == '}' and last != '{':
                    return False
                if i == ']' and last != '[':
                    return False

                stack.pop()

        return len(stack) == 0 # 남아있으면 False
