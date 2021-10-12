function getLaugh(input) {
    let laugh = [];
    for (let i = 1; i <= input; i++) {
        laugh.push('ha');
    }
    return laugh.join('');
}
console.log(getLaugh(4));