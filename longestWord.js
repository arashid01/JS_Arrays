const words = ["hi", "hello", "banana", "car"];
let longest = 0;
let word = "";
for (let i = 0; i < words.length; i++) {
	if (words[i].length > longest) {
		longest = words[i].length;
		word = words[i];
	}
}
console.log(word);