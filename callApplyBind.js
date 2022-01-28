function Teacher (name, subject) {
    this.name = name
    this.subject = subject
}

function Person1(name, subject, age) {
    Teacher.call(this, name, subject)
    this.age = age
}

function Person2(name, subject, age) {
    Teacher.apply(this, [name, subject])
    this.age = age
}

function Person3(name, subject, age) {
    let newTeacher = Teacher.bind(this)
    newTeacher(name, subject)
    this.age = age
}

var p1 = new Person1("Sanjeev", "English", 25)
console.log(p1)

var p2 = new Person2("Raja", "Mathematics", 26)
console.log(p2)

var p3 = new Person3("Suryakant", "Physics", 24)
console.log(p3)