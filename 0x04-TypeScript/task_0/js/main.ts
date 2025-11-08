interface Student{
      firstName: string;
      lastName: string;
      age: number;
      location: string;
}

const student1: Student = {
      firstName: "John",
      lastName: "Doe",
      age: 20,
      location: "New York"
};
const student2: Student = {
      firstName: "Jane",
      lastName: "Smith",
      age: 22,
      location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];
const table: HTMLTableElement = document.createElement("table");
const headerRow: HTMLTableRowElement = document.createElement("tr");
const headers: string[] = ["First Name", "Last Name", "Age", "Location"];
headers.forEach((headerText: string) => {
      const header: HTMLTableHeaderCellElement = document.createElement("th");
      header.textContent = headerText;
      headerRow.appendChild(header);
}  );
table.appendChild(headerRow);