export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find((grade) => student.id === grade.studentId);
      return {
        ...student,
        grade: gradeObject ? gradeObject.grade : 'N/A',
      };
    });
}
