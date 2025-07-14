// 7. Count even numbers

const nums = [1, 4, 7, 10, 12, 13];
let count = 0;
for (const num of nums) {
	if (num % 2 == 0)
		count++;
}
console.log(count);