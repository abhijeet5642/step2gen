
//1. Map Student data

const students = new Map();
students.set(1, {
  name: "rohit",
  age: 22,
  courses: [".net", "Blazor"],
});
students.set(2, {
  name: "mohit",
  age: 26,
  courses: ["c#", "sql"],
});
students.set(3, {
  name: "abhi",
  age: 23,
  courses: ["AI", "Ar-Vr"],
});
students.set(4, {
  name: "sami",
  age: 22,
  courses: ["javascript", "java"],
});

//  2. destructuring of data
function getStudentInfo(id){
    const {name:n , age:a} =students.get(id);
    return `studentName is ${n} and age is${a}`;
}
const result = getStudentInfo(4);
// console.log(result);

// 3.Spread Operator

function addCourse(id,NewCourse){
    const student = students.get(id);
    students.set(id,
      {...student,
        courses:[...student.courses,NewCourse]})

    

}

addCourse(2,'math');

// console.log(students)


//4. rest parameter

function addCourses (id, ...courses){


  const student = students.get(id);
  students.set(id,{
    ...student,
    courses:[...student.courses,...courses]

  })
}


addCourses(1,'c++' , 'java', 'c')
// console.log(students);
// 


//5. Nullish coalescing operator

const studentMissingData  = students.get(6)
// console.log(studentMissingData)

const answer= studentMissingData ?? 'student id does not exit'
console.log(answer);


// 6. Sets 
const set = new Set();
set.add()

function getUniqueCourses(){

}
