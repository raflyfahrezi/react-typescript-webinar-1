// Started with console.log
console.log('Hello World')

// Variable
let myName: string = 'Farhan'
let myAge: number = 22
let myAddress: string = 'Jawa Barat, Bandung'

// Type & Interface
type gender = 'Pria' | 'Wanita'

interface person {
    name: string
    age: number
    address: string
    gender?: gender
}

const person1: person = {
    name: myName,
    age: myAge,
    gender: 'Pria',
    address: myAddress,
}

console.log(person1.name)
console.log(person1.age)
console.log(person1.gender)
console.log(person1.address)

// Function
const greet = ({ name, age, address }: person): string => {
    return `Hello my name is ${name}. I'm ${age} and I live in ${address}.`
}

console.log(greet({ name: 'Farhan', age: 22, address: 'Jawa Barat, Bandung' }))
