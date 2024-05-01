// The student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

//Create two students
const student: Student = {
    firstName: 'Haris',
    lastName: 'Yusuf',
    age: 30,
    location: 'Minna'
}

const student2: Student = {
    firstName: 'Usman',
    lastName: 'Hassan',
    age: 32,
    location: 'Kaduna'
}

// Create an array of students
const studentsList = [student, student2];


// Create a Vanilla JS table
const table = document.createElement('table');
const head = document.createElement('thead');
const header_row = document.createElement('tr');
const firstName_header = document.createElement('th');
const location_header = document.createElement('th');
firstName_header.textContent = 'First Name';
location_header.textContent = 'Location';
header_row.appendChild(firstName_header);
header_row.appendChild(location_header);
head.appendChild(header_row);
table.appendChild(head);

const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
    const trow = document.createElement('tr');
    const firstname = document.createElement('td');
    const location = document.createElement('td');
    firstname.textContent = student.firstName;
    location.textContent = student.location;
    trow.appendChild(firstname);
    trow.appendChild(location);
    tbody.appendChild(trow)
})

table.appendChild(tbody);
document.body.appendChild(table);