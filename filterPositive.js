// 10. Filter positive numbers

const nums = [4, -2, 9, -7, 1];
const positive = [];
for (const num of nums) {
	if (num > 0)
		positive.push(num);
}
console.log(positive);