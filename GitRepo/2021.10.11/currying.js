//Currying in JS
function sum (a, b) {
	 return a + b ; 
	}
let currySum = function(sum){
	return function(a){
		return function(b){
			returnfnctn(a, b);
			}
		}
	}
	let currySum = curry(sum);
console.log(sum(1, 2));
console.log(currySum(1),(2));

let x = currySum(1);
let result = x(2);

console.log(result);