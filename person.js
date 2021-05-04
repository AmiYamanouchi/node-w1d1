
(function(require, exports, module, __filename, __dirname){
})
console.log(__dirname,__filename);

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`my name is ${this.name} and ${this.age} years old `);
    }
}


module.exports = Person;