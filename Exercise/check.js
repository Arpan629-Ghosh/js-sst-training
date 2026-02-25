import employees from "./config.js";

const checkEmp = () => {
  console.log(employees.some((emp) => emp.salary > 65000));
};
checkEmp();
