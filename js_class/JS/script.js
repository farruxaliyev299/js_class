function Student(name,surname,paid,pin,gpa){
    this.firstName = name; //Ferrux
    this.lastName = surname; //Aliyev
    this.paid = paid;
    this.pin = pin;
    this.gpa = gpa;

    // this.getFullName = () => {
    // return this.firstName + ' ' + this.lastName; //Ferrux Aliyev
    // }

    this.getFullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
}

function University(name,location,classes=[]){
    this.name = name;
    this.location = location;
    this.classes = classes;
    this.addClasses = function(className){
        this.classes.push(className);
    }
    this.removeClasses = function(className){
        this.classes.pop(className);
    }

    this.transferStudent = function(student,className){
        // this.classes.find(classN => classN.name === className).addStudents(student);
        this.classes.find(classN => {
            return classN.students.some(telebe => telebe.pin === student.pin)
        })
        for (let i = 0; i < this.classes.length; i++) {
            for (let j = 0; j < this.classes[i].students.length; j++) {
                if(this.classes[i].students[j] === student){
                    this.classes[i].removeStudents(this.classes[i].students[j].pin);
                }
            }
        }
    }
}

function Class(name, degree, currentYear, students = []){
    this.name = name;
    this.degree = degree;
    this.currentYear = currentYear;
    this.students = students;
    this.addStudents = function(student){
        this.students.push(student);
    }
    this.removeStudents = function(pin){
        this.students = this.students.filter(student => student.pin !== pin);
    }
}

const BDU = new University("Bdu","Elmler");


let BP201 = new Class("Bp201",90,2022);
let BP202 = new Class("Bp202",80,2021);


let student1 = new Student("Ferrux","Aliyev","Not Paid",1,95);
let student2 = new Student("Samir","Aliyev","Not Paid",2,90);
let student3 = new Student("Emil","Haci","Not Paid",3,95);
let student4 = new Student("Ali","Vali","Not Paid",4,99);

BDU.addClasses(BP201);
BDU.addClasses(BP202);



BP201.addStudents(student1);
BP201.addStudents(student2);

BP202.addStudents(student3);
BP202.addStudents(student4);

// BP202.removeStudents(4);

BDU.transferStudent(student2, "Bp202");


console.log(BDU);




