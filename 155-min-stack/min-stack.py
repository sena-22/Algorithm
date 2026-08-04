class MinStack:

    def __init__(self):
        self.stack = []
        self.minStack = []

    def push(self, value: int) -> None:
        self.stack.append(value)
        
        if not self.minStack:
            self.minStack.append(value)
        else:
            # 현재 시점의 최소값을 매번 저장 => 최소값 히스토리 저장
            self.minStack.append(min(value, self.minStack[-1]))

    def pop(self) -> None:
        
        self.stack.pop()
        self.minStack.pop() # stack과 같은 시점의 마지막 값 제거

    def top(self) -> int:
        return self.stack[-1]
        
    def getMin(self) -> int:
        return self.minStack[-1]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(value)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()

# MinStack()
# 빈 스택을 생성한다.
# void push(int value)
# value를 스택의 맨 위에 넣는다.
# void pop()
# 스택의 맨 위에 있는 원소를 제거한다.
# int top()
# 스택의 맨 위에 있는 원소를 반환한다. (제거하지는 않음)
# int getMin()
# 현재 스택에 들어있는 원소들 중 가장 작은 값을 반환한다.