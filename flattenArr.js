// 13. Flatten 2D array

const nested = [[1, 2], [3, 4], [5]];
let flat = [];
for (let i = 0; i < nested.length; i++) {
	for (let j = 0; j < nested[i].length; j++)
		flat.push(nested[i][j]);
}
console.log(flat);