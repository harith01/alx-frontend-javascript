/* eslint-disable no-param-reassign */
export default function getStudentIdsSum(students) {
  return students.reduce((sumId, student) => {
    sumId += student.id;
    return sumId;
  }, 0);
}
/* eslint-disable no-param-reassign */
