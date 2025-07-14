// 17. Capitalize each word

let arr = ["dog", "cat", "apple"];
let newArr = [];
for (const el of arr) {
	newArr.push(el.charAt(0).toUpperCase() + el.slice(1));
}
console.log(newArr);