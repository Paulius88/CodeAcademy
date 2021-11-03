function Book (name, author, year){
    this.name = name;
    this.author = author;
    this.year = year;
};
Book.prototype.getAuthorName = function(){
    return `${this.name} ${this.author}`;
}
Book.prototype.getYear = function(){
    return this.year;
}
Book.prototype.getAge = function(){
    return (new Date).getFullYear() - this.year;
}

let books = [
    new Book('Catch-22', ' by  Joseph Heller', 1961),
    new Book('Wabi Sabi', ' by Beth Kempton', 2018),
    new Book('A brief history of time', ' by Stephen Hawking', 1988),
]; 
for(let a of books){
    console.log(`${a.getAuthorName()} - ${a.getAge()} years ago.`);
};







// Date.prototype,calcAge = function(year) {
// 	return thi.getFullYear() - year;
// }


// function Book(name, author, year) {
// 	this.name = name;
// 	this.author = author;
// 	this,year = year;

// 	this.getYear = function() {
// 		return this.year;
// 	}
// }


// Book.prototype.getNameAndAuthor = function() {
// 	return '${this.name} ${this.author}';
// }
// Book.prototype.getYear = function() {
// 	return this.year;
// }

// Book.prototype.getAge = function() {
// 	return (new Date).getFullYear() - this.year;
// }

// let books = [
// 	new Book('1.Pride and Prejudice by Jane'),
// 	new Book(''),
// 	new Book(''),

// ];



// books.push(new Book('dgfhgjkkj', 'xdfcgvhbjn'));


// for (let b of books) {
// 	console.log('${b.getNameAndAuthor()} - ${b.getAge()}');
// }

// ------skaiciuoja knygos amziu, pavadinima ir autoriu










