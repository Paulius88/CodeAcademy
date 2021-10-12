for (let i=2; i <= 10; i++){
    if (i % 2 === 0)
        console.log('cycle' + i);
}
let i = 2;
while (i <= 10){
    if (i % 2 === 0)
        console.log('while  ' + i);
        i++;
}
let x = 2;
do {
    if (x % 2 === 0){
        console.log('doWhile ' + x);
    }
    x++;
} while (x <= 10);