let auto = new Car(
    'Skoda',
    'Octavia',
    2001
);
console.log(auto.getIntroduction());
console.log(auto.getAge());

let auto2 = new Car(
    'Toyota',
    'Rav4',
    2019
);
console.log(auto2.getIntroduction());
console.log(auto2.getAge());


let moto = new Moto(
    'Yamaha',
    'YZ250',
    2022,
    '2'
);
console.log(moto.getIntroduction());
console.log(moto.getAge());
console.log(moto.getWheelsNumber());