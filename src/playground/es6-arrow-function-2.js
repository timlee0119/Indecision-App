const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55,1,1001));

const user = {
    name: 'Tim', 
    cities: ['Taipei', 'Tainan', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + 'has lived in ' + city + '!');
    }
};

console.log(user.printPlacesLived());

// Challenge
const multiplier = {
    numbers: [10,20,30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}

console.log(multiplier.multiply());
