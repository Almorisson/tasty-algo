// Array for testing Algos
var arrayOfNums = [ -1, -3, -5, 19, 0, 43, 101, 208 ];
// Find the 3 largest number in a array in a shorted order
// Complexity: O(n) in time | O(1) in space
function threeLargestNum(_array) {
	const threeLargestNum = [ null, null, null ];

	if (_array.length < 3) {
		console.log('The length of the array must be at least greater than 3.');
	}

	for (let i = 0; i < _array.length; i++) {
		if (_array[i] != null) {
			updateThreeLargestNum(threeLargestNum, _array[i]);
		}
	}
	return threeLargestNum;
}

// Update a array of three elements by shifting an older number and replace it by new one
/*
    #####

        IMPORTANT: When testing if a element of the array is null or not, avoid to use strict equality because:
            - Strict equality with null keyword give us false in any case. Because of this fact, your condition will never be satisfy
            - You could see the doc in MDN by following the following link: https://developer.mozilla.org/fr/docs/Glossaire/Truthy
    ####
 */
function updateThreeLargestNum(threeLargestNum, num) {
	if (threeLargestNum[2] == null || num > threeLargestNum[2]) {
		shiftAndUpdate(threeLargestNum, num, 2);
	} else if (threeLargestNum[1] == null || num > threeLargestNum[1]) {
		shiftAndUpdate(threeLargestNum, num, 1);
	} else if (threeLargestNum[0] == null || num > threeLargestNum[0]) {
		shiftAndUpdate(threeLargestNum, num, 0);
	}
}
// TODO: correct this function. It don't work as it would do
// Update the element index in index position with the number
function shiftAndUpdate(threeLargestNum, newNum, index) {
	for (let i = 0; i < threeLargestNum.length; i++) {
		if (index === i) {
			threeLargestNum[i] = newNum;
		} else {
			threeLargestNum[i] = threeLargestNum[i + 1];
		}
	}
    return threeLargestNum;
}

// Call the functions
/*
console.log(threeLargestNum([]));
console.log(threeLargestNum([ 0 ]));
console.log(threeLargestNum([ null, null, null ]));
console.log(threeLargestNum([ null ])); */
console.log(shiftAndUpdate([12, 0, 45], 55, 2));
console.log(shiftAndUpdate([12, 0, 45], 55, 0));
console.log(shiftAndUpdate([12, 0, 45], 55, 1));

/* console.log(threeLargestNum([ 100, -200, -5, 6, 10, 11, 205]));
console.log(threeLargestNum([ 100, -200, -5, 0, 19, 104, 600 ]));
console.log(threeLargestNum(arrayOfNums));
 */
