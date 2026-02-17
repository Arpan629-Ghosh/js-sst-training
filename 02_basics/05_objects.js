const course = {
  courseName: "Js",
  price: "999",
  courseInstructor: "Hitesh",
};

//object destructuring

const { courseInstructor: instructor } = course;
console.log(instructor);
