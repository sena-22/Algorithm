import sys
try:
    sys.stdin = open("input.txt", "r")
except:
    pass
input = sys.stdin.readline

# 현재상태 체크
myList = [0]*4
# 조건 충족 체크
checkSecret = 0

S,P = map(int,input().split())
A = list(input())
checkList = list(map(int,input().split()))
answer = 0
dna_list = ['A','C','G','T']
def adjustValue(c,cmd):
    global checkList,myList,checkSecret

    idx = dna_list.index(c)

    if cmd == "plus":
        myList[idx] += 1
        if myList[idx] == checkList[idx]:
            checkSecret += 1
    else:
        if myList[idx] == checkList[idx]:
            checkSecret -= 1
        myList[idx] -= 1

# 값이 0 => 만족함
for i in range(4):
    if checkList[i] == 0:
        checkSecret += 1

# 초기 문자열 
for i in range(P):
    adjustValue(A[i],"plus")

# 4가지 알파벳 모두 조건 만족
if checkSecret == 4:
    answer += 1
  
for i in range(P,S):
    # j: 앞문자
    j = i-P
    adjustValue(A[i],"plus")
    adjustValue(A[j],"minus")

    if checkSecret == 4:
        answer += 1

print(answer)