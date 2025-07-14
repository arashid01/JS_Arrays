// 15. Is array a palindrome?

function isPali(arr) {
	let newArr = [];
	for (let i = arr.length - 1; i >= 0; i--)
		newArr.push(arr[i]);
	for (let i = 0; i < arr.length; i++) {
		if (newArr[i] != arr[i])
			return false;
	}
	return true;
}
console.log(isPali([1, 2, 3, 2, 1]));