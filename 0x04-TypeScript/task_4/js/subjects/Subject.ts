/// <reference path="Teacher.ts" />
namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;
    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}