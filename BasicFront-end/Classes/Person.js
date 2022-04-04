class Person {
    name;
    age;
    gender;

    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    introduceOneSelf() {
        console.log(`My name is ${this.name}, i am ${this.age} years old, and I am ${this.gender}`)
    }

}


class Office extends Person {
    officeName;
    constructor(name, age, gender, officeName) {
        super(name, age, gender)
        this.officeName = officeName
    }

    introduceOneSelf() {
        console.log(`My name is ${this.name}, i am ${this.age} years old, and I am ${this.gender} and I work at ${this.officeName}`)
    }


}
// const kaustubh = new Person('Kaustubh', 22, 'Male')
// const Keval = new Person("Keval",22,"male")
// Keval.introduceOneSelf()
// kaustubh.introduceOneSelf()
const kaustubh = new Office('Kaustubh', 22, 'Male', "PPLWork")
kaustubh.introduceOneSelf()