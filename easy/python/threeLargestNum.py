
# List for testing Algo
listOfNums = [-1, 10, -3, -5, 43, 0, 18, 101, 208]
listOfNums2 = [-1, 10, -3, 5, 19, 0, 43, 101, 208, 11]

# To understand how the function work, please refer to the docstring of the function
# Complexity: O(n) in time | O(n + 3 ~ n) in space
def threeLargestNum(_list):
    """
        Arguments:
            _list: A list of numbers

        Find the three largest numbers in a list of numbers in great order
    """
    threeLargestNumList = [None, None, None]

    if len(_list) < 3:
        print("The length of the list must be greater than 3")

    for num in _list:
        updateThreelargestList(threeLargestNumList, num)

    return threeLargestNumList


def updateThreelargestList(threeLargestNum, num):
    """
        Arguments:
            threeLargestNum: A list of thee numbers ordered in the ratest order
            num: The Potential number to update

        Shift an number in the list and update the list by the new one
    """
    if threeLargestNum[2] == None or num > threeLargestNum[2]:
        shiftAndUpdate(threeLargestNum, num, 2)
    elif threeLargestNum[1] == None or num > threeLargestNum[1]:
        shiftAndUpdate(threeLargestNum, num, 1)
    elif threeLargestNum[0] == None or num > threeLargestNum[0]:
        shiftAndUpdate(threeLargestNum, num, 0)

# TODO: correct this function. It don't work as it would do # DONE: Function works fine now
def shiftAndUpdate(threeLargestNum, newNum, index):
    """
        Arguments:
        threeLargestNum: A list of thee numbers ordered in the ratest order
        newNum: The number to insert in the list
        index: The position of the element to update

        Update the list given in param by shifting, moving and inserting elements
    """
    for i in range(index + 1):
        if i == index:
            threeLargestNum[i] = newNum
        else:
            threeLargestNum[i] = threeLargestNum[i + 1]



print(threeLargestNum(listOfNums))  # Call of the function for testing
print(threeLargestNum(listOfNums2))  # Call of the function for testing
print(threeLargestNum([-200, -55, 103, 5, 7, 19]))  # Call of the function for testing
