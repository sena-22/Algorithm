import sys
input = sys.stdin.readline

N, M = map(int, input().split())
tree_list = list(map(int, input().split()))

start, end = 0, max(tree_list)
answer = 0

while start <= end:
    mid = (start + end) // 2
    
    cut_tree = sum(tree - mid for tree in tree_list if tree > mid)

    if cut_tree >= M:
        answer = mid
        start = mid + 1
    else:
        end = mid - 1

print(answer)

