import employees from "./config.js";

const sortEmp = () => {
  console.log(employees.sort((a, b) => b.age - a.age));
};

sortEmp();
