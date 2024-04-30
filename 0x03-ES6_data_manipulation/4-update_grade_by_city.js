export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);
  const studentsByCityUpgrade = studentsByCity.map((student) => {
    const gradeObject = newGrades.find((grade) => student.id === grade.grade);
    const updatedGrade = gradeObject ? gradeObject.grade : 'N/A';
    return {
      ...student,
      grade: updatedGrade,
    };
  });

  return studentsByCityUpgrade;
}
