interface student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const students1: student = {
    firstName: "John",
    lastName: "Doe",
    age: 18,
    location: "New York",

};

const student2: student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Carlifornia",
}

const studentList: student[] = [students1, student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");

const headers =["First Name", "Location"];
headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);    
});

table.appendChild(headerRow);


studentList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
})

document.body.appendChild(table);

