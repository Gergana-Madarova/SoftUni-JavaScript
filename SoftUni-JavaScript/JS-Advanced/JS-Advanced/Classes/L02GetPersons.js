function getPerson() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = Number(age);
            this.email = email;
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let arrayPersons = [];

    person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    arrayPersons.push(person);
    person = new Person('SoftUni');
    arrayPersons.push(person);
    person = new Person('Stephan', 'Johnson', 25);
    arrayPersons.push(person);
    person = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    arrayPersons.push(person);

    return arrayPersons;
}

console.log(getPerson());
