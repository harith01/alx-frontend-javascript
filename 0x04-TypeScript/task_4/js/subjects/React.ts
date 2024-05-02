/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />


namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    class React extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }

        getAvailbaleTeacher(): string {
            const experience = this.teacher.experienceTeachingReact
            return this.teacher.experienceTeachingReact > 0 ? 
              `Available Teacher: ${this.teacher.firstName}`:
              'No Teacher Availbale'
        }
    }
}