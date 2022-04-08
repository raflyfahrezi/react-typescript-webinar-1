// Started with console.log
console.log('Hello World');
// Variable
let myName = 'Farhan';
let myAge = 22;
let myAddress = 'Jawa Barat, Bandung';
const person1 = {
    name: myName,
    age: myAge,
    gender: 'Pria',
    address: myAddress,
};
console.log(person1.name);
console.log(person1.age);
console.log(person1.gender);
console.log(person1.address);
// Function
const greet = ({ name, age, address }) => {
    return `Hello my name is ${name}. I'm ${age} and I live in ${address}.`;
};
console.log(greet({ name: 'Farhan', age: 22, address: 'Jawa Barat, Bandung' }));
// Array
const arrayOfPerson = [
    {
        name: 'Farhan',
        age: 20,
        address: 'Jawa Barat, Bandung',
    },
    {
        name: 'Asep',
        age: 21,
        address: 'Jawa Barat, Bandung',
    },
];
console.log(arrayOfPerson);
