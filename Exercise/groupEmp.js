import employees from "./config.js";

const groupEmployees = () => {
  return employees.reduce((acc, emp) => {
    if (!acc[emp.department]) {
      acc[emp.department] = [];
    }
    acc[emp.department].push(emp.name);
    return acc;
  }, {});
};

console.log(groupEmployees());
