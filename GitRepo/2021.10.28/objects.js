//person = new Object;

Object.prototype.getFullNameGlobal = function(){
	return 'function is "getFullnameGlobal'
};

let person = {
	firstName: 'testFirstName',
	lastName: 'tesLastName',

	sgetFullName: function(){
		console.log('getFullName', param);
		return '${this.firstName', parana} ${this.lastName} ${param}';

		

	}
	sgetFullNameArrow: () => {
		return 'getFullname';
	}
	sgetFullName2: () => {
		return 'getFullname'
	}
};

console.log(person, person.toString());

person.age = 34;

console.log(person);

console.log(person.testFirstName, person.tesLastName, person.age);


let somePersonKey = 'firstName';
console.log(person(somePersonKey), person['lastName']);

console.log(person.sgetFullName());

person.shout = function(){
	return 'getFullname is "shout"';
}

console.log(person.shout());
console.log(person.getFullNameGlobal());
console.log({}.getFullNameGlobal());