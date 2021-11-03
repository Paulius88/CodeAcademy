let firstMovie = new Movie(
    ' The Godfathe',
    1972,
    'Francis Ford Coppola',
    6000000,
    134966411);

let secondMovie = new Movie(
    'Pulp Fiction',
    2010,
    'Quentin Tarantino',
    8000000,
    213928762);

console.log(firstMovie.getIntroduction(), firstMovie.getProfit());
console.log(secondMovie.getIntroduction(), secondMovie.getProfit());