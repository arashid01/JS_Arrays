// 19. Filter range

/* 
Filter range

Write a function filterRange(arr, a, b) that gets an array arr,
looks for elements with values higher or equal to a and
lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)
*/

// function filterRange(arr, a, b) {
// 	let filtered = [];
// 	for (let i = 0; i < arr.length; i++)
// 	{
// 		if (arr[i] >= a && arr[i] <= b)
// 			filtered.push(arr[i]);
// 	}
// 	return (filtered);
// }

// another solution

function filterRange(arr, a, b) {
	return (arr.filter(item => (a <= item && item <= b)));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);