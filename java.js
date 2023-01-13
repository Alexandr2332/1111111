'use strict'
let cat = {};
cat.name = "Roxy";
cat.lags = 4;
cat.color = "gray";
cat["full name"] = "roxy, красивая кошка";
console.log(cat["full name"]);


function Person (neme, age){
    this.neme = neme;
    this.age = age;
}
let person_1 = new Person ('Alex', 23);
console.log(person_1.neme);
console.log(person_1.age);
console.log(person_1);
Person.prototype.specialty = "менеджер";
console.log(person_1.specialty);

let cot = {
    legs: 4,
    nama : 'roxy',
    collor : 'Grey'
}
let kitten = Object.create(cot);
console.log(kitten.nama);
console.log(kitten.legs);
console.log(kitten.collor);

class worker{
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.rate * this.days;
    }
}
worker = new worker('Alex', 'Gulyaev', 100, 10);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.getSalary());


let city1 = {};
city1.name = "ГородN";
city1.population = 10000000;
let city2 = {
    name:"ГородM",
    population:1e6
}
city1.getName = city2.getName = function(){
    return this.name;
}
console.log(city1.getName());
console.log(city2.getName());
city1.exportStr = city2.exportStr = function(){
    return`name = ${this.name}\npopulation=${this.population}\n`;
}
console.log(city1.exportStr());
console.log(city2.exportStr());
function getObj(){
    return this;
}
city1.getCity = city2.getCity = getObj;
console.log(city1.getCity().getName() + ' ' + city1.getCity().population);
console.log(city2.getCity().getName() + ' ' + city1.getCity().population);

let d1 = [45, 78, 10, 3]
d1[4] = 100
console.log(d1);
console.log(d1.slice(3,5))


let d3 = [45, 78, 10, 3]
d3[4] = 100
let sum3 = 0
for(let s3 in d3) {
    sum3 += d3[s3]
}
console.log(sum3)

let d4 = [45, 78, 10, 3]