let checkNumber = Number => {
  if ((Number % 3 === 0) && (Number % 5 === 0)) {
    return 'Process number as devided by 3 and 5';
  }
  else if (Number % 3 === 0){
    return 'Number devided by 3';
  }
  else if (Number % 5 === 0){
    return 'Number devided by 5';
  }
  else {
    return 'Number cant be devided by 3 or 5 ';
  }
}

console.log(checkNumber(15));

