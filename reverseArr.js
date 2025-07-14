// 9. Reverse array

const original = [1, 2, 3, 4];
const reversed = [];
for (let i = original.length - 1; i >= 0; i--) {
	reversed.push(original[i]);
}
console.log(reversed);