let subjects = ["Js", "Node", true];

subjects.forEach((element) => {
  console.log(element);
});

// length of the array - subjects.length

let student = {
  Name: "A",
  Age: 23,
};

// array of objects
let students = [
  {
    Name: "Krrish",
    Age: 20,
  },
  {
    Name: "Sawan",
    Age: 21,
  },
  {
    Name: "Arpit",
    Age: 22,
  },
];

// students[2].Name.length;

let displayInfo = (student) => {
  console.log("---------------");
  console.log(
    `Name of the student is ${student.Name} and age is ${student.Age}`
  );
};

students.forEach(displayInfo);

// TODO: Print the sum of every element in the array

// TODO: How to access the last element of the array ?

// TODO: Print Odd numbers in 2D array

// adding a new element in end of the array
students.push({ Name: "Kavya", Age: 19 });

students.forEach(displayInfo);

// remove and return last element from the array
let deletedStudent = students.pop();
console.log(deletedStudent);

// remove and return the first element of the array
console.log(students.shift());

// add the element in the start of the array
students.unshift({ Name: "Rohit", Age: 18 });

students.forEach(displayInfo);

// iterating over the object
let specialStudent = {
  Name: "Jhau Mau",
  Age: 15,
  Address: "Ambala",
};

specialStudent.Name;

for (let key in specialStudent) {
  console.log("Key Name", key);
  console.log(specialStudent[key]);
}

// optional chaining
let detailedInfo = {
  Name: "Gaurav",
  Address: {
    // Contact: {
    //   Phone: "123",
    //   Landline: "000",
    // },
    Colony: "Durga Nagar",
    District: "Ambala",
    State: "Haryana",
  },
};

console.log(detailedInfo.Address?.Contact?.Phone); // remove ? and remove Contact from above and see the error
