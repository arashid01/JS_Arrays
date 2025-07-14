// 14. Most frequent number

const nums = [1, 2, 2, 3, 3, 3, 4];
function seenCount(char, arr) {
	let count = 0;
	for (const el of arr) {
		if (el === char)
			count++;
	}
	return count;
}
function highestCount(arr) {
	let count = 0;
	let char = null;
	for (let i = 0; i < arr.length; i++) {
		let seen = seenCount(arr[i], arr);
		if (seen > count) {
			char = arr[i];
			count = seen;
		}
	}
	return char;
}
console.log(highestCount(nums));