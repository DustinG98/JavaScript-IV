// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}//this closes Person class constructor


class Instructor extends Person{
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subjectStr){
        return `Today we are learning about ${subjectStr}`
    }
    grade(student, subjectStr){
        return `${student.name} receives a perfect score on ${subjectStr}`
    }
    changeGrade(student, min, max){
        student.grade += Math.floor(Math.random() * (max - min) + min);
        return student.grade;
    }
}//this closes Instructor class constructor

class Student extends Person{
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
        this.grade = attr.grade;
    }
    listsSubjects(){
        let len = this.favSubjects.length;
        for(let i = 0; i < len; i++){
            console.log(this.favSubjects[i]);
        }
    }//this closes listsSubjects
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }//this closes PRAssignment
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }//this closes sprintChallenge
    graduate(){
        if(this.grade >= 70){
            return `${this.name}, CONGRATULATIONS YOU ARE READY TO GRADUATE!!!!`
        } else {
            return `${this.name}, ask your instructor to change your grade.`
        }
    }
}//this closes Student class Constructor


class ProjectManager extends Instructor{
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

//END OF CONSTRUCTORS


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const brit = new Instructor({
    name: 'Britt',
    location: 'Canada',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const dustin = new Student({
    name: 'Dustin',
    location: 'USA',
    age: 37,
    previousBackground: 'None ;)',
    className: 'Web25',
    favSubjects: ['Javascript', 'HTML', 'CSS', 'REACT'],
    grade: 68
  });

const braden = new Student({
    name: 'Braden',
    location: 'USA',
    age: 78,
    previousBackground: 'HE\'S A GOD',
    className: 'Web25',
    favSubjects: ['Javascript', 'HTML', 'CSS', 'REACT'],
    grade: 80
  });

const roenz = new ProjectManager({
    name: 'Roenz',
    location: 'USA',
    age: 99,
    previousBackground: 'I dunno',
    className: 'Web25',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'Ummm PT something',
    favInstructor: 'Brit'
  });

const dylan = new ProjectManager({
    name: 'Dylan',
    location: 'USA',
    age: 99,
    previousBackground: 'I dunno',
    className: 'Web25',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'Ummm who\'s Dylan',
    favInstructor: 'Brit'
  });

  console.log('******INSTRUCTORS*********')
  console.log(fred)
  console.log(fred.demo('Javascript'))
  console.log(brit.grade(dustin, 'Javascript'))
  console.log('******STUDENTS*********')
  console.log(dustin)
  braden.listsSubjects()
  console.log(dustin.PRAssignment('Javascript'))
  console.log(braden.sprintChallenge('Javascript'))
  console.log('******PROJECT MANAGERS*********')
  console.log(roenz)
  console.log(roenz.standUp('Web25'))
  console.log(dylan.debugsCode(dustin, 'Javascript'))
  console.log('******STRETCH*********')
  console.log(brit.changeGrade(dustin, -2, 2))
  console.log(dustin.graduate())
  console.log(braden.graduate())