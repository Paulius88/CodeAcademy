 class Moto extends Car {
    constructor(brand, model, year, wheels) {
        super(brand, model, year);
        this.wheels = wheels;
    }
   getWheelsNumber() {
        if (this.wheels == 3) {
            return ' motobike has ' + this.wheels + ' wheels';
        } else if (this.wheels == 2) {
            return ' motobike has ' + this.wheels + ' wheels';
        } else {
            return 'Not a bike';
        }
    }
}