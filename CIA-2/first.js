class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
        // document.write()
    }
}

// Creating an instance of the Person class
const person1 = new Person("John Doe", 25);

// Displaying the details
person1.displayDetails();
