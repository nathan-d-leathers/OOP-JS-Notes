// OOP in JS 

/*

-doesnt actually have proper OOP 'classes' like python
-instead js has Prototypes
-nobody actualy uses protypes as intended, we will uses protoytpes to recreat oop, like in python
-JS relies on 'this' instead of 'self

N O T E:

to run a website
- in terminal type: python -m http.server
opens a server on port8000
- type in localhost:8000 on browser
-cntrl + c to exit server in terminal

code written here can be interacted with in the console using Inspect Element

*/

// console.log('hello world')
// console.log(this)

// const alice = {
//     name: 'Alice',
//     sayHello function (){
//         console.log(`Hello, my name is ${this.name}.`)
//     }
// }

// alice.sayHello()

// const bob = {
//     name: 'bob',
//     sayHello: () => {
//         console.log(`Hello, my name is ${this.name}.`)
//     }
// }

// // bob.sayHello()


// const carol = {
//     name: 'carol',
//     sayHello: function(){
//         setTimeout(function(){
//             console.log(`My name is ${this.name}.`)
//         })
//     }
// }

// // carol.sayHello()

// const dan = {
//     name: 'dan',
//     sayHello: function(){
//         setTimeout(() => {
//             console.log(`My name is ${this.name}.`)
//         })
//     }
// }

// dan.sayHello()

class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name}.`)
    }
    sayGoodbye(){
        console.log(`See ya later!`)
    }
    toString(){
        return `here's ${this.name} as an object: ` +  `\n${this.name} : ${this.age}`
    }
}

const mallory = new Person('mallory',32)

mallory.sayHello()
mallory.sayGoodbye()
console.log(mallory + '!!!')
