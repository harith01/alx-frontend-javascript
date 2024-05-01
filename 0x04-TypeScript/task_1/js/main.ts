// The Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;   //add any attribute to the object
}

// The Directors interface that extends the Teacher interface
interface Directors extends Teacher {
    numberOfReports: number;
}

// Interface for the function, printTeacherFunction
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// printTeacher function
const printTeacher: printTeacherFunction = function(firstName, lastName) {
    return `${firstName[0]}. ${lastName}`;
}

// Student class interface
interface StudentClassInterface {
   firstName: string;
   workOnHomework(): string;
   displayName(): string;
}

// Student class constructor interface
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

//Student class
const StudentClass = class StudentClass implements StudentClassInterface {

    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }


}

