// Create the DirectorInterface interface with the 3 expected methods
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Create the TeacherInterface interface with the 3 expected methods
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Create a class Director that will implement DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }
}

// Create a class Teacher that will implement TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workTeacherTasks(): string {
        return 'Getting to work'
    }
}

// Create a function createEmployee
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) return new Teacher()
    return new Director() 
}

// Write a function isDirector:
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director
}

// Write a function executeWork:
function executeWork(employee: Director | Teacher): string {
    return isDirector(employee) ? employee.workDirectorTasks(): employee.workTeacherTasks();
}

// String literal types
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History'
}