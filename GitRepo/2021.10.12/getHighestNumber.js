let getHighestNumber = (...num) => {
    let numArray = [...num];
    let largest = numArray[0] || null;
    let number = null;
    for (let i = 0; i < numArray.length; i++) {
        number = num[i];
        largest = Math.max(largest, number);
    }
    return largest;
}
console.log(getHighestNumber(11,15,73));
console.assert(getHighestNumber(34,7,8,55,6,56,7,9,52) == 56);