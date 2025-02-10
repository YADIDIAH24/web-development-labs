// String
let courseName = "Web Development";
console.log("Course Name:", courseName);

// Number
const credits = 3;
console.log("Credits:", credits);

// Boolean
let isRequired = true;
console.log("Is this course required?", isRequired);

// Array
let grades = ["A", "B", "C", "D", "F"];
console.log("Available Grades:", grades);
console.log("First Grade in List:", grades[0]);

// Object
let student = {
    name: "John Doe",
    id: "12345",
    major: "Computer Science"
};
console.log("Student Information:", student);
console.log("Student Name:", student.name);

// Performing some operations
let totalCredits = credits * 2; // Example operation
console.log("Total Credits after taking two courses:", totalCredits);

let passed = grades.includes("A") || grades.includes("B"); // Checking if A or B is present
console.log("Has the student passed?", passed);

// Modifying object properties
student.minor = "Mathematics"; // Adding a new property
console.log("Updated Student Information:", student);
