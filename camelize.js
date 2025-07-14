// 18. Camelize

function camelize(str) {
	let arr = str.split('-');
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (i === 0) {
			newArr.push(arr[i]);
			continue;
		}
		newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
	}
	let camelized = newArr.join('');
	return camelized;
}
console.log(camelize("-webkit-transition"));