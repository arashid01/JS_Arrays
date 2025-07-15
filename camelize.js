// 18. Camelize

/*
Translate border-left-width to borderLeftWidth
Write the function camelize(str) that changes dash-separated words 
like “my-short-string” into camel-cased “myShortString”.
That is: removes all dashes, each word after dash becomes uppercased.

Examples:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/

// function camelize(str) {
// 	let arr = str.split('-');
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (i === 0) {
// 			newArr.push(arr[i]);
// 			continue;
// 		}
// 		newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
// 	}
// 	let camelized = newArr.join('');
// 	return camelized;
// }

//another solution

function camelize(str) {
	return (str
		.split('-')
		.map((word, idx) => idx == 0 ? word : word[0].toUpperCase() + word.slice(1))
		.join('')
	);
}
console.log(camelize("-webkit-transition"));