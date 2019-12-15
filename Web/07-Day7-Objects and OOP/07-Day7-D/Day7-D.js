class Person {
    constructor(options){
        this.name = options.name;
        this.age = options.age;
    }

    info(){
         console.log(this.name);
    }

}



const person = new Person( {age: 44, name: 'Tom' });
person.info() // The person is called Tom and is 44 years old