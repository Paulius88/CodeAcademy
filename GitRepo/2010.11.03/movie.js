class Movie{

	constructor (name, year, director, budget, income){
    this.name = name;
    this.director = director;
    this.year = year;
    this.budget = budget;
    this.income = income;
}

getIntroduction = function(){
    return `${this.name} ${this.director} ${this.year}` ;
}

getProfit() {

  return 'Movie made' + (this.income - this.budget) + ' US dollars';
    }
}
