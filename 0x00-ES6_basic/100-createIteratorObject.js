export default function createIteratorObject(report) {
  const employees = [];
  // eslint-disable-next-line
    for (const dept of Object.keys(report.allEmployees)){
    // eslint-disable-next-line
        for (const staff of report.allEmployees[dept]){
      employees.push(staff);
    }
  }
  return employees;
}
