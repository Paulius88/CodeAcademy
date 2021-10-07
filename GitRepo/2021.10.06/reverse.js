function reverse(input) {
    return input.toString().split('').reverse().join('');
}
let rev2 = input => input.toString().split('').reverse().join('');
console.log(reverse(123));
console.log(rev2('abc'));