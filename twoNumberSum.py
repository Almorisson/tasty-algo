# Declare an initialize the main list variable
listOfNum = [2, 7, 8, 11, -1, -3]

# Find the two numbers in an array that satisfy a given target sum
# Complexity: O(n^2)) in time | O(1) in space
def twoNumberSum1(_list, targetSum):
    for i in range(0, len(_list)):
        firstNum = _list[i]
        for j in range(1, len(_list)):
            secondNum = _list[j]
            if firstNum + secondNum == targetSum:
                return [firstNum, secondNum]

    return []

# Find the two numbers in an array that satisfy a given target sum
# Complexity: O(n)) in time | O(n) in space
def twoNumberSum2(_list, targetSum):
    nums = {}
    for num in _list:
        potentialSum = targetSum - num
        if potentialSum in nums:
            return [potentialSum, num]
        else:
            nums[num] = True
    return []
# Find the two numbers in an array that satisfy a given target sum
# Complexity: O(nlog(n))) in time | O(1) in space
def twoNumberSum3(_list, targetSum):
    left = 0;
    right = len(_list) - 1
    _list.sort() # sort the list before making any calculate
    while left < right:
        if _list[left] + _list[right] == targetSum:
            return [_list[left], _list[right]]
        elif _list[left] + _list[right] < targetSum:
            left += 1
        elif _list[left] + _list[right] > targetSum:
            right -= 1

    return []

# Call of functions
print(twoNumberSum1(listOfNum, 10))
print(twoNumberSum2(listOfNum, 10))
print(twoNumberSum3(listOfNum, 10))
