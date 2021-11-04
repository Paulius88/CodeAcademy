class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getIntroduction() {
        return `${this.make} ${this.model}`;
    }
    getAge() {
        let age = new Date;
        if (age.getFullYear() - this.year <= 10) {
            return ' 10 metų arba naujesnis ';
        }
            return ' 11 metų arba senesnis ';
    }
}