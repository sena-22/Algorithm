# 정수 n이 주어질 때, 1부터 n까지의 결과를 담은 문자열 배열 answer를 반환하라.

# 각 i(1 ≤ i ≤ n)에 대해 다음 규칙을 적용한다.

# i가 3과 5 모두로 나누어떨어지면 → "FizzBuzz"
# i가 3으로만 나누어떨어지면 → "Fizz"
# i가 5로만 나누어떨어지면 → "Buzz"
# 위 조건에 모두 해당하지 않으면 → 숫자 i를 문자열(String) 로 넣는다.

class Solution:
    def fizzBuzz(self, n: int) -> List[str]:

        answer = []

        for i in range(1,n+1):
            if i % 3 == 0 and i % 5 == 0 :
                answer.append("FizzBuzz")
            elif i % 3 == 0 and i % 5 != 0:
                answer.append("Fizz")
            elif i % 3 != 0 and i % 5 == 0:
                answer.append("Buzz")
            else :
                answer.append(str(i))
        return answer

        





