import employees from "./config.js";

const allActiveEmp = () => {
  return employees.filter((emp) => emp.active === true);
};

console.log(allActiveEmp());
