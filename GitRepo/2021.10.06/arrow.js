let findMin = (a,b) => {
return Math.min(a,b);
}

console.log(findMin(1,5));
console.log(findMin(3,5));
console.log(findMin(7,5));

let formtaLogMesseage = message =>{
	message => '[${(new Date).toISOString()}] => (${message})';
} return message;

let formtaLogMesseageArrow2 = message => '[${(new Date).toISOString()}] => (${message})';
console.log(formtaLogMesseage('Hello World'));