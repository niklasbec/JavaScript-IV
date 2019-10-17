
// Project Managers - extensions of Instructors

class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.country = attributes.country;
        this.age = attributes.age;
    }
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.country}.`
    }
}

class Instructors extends Person{
    constructor (attributes){
    super(attributes);
    this.wage = attributes.wage;
    this.contracttimeYears = attributes.contracttimeYears;
    this.speciality = attributes.speciality;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;  
    }
    demo (subject) {
        return `Today we are learning about ${subject}`
    }
    grade (student, subject) {
        return `${student.name} receives full points on ${subject}`  
    }
}

class Students extends Person{
    constructor (attributes){
    super(attributes);
    this.isaCost = attributes.isaCost;
    this.status = attributes.status;
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    }
    graduate () {
        this.status = 'graduated'
    }
    payOffIsa (amount) {
        this.isaCost -= amount
        return `${this.isaCost} left to pay!`
    }
    listsSubjects () {
        for (let i = 0; i < this.favSubjects; i++) {
            console.log(this.favSubjects[i])
        }
    }
    PRAssignment (subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class Managers extends Instructors{
    constructor (attributes){
    super(attributes)
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
    }
    standUp (slackChannel) {
        return `${this.name} announces to ${slackChannel.channelName}, @channel standy times!`
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

//Instructors

const jake = new Instructors ({
    name: 'Jake',
    country: 'England',
    age: 25,
    wage: 50000,
    contracttimeYears: 4,
    speciality: 'Vue.js',
    favLanguage: 'JS',
    catchPhrase: 'Dont forget the homies'
})


const mike = new Instructors ({
    name: 'Mike',
    country: 'England',
    age: 28,
    wage: 55000,
    contracttimeYears: 2,
    speciality: 'React.js',
    favLanguage: 'JS',
    catchPhrase: 'Suh dude'
})

//Students

const niklas = new Students ({
    name: 'Niklas',
    country: 'Germany',
    age: 23,
    isaCost: 27500,
    status: 'not graduated',
    previousBackground: 'Student of Economics',
    className: 'Web EU4',
    favSubjects: ['Vue.js', 'CSS']
})


const emma = new Students ({
    name: 'Emma',
    country: 'England',
    age: 29,
    isaCost: 27500,
    status: 'not graduated',
    previousBackground: 'Teacher',
    className: 'Web EU4',
    favSubjects: ['Foor Loops', 'For Loops']
})

//Managers

const austen = new Managers ({
    name: 'Austen',
    country: 'USA',
    age: 30,
    wage: 200000,
    contracttimeYears: 20,
    gradClassName: 'None',
    favInstructor: 'Alex'
})

const matt = new Managers ({
    name: 'Matt',
    country: 'Germany',
    age: 36,
    wage: 60000,
    contracttimeYears: 5,
    gradClassName: 'Unknown',
    favInstructor: 'Alex'
})

//function calls

slackChannel = {
    channelName: 'Web EU 4'
}

niklas.graduate()
console.log(niklas.payOffIsa(2000));
console.log(niklas.speak())
console.log(niklas.PRAssignment('JS'));
console.log(jake.grade(niklas, 'JS'));
console.log(niklas.sprintChallenge('JS'));
console.log(austen.debugsCode(niklas, 'JS'));
console.log(austen.standUp(slackChannel));
console.log(jake.demo('JS'));
