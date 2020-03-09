const num_array = [ -1, -4, 1, 3, 5, 6, 11, 8 ];
// Sort a given array by higher order
// Complexity: O(n) in time | O(1) in space
function sort_array(_array) {
	for (let i = 0; i < _array.length; i++) {
		var temp;
		if (_array[i] > _array[i + 1]) {
			temp = _array[i];
			_array[i] = _array[i + 1];
			_array[i + 1] = temp;
		}
	}

	return _array;
}

// Find the two numbers in an array that satisfy a given target sum
// Complexity: O(nlog(n)) in time | O(1) in space
function twoNumberSum1(sorted_array, targetSum) {
	var left = 0; // left pointer
	var right = sorted_array.length - 1; // right pointer
	var sum = 0;

	while (left < right) {
        sum = sorted_array[left] + sorted_array[right];
        if (sum === targetSum) {
            return [ sorted_array[left], sorted_array[right] ];
        } else if (sum > targetSum) {
			--right;
		} else if (sum < targetSum) {
			++left;
		}
	}

    return [null, null];
}

// Find the two numbers in an array that satisfy a given target sum
// Complexity: O(n^2)) in time | O(1) in space
function twoNumberSum2(_array, targetSum) {
    for (let i = 0; i < _array.length - 1; i++) {
        var firstNum = _array[i];
        for (let j = i + 1; j < _array.length; j++) {
            var secondNum = _array[j];

            if (firstNum + secondNum === targetSum) {
                return [firstNum, secondNum];
            }
        }
    }

    return [null, null];
}
// TODO: Find why the function don't return the correct Object
// Find the two numbers in an array that satisfy a given target sum
// Complexity: O(n) in time | O(n) in space
function twoNumberSum3(_array, targetSum) {

    var nums = {}; // Hash Table

    for (var i = 0; i < _array.length; i++) {
        var num = _array[i];
        var potentialMatchNum = targetSum - num;
        if (nums[potentialMatchNum] != undefined) {
            return [potentialMatchNum, num, nums];
        } else {
            nums[num] = true;
        }
    }

    return [null, null];
}
// call functions
console.log(sort_array(num_array));
//console.log(twoNumberSum2(sort_array(num_array), 6));
//console.log(twoNumberSum3(sort_array(num_array), -5));
