// 12. Custom .map()

function myMap(arr, func) {
	let res = [];
	for (const el of arr)
		res.push(func(el));
	return res;
}
console.log(myMap([1, 2, 3], n => n * 2));